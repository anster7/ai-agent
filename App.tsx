import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import ProcessSection from './components/ProcessSection';
import ProductSection from './components/ProductSection';
import PricingSection from './components/PricingSection';
import ComparisonSection from './components/ComparisonSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <ProblemSection />
      <ProcessSection />
      <ProductSection />
      <ComparisonSection />
      <PricingSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;