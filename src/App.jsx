import Landing from './containers/Landing';
import About from './containers/About';
import Navbar from "./components/Navbar";
import { ParallaxProvider } from 'react-scroll-parallax';
import { AvatarShapes } from "./assets";

const FullPageScroll = () => {
    
  return (
    <ParallaxProvider>
      <main className="relative">
        <Navbar />
        <Landing />
        <About />
        <img
          src={AvatarShapes}
          alt="mark"
          className="absolute top-10 -right-40 -z-10"
        />
      </main>
    </ParallaxProvider>
  );
};

export default FullPageScroll;