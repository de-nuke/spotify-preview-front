import Input from "./Input";
import FormButtons from "./FormButtons";
import React from "react";
import {isValidHttpUrl} from "../utils";

class ValidationError extends Error {}

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "",
            error: "",
        }
        this.formSubmitCallback = props.onSubmit;
    }

    onClickButton = (e) => {
        e.preventDefault();
        let url = this.state.url;
        try {
            url = this.validateUrl(url);
            this.setState({url: url});
            this.formSubmitCallback({url: url});
        } catch (exception) {
            if (exception instanceof ValidationError){
                this.setState({error: exception.message});
            } else {
                throw exception;
            }
        }
    }

    onInputChange = (e) => {
        this.setState({url: e.target.value, error: ""});
    }

    validateUrl(url) {
        // 1. Remove all whitespaces
        url = url.replace(/\s/g, "");
        // 2. Add schema
        if (!(url.startsWith("http://") || url.startsWith("https://"))) {
            url = "https://".concat(url);
        }
        if (isValidHttpUrl(url)) {
            return url;
        }
        else {
            throw new ValidationError("Invalid URL");
        }
    }

    render() {
        return (
            <form className="uk-width-2xlarge uk-inline">
                <Input
                    value={this.state.url}
                    onChange={this.onInputChange}
                    error={this.state.error}/>
                <FormButtons onClick={this.onClickButton}/>
            </form>
        )
    }
}

export default InputForm;