import LandingSections from "./sections";
import Header from "./layout/Header.tsx";
import Footer from "../../shared/components/Footer.tsx";

const LandingPage = () => (
    <>
        <Header />
        <LandingSections />
        <Footer />
    </>
);

export default LandingPage;