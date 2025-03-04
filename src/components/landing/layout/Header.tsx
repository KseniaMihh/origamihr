
const Header = () => {
    const onSignUpClick = () => {
        console.log('Sign Up');
    }
    return  (
    <header>
        <img className="logo" src="/Logo.svg" alt="logo"/>
        <nav>
            <ul className="navbar">
                <li><a href="#">Features</a></li>
                <li><a href="#">Log In</a></li>
            </ul>
        </nav>
        <a className="cta" href="#">
            <button onClick={onSignUpClick} >SIGN UP</button>
        </a>
    </header>
    );
};

export default Header;