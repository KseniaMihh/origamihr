const featureSection = {
    display: 'flex',
    alignItems: 'center',
}

const FeatureSection = () => {
    return   (
        <section style={featureSection} className="feature-section">
            <div className="image-container">
                <img src="/be_happy.jpg" alt="Be happy" className="feature-image"/>
            </div>
            <div className="content-container">
                <h2 className="features">What you can do with Origami HR</h2>
                <div className="feature-list">
                    <h3 className="features">TIME MANAGEMENT</h3>
                    <ul className="feature-list">
                        <li>Efficient time tracking system</li>
                        <li>Extensive reporting and exporting functionalities</li>
                        <li>User, project and client management</li>
                        <li>Actionable business intelligence</li>
                    </ul>
                    <h3 className="features">LEAVE MANAGEMENT</h3>
                    <ul>
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