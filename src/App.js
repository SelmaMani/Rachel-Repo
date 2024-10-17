import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import PopularRecipes from './components/PopularRecipes';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <HowItWorks />
      <PopularRecipes />
      <Footer />
    </div>
  );
}

export default App;
