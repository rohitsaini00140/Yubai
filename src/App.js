import "./App.css";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import HeroSection from "./pages/HeroSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Private from "./pages/Private";

import Media from "./pages/Media";
import ScrollToTop from "./component/ScrollToTop";
import Carrier from "./pages/carrier1/Carrier";
import Contact from "./pages/Contact";
import BecomePartner from "./pages/becomePartner/BecomePartner";

function App() {
  return (
    <Router>
      {" "}
      {/* Router ka proper istemal kiya gaya hai */}
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/private" element={<Private />} />

          <Route path="/carrier" element={<Carrier />} />
          <Route path="/media" element={<Media/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/partner" element={<BecomePartner/>} />

        </Routes>

        <Footer />
        <ScrollToTop/>
      </div>
    </Router>
  );
}

export default App;
