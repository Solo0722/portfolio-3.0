import { Spotlight } from './ui/spotlight'

const Hero = ({children}) => {
  return (
    <div className="w-screen" >
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="-top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="-top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
        <Spotlight
          className="top-[50%] left-[80%] h-[50vh] w-[50vw]"
          fill="purple"
        />
      </div>

      <div className="h-screen w-full bg-background  flex items-center justify-center absolute top-0 left-0"></div>
      {children}
    </div>
  );
}

export default Hero