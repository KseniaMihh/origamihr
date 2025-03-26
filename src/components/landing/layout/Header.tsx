import {Link, useNavigate} from "react-router-dom";
interface HeaderProps {
    featuresPage: boolean;
}


const Header: React.FC<HeaderProps> = ({featuresPage}) => {
    const navigate = useNavigate();
    const onSignUpClick = () => {
        navigate('/features');
    }

    return  (
    <header>
        <img onClick={() => navigate('/')} className="logo" src="/Logo.svg" alt="logo"/>
        <nav>
            <ul className="navbar">
                {featuresPage && <li><Link to="/features">Features</Link></li>}
                <li><Link to="/login">Log In</Link></li>
            </ul>
        </nav>
        <div className="cta">
            <button onClick={onSignUpClick}>SIGN UP</button>
        </div>
    </header>
    );
};

export default Header;