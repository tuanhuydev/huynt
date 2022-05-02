import AboutMe from "components/AboutMe";
import Navbar from "components/commons/Navbar";
import Footer from "components/Footer";
import Hero from "components/Hero";
import MyWork from "components/MyWork";

const HomeContainer = () => {
  return (
    <div className="bg-grey0 dark:bg-black min-h-screen transition-all">
      <Navbar />
      <Hero />
      <AboutMe />
      <MyWork />
      <Footer />
    </div>
  );
}

export default HomeContainer;