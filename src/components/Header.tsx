const Header = () => (
    <header>
        <img className="logo" src="/public/Logo.svg" alt="logo" />
        <nav>
            <ul className="navbar">
                <li><a href="#">Features</a></li>
                <li><a href="#">Log In</a></li>
            </ul>
        </nav>
        <a className="cta" href="#"><button>SIGN UP</button></a>
    </header>
);

export default Header;