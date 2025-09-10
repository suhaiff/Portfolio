import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PlanetCanvas from "./components/PlanetCanvas";
import ScrollHint from "./components/ScrollHint";
import Projects from "./components/Project";
import About from "./components/About";
import Services from "./components/Services";
import RecentWorks from "./components/Recentworks";

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
      
    </div>
  );
}

export default App;
