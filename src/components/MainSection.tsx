const MainSection = () => (
    <section className="main-section">
        <div className="top-section">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80px' }}>
                <p style={{ color: 'var(--dark-grey)', fontSize: '24px' }}>Hosted in Germany</p>
                <img src="/public/lock.png" alt="lock" style={{ width: '48px', height: '48px', padding: '16px' }} />
            </div>
        </div>
        <div className="middle-section">
            <h1>TIME AND LEAVE MANAGEMENT FOR HR<br /> WARRIORS</h1>
            <p>Grow your business efficient with knowing what<br /> happens on the workflow, and how it happens!</p>
        </div>
        <div className="bottom-section">
            <button className="btn btn-primary">SCHEDULE DEMO</button>
            <button className="btn btn-secondary">SIGN UP</button>
        </div>
        <img src="/public/Mountains.svg" alt="Section Image" className="section-image" />
    </section>
);

export default MainSection;