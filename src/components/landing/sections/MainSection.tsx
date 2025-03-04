import {CSSProperties} from "react";

const mainSection: CSSProperties = {
    position: 'relative',
    display: 'grid',
    gridTemplateRows: 'repeat(3, 1fr)',
    backgroundColor: 'var(--blue-3)',
    color: 'var(--white)',
    padding: '0',
    height: '700px',
}

const MainSection = () => {
    const onScheduleClick = () => {
        console.log('Schedule Demo');
    }
    const onSignUpClick = () => {
        console.log('Sign Up');
    }
    return (
        <section style={mainSection} className="main-section">
            <div style={{display:'flex', justifyContent: 'flex-end'}} className="top-section">
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80px'}}>
                    <p style={{color: 'var(--dark-grey)', fontSize: '24px'}}>Hosted in Germany</p>
                    <img src="/lock.png" alt="lock" style={{width: '48px', height: '48px', padding: '16px'}}/>
                </div>
            </div>
            <div style={{backgroundColor: 'var(--orange)', padding: '12px 16px', textAlign: 'left'}} className="middle-section">
                <h1 style={{fontSize: '34px', marginBottom: '40px', padding: '0 16px', fontWeight: 'normal'}}>TIME AND LEAVE MANAGEMENT FOR HR<br/> WARRIORS</h1>
                <p style={{fontSize: '24px', padding: '0 16px'}}>Grow your business efficient with knowing what<br/> happens on the workflow, and how it happens!</p>
            </div>
            <div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '30px'}} className="bottom-section">
                <button onClick={onScheduleClick} className="btn btn-primary">SCHEDULE DEMO</button>
                <button onClick={onSignUpClick} className="btn btn-secondary">SIGN UP</button>
            </div>
            <img style={{position: 'absolute', bottom: '0', right: '0', width: '50%'}} src="/Mountains.svg" alt="Section Image" className="section-image"/>
        </section>
    );
};
export default MainSection;