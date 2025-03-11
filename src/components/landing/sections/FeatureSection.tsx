import {CSSProperties} from "react";

const featureSection: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'var(--light-gray)',
}

const FeatureSection = () => {
    return   (
        <section style={featureSection} className="feature-section">
            <div style={{flex: '1', maxWidth: '40%', marginRight: '40px'}} className="image-container">
                <img style={{width: '100%', height: 'auto', objectFit: 'none', objectPosition: 'left'}} src="/be_happy.jpg" alt="Be happy" className="feature-image"/>
            </div>
            <div style={{flex: '1', maxWidth: 'none', alignSelf: 'flex-start'}} className="content-container">
                <h2>What you can do with Origami HR</h2>
                <div style={{display: 'grid', marginBottom: '5px'}} className="feature-list">
                    <h3 className="features">TIME MANAGEMENT</h3>
                    <ul style={{paddingLeft: '48px', lineHeight: '30px'}} className="feature-list">
                        <li>Efficient time tracking system</li>
                        <li>Extensive reporting and exporting functionalities</li>
                        <li>User, project and client management</li>
                        <li>Actionable business intelligence</li>
                    </ul>
                    <h3 className="features">LEAVE MANAGEMENT</h3>
                    <ul style={{paddingLeft: '48px', lineHeight: '30px'}}>
                        <li>Customizable calendar overview</li>
                        <li>Automate your employee leave requests</li>
                        <li>Customizable approval workflow</li>
                        <li>Interactive reports and export functionality</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
export default FeatureSection;