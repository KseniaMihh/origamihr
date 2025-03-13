import LandingPage from "./components/landing/index.tsx";
import {Route, Routes} from "react-router";
import DashboardPage from "./components/dashboard";

const App = () => (
    <>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="features" element={<DashboardPage />} />
        </Routes>
    </>
);

export default App;