import { useUser} from "../../context/UserContext.tsx";
import {CSSProperties} from "react";

const fieldSection: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '695px',
    backgroundColor: 'var(--blue-3)',
    color: 'var(--white)',
}

const DashboardPage = () => {
    const { currentUser } = useUser();

    return (
        <section style={fieldSection} className="dashboard-page">
            <div>
                <div>
                    <h1 style={{height: '300px'}}>Welcome to your dashboard, {currentUser?.email}!</h1>
                </div>

                <img style={{position: 'absolute', bottom: '0', right: '0', width: '50%'}} src="/Mountains.svg" alt="mountains"/>

            </div>
        </section>
    );
};

export default DashboardPage;