import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Level from './Level';
import Contact from '../components/Contact';

const LandingPage = () => {
  return (
    <section>
      <Home />
      <About />
      <Level />
      <Contact />
    </section>
  );
};
export default LandingPage;
