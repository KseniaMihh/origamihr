import LandingPage from "./components/landing";
import DashboardPage from "./components/dashboard";
import {Route, Routes} from "react-router";

const App = () => (
    <>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="users" element={<DashboardPage />} />
        </Routes>
    </>
);

export default App;