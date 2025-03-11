import {useNavigate} from "react-router";

const Header = () => {
    const navigate = useNavigate();
    const onSignUpClick = () => {
        console.log('Sign Up');
        navigate('/users');
    }

    return  (
    <header>
        <img className="logo" src="/Logo.svg" alt="logo"/>
        <nav>
            <ul className="navbar">
                <li><a href="/users">Features</a></li>
                <li><a href="#">Log In</a></li>
            </ul>
        </nav>
        <div className="cta">
            <button onClick={onSignUpClick} >SIGN UP</button>
        </div>
    </header>
    );
};

export default Header;