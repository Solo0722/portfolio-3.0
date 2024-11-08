import { Suspense,lazy } from 'react';
import Navbar from "./components/Navbar";
import { ParallaxProvider } from 'react-scroll-parallax';
import { AvatarShapes } from "./assets";
import Footer from './components/Footer';
import LoaderSpinner from './components/Loader';

const Landing =  lazy(() => import('./containers/Landing'));
const About =  lazy(() => import('./containers/About'));
const Experience =  lazy(() => import('./containers/Experience'));
const Contact =  lazy(() => import('./containers/Contact'));
const Projects =  lazy(() => import('./containers/Projects'));
const Testimonials =  lazy(() => import('./containers/Testimonials'));

const App = () => {
    
  return (
    <Suspense fallback={<LoaderSpinner />}>
      <ParallaxProvider>
        <main className="relative">
          <Navbar />
          <Landing />
          <About />
          <Experience />
          <Projects />
          <Testimonials />
          <Contact />
          <Footer />
          <img
            src={AvatarShapes}
            alt="mark"
            className="absolute top-10 -right-40 -z-10"
            loading='lazy'
          />
        </main>
      </ParallaxProvider>
    </Suspense>
  );
};

export default App;
