import {CSSProperties} from "react";

const functionsSection: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    color: 'var(--dark-grey)',
    backgroundColor: 'var(--white)',
    borderBottom: '70px solid var(--orange)',
}

const h4Functions: CSSProperties = {
    fontSize: '26px',
    marginTop: '30px',
    marginBottom: '10px',
    fontWeight: '500',
}

const liFunctionList: CSSProperties = {
    position: 'relative',
    paddingLeft: '20px',
    marginBottom: '10px',
    fontSize: '24px',
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


const FunctionsSection = () => {
    return (

    <section  style={functionsSection} className="functions-section">
        <div style={{display: 'flex', flexDirection: 'column'}} className="functions-container">
            <h2 style={{fontSize: '32px', marginBottom: '20px', textAlign: 'center', fontWeight: '600'}} className="functions">Time tracking and HR management on the go</h2>
            <h3 style={{fontSize: '28px', fontWeight: '600', marginBottom: '40px', textAlign: 'center'}} className="functions">Why choose Origami HR</h3>
            <div style={{display: 'flex'}} className="column-full">
                <div style={{flex: '1', margin: '0 40px 0 40px'}} className="column-1">
                    <h4 style={h4Functions} className="functions">Dedicated to help you</h4>
                    <ul style={{paddingLeft: '25px'}} className="functions-list">
                        <li style={liFunctionList}>1-on-1 demos to show you the ins and outs</li>
                        <li style={liFunctionList}>Onboarding assistance</li>
                        <li style={liFunctionList}>Support in German and English</li>
                    </ul>
                    <h4  style={h4Functions} className="functions">Scale up</h4>
                    <ul  style={{paddingLeft: '25px'}} className="functions-list">
                        <li style={liFunctionList}>HR management tool that grows with your business</li>
                        <li style={liFunctionList}>Modular single page application</li>
                        <li style={liFunctionList}>Multilingual user interface</li>
                        <li style={liFunctionList}>Manage multiple offices and departments</li>
                    </ul>
                    <h4  style={h4Functions} className="functions">Security in the cloud</h4>
                    <ul  style={{paddingLeft: '25px'}} className="functions-list">
                        <li style={liFunctionList}>Cloud based and accessible from anywhere</li>
                        <li style={liFunctionList}>SSL certificate</li>
                        <li style={liFunctionList}>24/7 backup</li>
                        <li style={liFunctionList}>Consistent and automatic security updates</li>
                    </ul>
                </div>
                <div  style={column2} className="column-2">
                    <div style={{display: 'flex', flexDirection: 'column', width: '100%'}} className="list-container">
                        <h4  style={h4Functions} className="functions">Functionality & clean design</h4>
                        <ul style={{paddingLeft: '25px'}} className="functions-list">
                            <li style={liFunctionList}>Comprehensive user management</li>
                            <li style={liFunctionList}>Modern design with optimized information for smaller screens</li>
                            <li style={liFunctionList}>Developed together with HR experts</li>
                        </ul>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', width: '100%'}} className="img-container">
                        <img style={{width: '80%', height: 'auto', margin: '-40px'}} src="/view.png" alt="Optimized View" className="functions-img"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default FunctionsSection;