import {CSSProperties} from "react";
import * as React from "react";

const functionsSection: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    color: 'var(--dark-grey)',
    backgroundColor: 'var(--white)',
    borderBottom: '70px solid var(--orange)',
}

const column2: CSSProperties = {
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    margin: '0 40px 0 40px',
    position: 'relative',
}

interface FunctionsSectionProps {
    h2?: string,
    showH3?: boolean,
    h2Style?: CSSProperties;
}


const FunctionsSection: React.FC<FunctionsSectionProps> = ({
    h2 = "Time tracking and HR management on the go",
    showH3 = true,
    h2Style
    }) => {
    return (

        <section style={functionsSection} className="functions-section">
            <div style={{display: 'flex', flexDirection: 'column'}} className="functions-container">
                <h2 style={{marginBottom: '20px', textAlign: 'center',...h2Style}} className="functions">{h2}</h2>
                {showH3 &&
                    <h3 style={{marginBottom: '40px', textAlign: 'center'}} className="functions">Why choose Origami
                        HR</h3>}
                <div style={{display: 'flex'}} className="column-full">
                    <div style={{flex: '1', margin: '0 40px 0 40px'}} className="column-1">
                        <h4 className="functions">Dedicated to help you</h4>
                        <ul style={{paddingLeft: '25px'}} className="functions-list">
                            <li>1-on-1 demos to show you the ins and outs</li>
                            <li>Onboarding assistance</li>
                            <li>Support in German and English</li>
                        </ul>
                        <h4 className="functions">Scale up</h4>
                        <ul style={{paddingLeft: '25px'}} className="functions-list">
                            <li>HR management tool that grows with your business</li>
                            <li>Modular single page application</li>
                            <li>Multilingual user interface</li>
                            <li>Manage multiple offices and departments</li>
                        </ul>
                        <h4 className="functions">Security in the cloud</h4>
                        <ul style={{paddingLeft: '25px'}} className="functions-list">
                            <li>Cloud based and accessible from anywhere</li>
                            <li>SSL certificate</li>
                            <li>24/7 backup</li>
                            <li>Consistent and automatic security updates</li>
                        </ul>
                    </div>
                    <div style={column2} className="column-2">
                        <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}
                             className="list-container">
                            <h4 className="functions">Functionality & clean design</h4>
                            <ul style={{paddingLeft: '25px'}} className="functions-list">
                                <li>Comprehensive user management</li>
                                <li>Modern design with optimized information for smaller screens</li>
                                <li>Developed together with HR experts</li>
                            </ul>
                        </div>
                        <div
                            style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', width: '100%'}}
                            className="img-container">
                            <img style={{width: '80%', height: 'auto', margin: '-40px'}} src="/view.png"
                                 alt="Optimized View" className="functions-img"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FunctionsSection;