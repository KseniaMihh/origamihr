import LandingPage from "./components/landing/index.tsx";
import {Route, Routes} from "react-router";
import LoginPage from "./components/dashboard/LoginPage";
import FeaturesPage from "./components/dashboard/featuresPage";

const App = () => (
    <>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="features" element={<FeaturesPage />} />
            <Route path="login" element={<LoginPage />} />
        </Routes>
    </>
);

export default App;