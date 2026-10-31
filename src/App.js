import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Couples from './pages/Couples-Therapy';
import DiscernmentCounseling from './pages/Discernment-Counseling';
import Family from './pages/Family-Therapy';
import IFSTherapy from './pages/IFS-Therapy';
import Individuals from './pages/Individual-Therapy';
import EMDR from './pages/EMDR-Therapy';
import IPE from './pages/Immigration-Psychological-Evaluation';
import Costs from './pages/Costs';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/Privacy-Policy';

import './App.css';
// import EMDR from './components/pages/EMDR-Therapy';

const App = () => {
  return (
    <Router basename="/">
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/couples-therapy" element={<Couples />} />
        <Route path="/services/discernment-counseling/" element={<DiscernmentCounseling/>} />
        <Route path="/services/family-therapy" element={<Family />} />
        <Route path="/services/ifs-therapy" element={<IFSTherapy />} />
        <Route path="/services/individual-therapy" element={<Individuals />} />
        <Route path="/services/emdr-therapy" element={<EMDR />} />
        <Route path="/services/immigration-psychological-evaluation" element={<IPE />} />
        <Route path="/costs" element={<Costs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
