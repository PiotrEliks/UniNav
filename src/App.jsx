import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
// import { withNamespaces } from 'react-i18next';
import './App.css';
import Homepage from './pages/Homepage.jsx';
import Map from './pages/Map.jsx';
import { useTranslation } from 'react-i18next';
import PageNav from './components/PageNav.jsx';

function App () {
  const { t } = useTranslation();
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
