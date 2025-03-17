import {CSSProperties} from "react";
import FunctionsSection from "../landing/sections/FunctionsSection.tsx";
import Footer from "../../shared/components/Footer.tsx";

const block: CSSProperties = {
    textAlign: 'center',
    padding: '80px 20px',
    backgroundColor: 'var(--dark-grey)',
    boxSizing: 'border-box',
    borderTop: '2px solid white',
}

const FeaturesPage = () => {
    const onSignUpClick = () => {}
    return (

        <>
            <header>
                <img className="logo" src="/Logo.svg" alt="logo"/>
                <nav>
                    <ul className="navbar">
                        <li><a href="/login">Log In</a></li>
                    </ul>
                </nav>
                <div className="cta">
                    <button onClick={onSignUpClick}>SIGN UP</button>
                </div>
            </header>

            <div style={block}>
                <h2 style={{color: 'var(--white)'}}>Unfold your HR potential</h2>
                <p style={{color: 'var(--white)'}}>An HR system built for minimum input and maximum output</p>
            </div>

            <FunctionsSection
                h2 ="All plans come along with these advantages"
                showH3={false}
                h2Style={{backgroundColor: 'var(--light-gray)', padding: '20px', margin: '50px 210px 20px'}}
            />
            
            <Footer />
        </>

    );
};

export default FeaturesPage;