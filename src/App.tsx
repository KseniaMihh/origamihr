import LandingPage from "./components/landing";
import {Route, Routes} from "react-router";
import LoginPage from "./components/dashboard/loginPage";
import FeaturesPage from "./components/dashboard/featuresPage";
import SignUp from "./components/SignUp/SignUp";
import { UserProvider } from "./context/UserContext";

const App = () => (
    <UserProvider>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="features" element={<FeaturesPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUp />} />
        </Routes>
    </UserProvider>
);

export default App;