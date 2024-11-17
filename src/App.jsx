import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage.jsx';
import Map from './pages/Map.jsx';
import { useTranslation } from 'react-i18next';
import AcademicCircles from './pages/AcademicCircles.jsx';
import MobileApp from './pages/MobileApp.jsx';
import Info from './pages/Info.jsx';
import Usos from './pages/Usos.jsx';
import Intranet from './pages/Intranet.jsx';
import PageNotFound from './pages/PageNotFound.jsx';

function App () {
  const { t } = useTranslation();
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/map" element={<Map />} />
        <Route path="/academic-circles" element={<AcademicCircles />} />
        <Route path="/MobileApp" element={<MobileApp />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/Usos" element={<Usos />} />
        <Route path="/Intranet" element={<Intranet />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
