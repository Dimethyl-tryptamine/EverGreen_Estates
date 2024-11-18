import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ShopPage from './components/ShopPage';
import ProfilePage from './components/ProfilePage';
import SavedPage from './components/SavedPage';
import './index.css';  // Importing the global styles



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/saved" element={<SavedPage />} />
      </Routes>
    </Router>
  );
}

export default App;


