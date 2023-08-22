
// eslint-disable-next-line no-unused-vars
import React from "react";

import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import {  Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}

          <Route path="/sidebar" element={<Sidebar />} />

          <Route path="/navbar" element={<Navbar />} />

          <Route path="/" element={<About />} />

          <Route path="/resume" element={<Resume />} />

          <Route path="/portfolio" element={<Portfolio />} />

          <Route path="/blog" element={<Blog />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
    </>
  );
}

export default App;
