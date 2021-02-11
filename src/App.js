// React imports
import React from 'react';
// Custom Component imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';
//Style imports
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
