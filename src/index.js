import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cards from './components/Cards';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Cards />
  </React.StrictMode>
);
