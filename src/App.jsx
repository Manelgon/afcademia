import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import AvisoLegal from "./pages/AvisoLegal.jsx";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad.jsx";
import PoliticaCookies from "./pages/PoliticaCookies.jsx";
import DeclaracionAccesibilidad from "./pages/DeclaracionAccesibilidad.jsx";
import CookieBanner from "./components/CookieBanner.jsx";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white text-gray-900">
        <NavBar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aviso-legal" element={<AvisoLegal />} />
            <Route path="/privacidad" element={<PoliticaPrivacidad />} />
            <Route path="/cookies" element={<PoliticaCookies />} />
            <Route path="/accesibilidad" element={<DeclaracionAccesibilidad />} />
          </Routes>
        </div>
        <Footer />
        <CookieBanner />
      </div>
    </Router>
  );
}
