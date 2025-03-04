import {CSSProperties} from "react";

const featureSection: CSSProperties = {
    fontFamily: 'Josefin Sans',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'var(--light-gray)',
}

const h2Features: CSSProperties = {
    fontSize: '32px',
    position: 'relative',
    margin: '20px 150px',
    padding: '5px 5px',
    color: 'var(--dark-grey)',
    fontWeight: '610',
}

const h3Features: CSSProperties = {
    fontSize: '26px',
    marginTop: '10px',
    marginBottom: '10px',
    color: 'var(--dark-grey)',
    fontWeight: '600',
}

const liFeatureList: CSSProperties = {
    fontSize: '24px',
    fontWeight: 'normal',
    position: 'relative',
    paddingLeft: '20px',
    marginBottom: '10px',
    color: 'var(--dark-grey)',
}

const FeatureSection = () => {
    return   (
        <section style={featureSection} className="feature-section">
            <div style={{flex: '1', maxWidth: '40%', marginRight: '40px'}} className="image-container">
                <img style={{width: '100%', height: 'auto', objectFit: 'none', objectPosition: 'left'}} src="/be_happy.jpg" alt="Be happy" className="feature-image"/>
            </div>
            <div style={{flex: '1', maxWidth: 'none', alignSelf: 'flex-start'}} className="content-container">
                <h2  style={h2Features} className="features">What you can do with Origami HR</h2>
                <div style={{display: 'grid', marginBottom: '5px'}} className="feature-list">
                    <h3 style={h3Features} className="features">TIME MANAGEMENT</h3>
                    <ul style={{paddingLeft: '48px', lineHeight: '30px'}} className="feature-list">
                        <li style={liFeatureList}>Efficient time tracking system</li>
                        <li style={liFeatureList}>Extensive reporting and exporting functionalities</li>
                        <li style={liFeatureList}>User, project and client management</li>
                        <li style={liFeatureList}>Actionable business intelligence</li>
                    </ul>
                    <h3 style={h3Features} className="features">LEAVE MANAGEMENT</h3>
                    <ul style={{paddingLeft: '48px', lineHeight: '30px'}}>
                        <li style={liFeatureList}>Customizable calendar overview</li>
                        <li style={liFeatureList}>Automate your employee leave requests</li>
                        <li style={liFeatureList}>Customizable approval workflow</li>
                        <li style={liFeatureList}>Interactive reports and export functionality</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
export default FeatureSection;