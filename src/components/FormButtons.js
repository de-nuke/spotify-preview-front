import SubmitButton from "./SubmitButton";

const FormButtons = (props) => (
    <div className="uk-align-right uk-button-group">
        <SubmitButton onClick={props.onClick}/>
    </div>
)

export default FormButtons;