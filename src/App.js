import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Couples from './components/pages/Couples-Therapy';
import DiscernmentCounseling from './components/pages/Discernment-Counseling';
import Family from './components/pages/Family-Therapy';
import IFSTherapy from './components/pages/IFS-Therapy';
import Individuals from './components/pages/Individual-Therapy';
import EMDR from './components/pages/EMDR-Therapy';
import IPE from './components/pages/Immigration-Psychological-Evaluation';
import Costs from './components/pages/Costs';
import Contact from './components/pages/Contact';
import PrivacyPolicy from './components/pages/Privacy-Policy';

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
