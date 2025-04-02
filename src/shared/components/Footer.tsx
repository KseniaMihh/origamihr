import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    const onScheduleClick = () => {
        console.log('Schedule Demo');
    }
    return (
    <footer>
        <div className="footer-content">
            <h2 style={{color: 'var(--white)'}}>Become an HR warrior</h2>
            <p style={{color: 'var(--white)'}}>Ask us for a customized solution or create your FREE account</p>
            <div className="footer-buttons">
                <button onClick={onScheduleClick} className="btn btn-primary">SCHEDULE DEMO</button>
                <button onClick={() => navigate('/signup')} className="btn btn-secondary">SIGN UP</button>
            </div>
            <hr/>
            <div className="footer-logo">
                <img src="/Logo.svg" alt="logo"/>
            </div>
            <div className="social-media">
                <a href="https://www.facebook.com/origamihr" target="_blank" rel="noopener noreferrer">
                    <img src="/facebook-logo.png" alt="Facebook"
                         style={{color: 'var(--orange)', height: '60px', width: '60px'}}/>
                </a>
            </div>
            <p style={{fontSize: '16px', color: 'var(--white)'}}>&copy; 2025 All Rights Reserved. Origami HR® is a registered trademark of
                Bulchi IT AG</p>
            <div className="footer-links">
                <a href="#" className="privacy">Privacy & Terms</a>
                <a href="#" className="legal">Legal Disclosure</a>
                <a href="#" className="cookie">Cookie Policy</a>
            </div>
        </div>
    </footer>
    );
};

export default Footer;