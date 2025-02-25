const GdprSection = () => (
    <section className="gdpr-section">
        <div className="logo-container">
            <img src="/public/lock.png" alt="Logo Lock" className="logo-lock" />
        </div>
        <h2 className="title">Origami HR is the GDPR compliant HR tool</h2>
        <div>
            <div className="content-box">
                <div className="flag-container">
                    <img src="/public/de_flag.png" alt="Germany Flag" className="flag" />
                    <img src="/public/eu_flag.png" alt="EU Flag" className="flag" />
                </div>
                <p className="description">Our European secure data center is located in Frankfurt, Germany</p>
                <p className="description">We offer a speedy and reliable data deletion service</p>
                <p className="description">Built-in reminding service to maintain and update client data according to GDPR</p>
            </div>
        </div>
    </section>
);

export default GdprSection;