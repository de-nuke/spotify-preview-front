import Input from "./Input";
import FormButtons from "./FormButtons";
import React from "react";
import {isValidHttpUrl, utilizeFocus} from "../utils";

class ValidationError extends Error {}

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "",
            error: "",
        }
        this.inputFocus = utilizeFocus();
        this.formSubmitCallback = props.onSubmit;
    }

    componentDidMount() {
        // window.addEventListener("focus", this.onFocus);
    }

    componentWillUnmount() {
        // window.removeEventListener("focus", this.onFocus);
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

    onInputClear = (e) => {
        this.setState({url: "", error: ""});
        this.inputFocus.setFocus();
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
                    error={this.state.error}
                    onClear={this.onInputClear}
                    inputRef={this.inputFocus.ref}/>
                <FormButtons onClick={this.onClickButton}/>
            </form>
        )
    }
}

export default InputForm;
