import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
/* import Services from './components/services/Services'; */
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Achievements from './components/achievements/Achievements';
import Work from './components/work/Work';

function App() {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Work />
       {/* <Services /> */}
        <Portfolio />
        <Achievements/>
        <Contact/>
        <Footer/>
    
    </>
  );
}

export default App;
