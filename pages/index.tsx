import type { NextPage } from 'next'
import AboutMe from "components/AboutMe";
import Navbar from "components/commons/Navbar";
import Footer from "components/Footer";
import Hero from "components/Hero";
import MyWork from "components/MyWork";
import React, { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(loadingTimeout);
  }, []);
  return (
    <React.Fragment>
      {
        loading ? (<h1>Loading</h1>) : (
          <div className="bg-grey0 dark:bg-black min-h-screen transition-all">
            <Navbar />
            <Hero />
            <AboutMe />
            <MyWork />
            <Footer />
          </div>
        )
      }
    </React.Fragment>
  );
}
 
export default Home;
