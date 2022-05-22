const Input = (props) => (
    <div className="uk-margin">
        <div className="uk-inline uk-width-1-1">
            <button className="uk-form-icon uk-form-icon-flip" onClick={props.onClear}
                    uk-icon="icon: close"
                    type="button">&nbsp;</button>
            <input className={"uk-input uk-form-large" + (props.error ? " uk-form-danger": "")}
                   placeholder="Paste song url here..."
                   type="text"
                   autoFocus
                   value={props.value}
                   onChange={props.onChange}
                   ref={props.inputRef}
            />
        </div>

        {/*<div className="uk-button-group uk-width-1-1">*/}
        {/*    <input className={"uk-input uk-form-large" + (props.error ? " uk-form-danger": "")}*/}
        {/*           placeholder="Paste song url here..."*/}
        {/*           type="text"*/}
        {/*           value={props.value}*/}
        {/*           onChange={props.onChange}*/}
        {/*    />*/}
        {/*</div>*/}
        <div className={"uk-text-left"} style={{height: "0px"}}>
            {props.error && <small className={"uk-form-danger"}>{props.error}</small>}
        </div>
    </div>
)

export default Input