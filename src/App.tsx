import Header from './components/Header';
import MainSection from './components/MainSection';
import GdprSection from './components/GdprSection';
import FeatureSection from './components/FeatureSection';
import FunctionsSection from './components/FunctionsSection';
import Footer from './components/Footer';
import './App.css'; // Import component-specific styles

const App = () => (
    <div className="App">
        <Header />
        <MainSection />
        <GdprSection />
        <FeatureSection />
        <FunctionsSection />
        <Footer />
    </div>
);

export default App;