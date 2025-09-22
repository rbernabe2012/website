import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Industry from './pages/Industry';
import Zabbix from './pages/products/Zabbix';
import Otobo from './pages/products/Otobo';
import GLPI from './pages/products/GLPI';
import AIBots from './pages/products/AIBots';
import CRMTwenty from './pages/products/CRMTwenty';
import Zammad from './pages/products/Zammad';
import ContactCenter from './pages/products/ContactCenter';
import VoiceBots from './pages/products/VoiceBots';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-25 via-primary-50 to-gray-50">
        <Header />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/industria" element={<Industry />} />
            <Route path="/productos/zabbix" element={<Zabbix />} />
            <Route path="/productos/otobo" element={<Otobo />} />
            <Route path="/productos/glpi" element={<GLPI />} />
            <Route path="/productos/ai-bots" element={<AIBots />} />
            <Route path="/productos/crm-twenty" element={<CRMTwenty />} />
            <Route path="/productos/zammad" element={<Zammad />} />
            <Route path="/productos/contact-center" element={<ContactCenter />} />
            <Route path="/productos/voice-bots" element={<VoiceBots />} />
          </Routes>
        </motion.main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
