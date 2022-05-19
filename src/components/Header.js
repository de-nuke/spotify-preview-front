import logo from "../images/lupa-logo-shadow.png";

const Header = (props) => (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
            {props.text}
        </p>
    </header>
)

export default Header;