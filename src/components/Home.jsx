import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Contact from "./Contact";

// eslint-disable-next-line react/prop-types
const Home = ({ children }) => {
  return (
    <>
      <main>
        <Sidebar />
        <div className="main-content">
          <Navbar />
          {children}
        </div>
      </main>
      
    </>
  );
};

export default Home;
