import {CSSProperties} from "react";
import FunctionsSection from "../landing/sections/FunctionsSection.tsx";
import Footer from "../../shared/components/Footer.tsx";
import Header from "../landing/layout/Header.tsx";

const block: CSSProperties = {
    textAlign: 'center',
    padding: '80px 20px',
    backgroundColor: 'var(--dark-grey)',
    boxSizing: 'border-box',
    borderTop: '2px solid white',
}

const FeaturesPage = () => {
    return (

        <>
            <Header featuresPage={false}/>

            <div style={block}>
                <h2 style={{color: 'var(--white)'}}>Unfold your HR potential</h2>
                <p style={{color: 'var(--white)'}}>An HR system built for minimum input and maximum output</p>
            </div>

            <FunctionsSection
                h2 ="All plans come along with these advantages"
                showH3={false}
                h2Style={{backgroundColor: 'var(--light-grey)', padding: '20px', margin: '50px 210px 20px'}}
            />
            
            <Footer />
        </>

    );
};

export default FeaturesPage;