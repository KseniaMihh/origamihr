import {Link, useNavigate} from "react-router";

const Header = () => {
    const navigate = useNavigate();
    const onSignUpClick = () => {
        navigate('/features');
    }

    return  (
    <header>
        <img className="logo" src="/Logo.svg" alt="logo"/>
        <nav>
            <ul className="navbar">
                <li><Link to="/features">Features</Link></li>
                <li><Link to="/login">Log In</Link></li>
            </ul>
        </nav>
        <div className="cta">
            <button onClick={onSignUpClick} >SIGN UP</button>
        </div>
    </header>
    );
};

export default Header;