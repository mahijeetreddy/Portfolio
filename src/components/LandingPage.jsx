import { Link } from "react-router-dom";
import LottieAnimation from './LottieAnimation';
import './LandingPage.css';

const LandingPage = () => (
  <div className="relative flex h-screen text-white overflow-hidden">
    <div className="absolute inset-0 lottie-container animate-focus-in">
      <LottieAnimation />
    </div>
    <div className="text-container-l">
      <h1 className="text-9xl text-white mb-80 ml-24 text-bold text-red-700 animate-focus-in google-font "> 
        <div className="vertical-text mt-80 google-font ">
        <span className="google-font sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl ">H</span>
        <span className="google-font sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl ">E</span>
        <span className="google-font sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl ">L</span>
        <span className="google-font sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl ">L</span>
        <span className="google-font sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl ">O</span>

          </div>

      </h1>
    </div>
    
    <div className="text-container-r">
      <p className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl google-font animate-focus-in mb-8 "> 
        Ready to
      </p>
      <code className="sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl mt-4 mb-4 google-font animate-focus-in google-font">
        &lt;INSPECT&gt;
      </code>
      <p className="sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl mt-8 mb-8 google-font animate-focus-in">
        the Elements of
      </p>
      <h1 className="sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl text-white mb-8 mt-8 animate-focus-in google-font"> 
         MY WORK ?
        </h1>
      <Link to="/portfolio">
      <button className="relative px-12 py-6 mt-4 bg-gradient-to-t from-red-900 to-red-400 
  text-white 
  sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl
   rounded-lg shadow-lg 
  transition-transform transform hover:scale-110 hover:shadow-2xl
  focus:outline-none focus:ring-4 focus:ring-blue-300 
  active:ring-4 active:ring-blue-500 
  border-2 border-transparent bg-opacity-10
  overflow-hidden group google-font">
  PORTFOLIO
  <span className="absolute inset-0 bg-gradient-to-t from-red-800 to-transparent opacity-30 group-hover:opacity-50 transform scale-125 group-hover:scale-150 transition-transform duration-300"></span>
</button>

      </Link>
    </div>
  </div>
);

export default LandingPage;
