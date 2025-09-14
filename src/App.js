import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PlanetCanvas from "./components/PlanetCanvas";
import ScrollHint from "./components/ScrollHint";
import Projects from "./components/Project";
import About from "./components/About";
import Services from "./components/Services";
import RecentWorks from "./components/Recentworks";
import Values from "./components/Values";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App" style={{ position: "relative", height: "100vh", width: "100vw" }}>
      <PlanetCanvas />
      <Navbar />
      <Hero />
      <ScrollHint />
      <Projects />
      <About />
      <RecentWorks />
      <Services />
      <Values />
      <Journey />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
