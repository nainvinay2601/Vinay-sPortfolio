import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Featured from "./components/Featured";
import ReadyForProject from "./components/ReadyForProject";
import Footer from "./components/Footer";
import BirthVenue from "./components/BirthVenue"; // Import your component
import LocomotiveScroll from "locomotive-scroll";
import Spotify from "./components/Spotify";
import Ochi from "./components/Ochi";
import ScrollToTop from "./ScrollToTop";
import Swoleyfit from "./components/Swoleyfit";


function App() {
  const locomotiveScroll = new LocomotiveScroll();

  
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Marquee />
              <About />
              <Featured />
              <ReadyForProject />
              <Footer />
            </>
          }
        />
        <Route path="/birthvenue" element={<BirthVenue />} />
        <Route path="/spotify" element={<Spotify />} />
        <Route path="/ochi" element={<Ochi />} />
        <Route path="/swoleygymapp" element={<Swoleyfit />} />
      </Routes>
    </Router>
  );
}

export default App;
