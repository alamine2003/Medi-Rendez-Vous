import React from 'react';
import Header from '../Components/Header';
import HeroSection from '../Components/HeroSection';
import FeatureSection from '../Components/FeatureSection';
import CallToAction from '../Components/CallToAction';
import Footer from '../Components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow"> {/* 'flex-grow' permet au contenu principal de prendre l'espace disponible */}
        <HeroSection />
        <FeatureSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;