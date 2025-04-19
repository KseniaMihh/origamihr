import LandingPage from "./components/landing";
import {Route, Routes} from "react-router";
import { FeaturesPage, LoginPage, SignupPage } from "./components/dashboard";
import { UserProvider } from "./context/UserContext";
import DashboardPage from "./components/dashboard/dashboardPage.tsx";

const App = () => (
    <UserProvider>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="features" element={<FeaturesPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
        </Routes>
    </UserProvider>
);

export default App;
