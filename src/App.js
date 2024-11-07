import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Замінили Switch на Routes
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import CatalogPage from './components/CatalogPage';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes> {/* Використовуємо Routes замість Switch */}
                    <Route path="/" element={<MainContent />} />
                    <Route path="/catalog" element={<CatalogPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
