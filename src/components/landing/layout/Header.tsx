import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
    featuresPage: boolean;
    SignUp: boolean;
}


const Header: React.FC<HeaderProps> = ({featuresPage, SignUp}) => {
    const navigate = useNavigate();

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
            {SignUp && <button onClick={() => navigate('/signup')}>SIGN UP</button>}
        </div>
    </header>
    );
};

export default Header;