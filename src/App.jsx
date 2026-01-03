import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';
import Activities from './components/Activities';
import Contact from './components/Contact';
import { Twitter, ArrowRight } from 'lucide-react';

function App() {
  // Tech stack icons
  const icons = [
    "devicon-react-original",
    "devicon-nodejs-plain",
    "devicon-javascript-plain",
    "devicon-nextjs-plain",
    "devicon-typescript-plain",
    "devicon-html5-plain",
    "devicon-css3-plain",
    "devicon-mongodb-plain",
    "devicon-docker-plain",
  ];

  const displayIcons = [...icons, ...icons, ...icons];

  return (
    <>
      <div className="vignette-overlay"></div>
      <Header />

      <main>
        {/* Layer 0: Background */}
        <div className="hero-bg-layer">
          <div className="red-circle"></div>
        </div>

        {/* Layer 1: Big Text */}
        <div className="big-text-bg">
          PRAGATI
        </div>

        {/* Layer 2: Central Figure */}
        <div className="hero-figure">
          {/* Using the profile image. If it has a background, this might look blocky, 
             but we will assume the style handles it or user will provide a cutout.
             Applying blend mode or mask in CSS might help if not cutout. */}
          <img src="/pragati_profile.png" alt="Pragati Rana" className="main-profile-img" />
        </div>

        {/* Layer 3: UI Overlay (Pills, Names) */}
        <div className="ui-layer">
          <div className="pills-container">
            <div className="pill-btn">FULL STACK</div>
            <div className="pill-btn">REACT</div>
            <div className="pill-btn">NODE.JS</div>
          </div>

          <div className="side-names-left">
            <span className="side-name highlight">CREATIVE</span>
            <span className="side-name">DEVELOPER</span>
          </div>

          <div className="side-names-right">
            <span className="side-name highlight">UI/UX</span>
            <span className="side-name">DESIGNER</span>
          </div>

          {/* Mobile Only Content to fill space */}
          <div className="mobile-hero-content">
            <p>CRAFTING IMMERSIVE DIGITAL EXPERIENCES WITH MODERN WEB TECHNOLOGIES.</p>
          </div>
        </div>

        {/* Layer 4: Marquee Web Belt */}
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {displayIcons.map((icon, i) => (
              <i key={i} className={icon}></i>
            ))}
          </div>
        </div>

      </main>

      <About />
      <Skills />
      <Activities />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
