
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import Home from './pages/Home';
import MetaAds from './pages/MetaAds';
import GoogleAds from './pages/GoogleAds';
import Contact from './pages/Contact';

const App = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-100 bg-background selection:bg-blue-500/30">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meta-ads" element={<MetaAds />} />
          <Route path="/google-ads" element={<GoogleAds />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;