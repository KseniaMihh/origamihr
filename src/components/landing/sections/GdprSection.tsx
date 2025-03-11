import {CSSProperties} from "react";

const gdprSection: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    boxSizing: 'border-box',
    textAlign: 'center',
    backgroundColor: 'var(--white)',
}

const contentBox: CSSProperties = {
    backgroundColor: 'var(--light-gray)',
    padding: '50px 150px',
    marginBottom: '32px',
    borderRadius: '5px',
    width: 'fit-content',
    height: 'max-content',
    justifySelf: 'center',
}

const GdprSection = () => {
    return (

    <section style={gdprSection} className="gdpr-section">
        <div style={{marginTop: '35px', alignItems: 'center'}} className="logo-container">
            <img style={{width: '150px', height: '150px'}} src="/lock.png" alt="Logo Lock" className="logo-lock" />
        </div>
        <h2 style={{marginBottom: '32px', fontWeight: 'normal'}} className="title">Origami HR is the GDPR compliant HR tool</h2>
        <div>
            <div style={contentBox} className="content-box">
                <div style={{display: 'flex', justifyContent: 'center', marginBottom: '20px'}} className="flag-container">
                    <img style={{width: '85px', margin: '0 10px'}} src="/de_flag.png" alt="Germany Flag" className="flag" />
                    <img style={{width: '85px', margin: '0 10px'}} src="/eu_flag.png" alt="EU Flag" className="flag" />
                </div>
                <p style={{margin: '24px 0'}} className="description">Our European secure data center is located in Frankfurt, Germany</p>
                <p style={{margin: '24px 0'}} className="description">We offer a speedy and reliable data deletion service</p>
                <p style={{margin: '24px 0'}} className="description">Built-in reminding service to maintain and update client data according to GDPR</p>
            </div>
        </div>
    </section>
    );
};

export default GdprSection;