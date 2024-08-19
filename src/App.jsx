import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

const Portfolio = () => {
  return (
    <div className="relative z-0 bg-triple-gradient min-h-screen">
      <StarsCanvas className="fixed top-0 left-0 w-full h-full z-[-1]" />
      <div className="bg-gradient-to-r from-black to-gray-800 bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <div className="relative z-0">
        <Contact />
      </div>

      <Analytics />
      <SpeedInsights />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* <Route path="" element={<LandingPage />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
