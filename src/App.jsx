import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BirdDetail from './pages/BirdDetail';
import Logbook from './pages/Logbook';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ave/:id" element={<BirdDetail />} />
        <Route path="/bitacora" element={<Logbook />} />
      </Routes>
    </Router>
  );
}

export default App;
