import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Container from './components/Container';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Container />
  </React.StrictMode>
);
