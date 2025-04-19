import LandingPage from "./components/landing";
import {Route, Routes} from "react-router";
import { FeaturesPage, LoginPage, SignupPage } from "./components/dashboard";
import { UserProvider } from "./context/UserContext";

const App = () => (
    <UserProvider>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="features" element={<FeaturesPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
        </Routes>
    </UserProvider>
);

export default App;
