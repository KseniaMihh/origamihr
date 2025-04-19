import {CSSProperties} from "react";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();
    const onScheduleClick = () => {
        console.log('Schedule Demo');
    }
    const onSignUpClick = () => {
        navigate('/signup');
    }
    return (
        <section style={mainSection} className="main-section">
            <div style={{display:'flex', justifyContent: 'flex-end'}} className="top-section">
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80px'}}>
                    <p>Hosted in Germany</p>
                    <img src="/lock.png" alt="lock" style={{width: '48px', height: '48px', padding: '16px'}}/>
                </div>
            </div>
            <div style={{backgroundColor: 'var(--orange)', padding: '12px 16px', textAlign: 'left'}} className="middle-section">
                <h1>TIME AND LEAVE MANAGEMENT FOR HR<br/> WARRIORS</h1>
                <p style={{padding: '0 16px', color: 'var(--white)'}}>Grow your business efficient with knowing what<br/> happens on the workflow, and how it happens!</p>
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