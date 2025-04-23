import { useEffect, useRef, useState } from "react";
import "./harison.css";
import gsap from "gsap";
import harison from "../images/harison.avif";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import icon from "../images/insta.svg";
import { useNavigate } from "react-router-dom";
import AnimatedText from "../components/AnimatedText";

gsap.registerPlugin(ScrollTrigger);
const Harison = () => {
  const navigate = useNavigate();
  const pageRef = useRef(null);

  const handleNavigate = () => {
    gsap.fromTo(
      pageRef.current,
      {
        opacity: 1,
      },
      {
        opacity: 0.4,
        duration: 0.4,
        
        onComplete: () => {
          navigate("/harison/work"); 
        },
      }
    );
  };
  

  useEffect(() => {
    gsap.fromTo(
      pageRef.current,
      {  opacity: 0 },
      {opacity: 1, duration:1,  }
    );
  }, []);
  const textRef = useRef(null);
  const moveUp = useRef(null);
  useEffect(() => {
    const bottoms = [".logo-bottom1", ".logo-bottom2", ".logo-bottom3"];

    bottoms.forEach((cls, index) => {
      gsap.fromTo(
        cls,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 2,
          transformOrigin: "center center", // or "bottom center" for a rising stretch
          ease: "none",
          scrollTrigger: {
            trigger: ".logo-wrapper",
            start: `top+=${index} top`, // staggered start
            end: `top+=${index * 70 + 100} top`, // longer scroll window for smoother reveal
            scrub: true,
          },
        }
      );
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".video1",
          start: "top bottom",
          end: "top top",
          scrub: true,
          markers: false,
        },
      })
      .fromTo(
        ".video1",
        { scaleX: 0.8 },
        { scaleX: 1, transformOrigin: "center center" }
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".banner-full",
          start: "top bottom",
          end: "top top",
          scrub: true,
          markers: false,
        },
      })
      .fromTo(
        ".banner-full",
        { scaleX: 0.5 },
        { scaleX: 1, transformOrigin: "center center" }
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".video3",
          start: "top bottom",
          end: "top top",
          scrub: true,
          markers: false,
        },
      })
      .fromTo(
        ".video3",
        { scaleX: 0.5 },
        { scaleX: 1, transformOrigin: "center center" }
      );
  }, []);
 
 
 
  const itemRef = useRef(null);
  const borderRef = useRef(null);

 

  useEffect(() => {
    const items = document.querySelectorAll(".service-item");

    items.forEach((item) => {
      const border = item.querySelector(".bottom-border");

      item.addEventListener("mouseenter", () => {
        gsap.to(border, {
          scaleX: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(border, {
          scaleX: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      });
    });
  }, []);

  const handleMouseEnter = () => {
    const el = textRef.current;

    gsap.to(el, {
      y: -30,

      duration: 0.2,

      onComplete: () => {
        gsap.set(el, { y: 30 }); // move below
        gsap.to(el, {
    y:0,
          opacity: 1,
          duration: 0.2,
      
        });
      }
    });
  };



  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const headerRef = useRef(null);

  // Clear on each render to avoid duplicates (especially in dev mode)
  linksRef.current = [];

  useEffect(() => {
    const tl = gsap.timeline({});
  
    // Logo animation: from opacity 0 and y: 50 → to opacity 1 and y: 0
    tl.fromTo(
      logoRef.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 2 }
    );
  
    // Links animation: from opacity 0 and y: 30 → to opacity 1 and y: 0
    tl.fromTo(
      linksRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
      },
      "-=2" // Overlap a bit with logo animation
    );
  }, []);


    const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
      
      });
    };


    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
  
  return (
    <div ref={pageRef} style={{background:"white"}}>
     
     <header className="harison-header"  ref={headerRef}>
        <div className="boxx">
          <div
            className="
    header"
          >
            <div className="left">
              <img
              ref={logoRef}
              onClick={handleNavigate}
                src="https://framerusercontent.com/images/E4ICFTxGKZdn6E6cf8MfRB6M5Ak.png?scale-down-to=512"
                alt="logo"
                width={100}
                height={16}
              />
            </div>
           
           
          <div className="right">
            {["Work", "Archive", "Studio", "Press", "Contact", "Buy Template"].map(
              (text, index) => (
                <p
                  key={index}
                  ref={(el) => (linksRef.current[index] = el)}
                  className="header-anchor"
                  onClick={handleNavigate}
                >
                  {text}
                </p>
              )
            )}
           <p className="menu-tag" onClick={toggleMenu}> {menuOpen ? 'Close' : 'Menu'}</p>
          </div>

          </div>
        </div>
      </header>


      {menuOpen && (
        <div className="overlay-menu">
          <div className="left-links">
            <p>Work</p>
            <p>Archive</p>
            <p>Studio</p>
            <p>Press</p>
            <p>Contact</p>
            <p>Purchase</p>
          </div>
          <div className="right-links">
            <p><strong>Instagram</strong></p>
            <p>Twitter</p>
            <p>LinkedIn</p>
            <p>Dribbble</p>
          </div>
        </div>
      )}


    <div>
    

      <div>
        <div className="boxx">
          <div className="logo-wrapper">
            <img
              src={harison}
              className="harison logo-top"
              sizes="max(100vw - 40px, 1px)"
              width={1452}
              height={236}
            />
           
            <img
              src={harison}
              className="harison logo-bottom1"
              width={1452}
              height={236}
            />
            <img
              src={harison}
              className="harison logo-bottom2"
              width={1452}
              height={236}
            />
            <img
              src={harison}
              className="harison logo-bottom3"
              width={1452}
              height={236}
            />
           
          </div>
          <p className="hero-text">
            Independent designer based in Germany, working globally, and
            creating<br></br> meaningful and purpose driven digital brand
            experiences.
          </p>
        </div>
      </div>
      <div
        className="
video-container"
      >
        <div className="slide-1">
          <video className="video1" autoPlay loop muted playsInline>
            <source
              src="https://source.fouroom.co/video/pexels-videos-06.mp4"
              type="video/mp4"
            />
          </video>
          <img
            className="center-banner"
            src="https://framerusercontent.com/images/4xAOhFIZ4llQfMiXVZotSt71hBs.jpg"
            alt="banner"
            width={596}
            height={395}
          />
        </div>
        <div className="slide-2">
          <img
            className="banner-full"
            src="https://framerusercontent.com/images/jvNA2Qg0e4bS2Rksj8lC3nbshU.jpg"
            alt="banner"
            width={400}
            height={400}
          />
          <video
            width={629}
            height={354}
            className="video2"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://source.fouroom.co/video/evanston-02.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="slide-3">
          <video className="video3" autoPlay loop muted playsInline>
            <source src="https://source.fouroom.co/video/watches-02.mp4" />
          </video>
          <img
            width={629}
            height={354}
            className="banner-3"
            src="https://framerusercontent.com/images/Rx7jEden3crkGVCmRkBGrDLw.jpg"
          />
        </div>
      </div>

      <footer>
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-left">
              <p className="footer-text">
                Creative strength
                <br></br>
                through diversity
              </p>
              <div className="video-grid">
                <video
                  className="footer-video"
                  width={274}
                  height={154}
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source
                    src="https://source.fouroom.co/video/watches-02.mp4"
                    width={274}
                    height={154}
                    type="video/mp4"
                  />
                </video>
                <p>Reel 2024</p>
                <span>1:12</span>
              </div>
              <img
                src={harison}
                className="footer-logo"
                width={641}
                height={104}
                alt="logo"
              />
            </div>
            <div className="footer-right">
              <div className="right-top">
                <p>Services</p>
                <div className="services-content">
                  <div className="service-item" ref={itemRef}>
                  <AnimatedText text="Strategy" />  
                    <div className="dot"></div>
                    <div  ref={borderRef} className="bottom-border"></div>
                  </div>

                  <div className="service-item ref={itemRef}">
                  <AnimatedText text="BRANDING" />  
                    <div className="dot"></div>
                    <div  ref={borderRef} className="bottom-border"></div>
                  </div>
                  <div className="service-item" ref={itemRef}>
                  <AnimatedText text="TECHNOLOGY" />  
                    <div className="dot"></div>
                    <div  ref={borderRef} className="bottom-border"></div>
                  </div>
                  <div className="service-item" ref={itemRef}>
                  <AnimatedText text="DIGITAL" />
                    <div className="dot"></div>
                    <div  ref={borderRef} className="bottom-border"></div>
                  </div>
                </div>
              </div>

              <div className="right-top">
                <p>FOLLOW</p>
                <div className="icons">
                  <img src={icon} width={24} height={24} alt="icon" />
                  <img src={icon} width={24} height={24} alt="icon" />
                  <img src={icon} width={24} height={24} alt="icon" />
                  <img src={icon} width={24} height={24} alt="icon" />
                  <img src={icon} width={24} height={24} alt="icon" />
                </div>
              </div>

              <div className="right-bottom">
                <span onClick={handleScrollToTop}>Back to top</span>
                <button className="purchase" onMouseEnter={handleMouseEnter}>     <span ref={textRef}>Purchase</span></button>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-left">
              <button className="footer-btn">fourroom.co</button>
              <AnimatedText text="TERMS  OF  USE" /> 
              <p className="footer-links">•</p>
          <AnimatedText text="IMPRINTS" />  
    
             </div>
            <div className="footer-bottom-left">
            <AnimatedText text="MADE IN FRAMER" />  
              <p className="footer-links">•</p>
              <AnimatedText text="TYPE SET IN INTER" />  

              <p className="footer-links">•</p>
              <AnimatedText text="BERLIN, 2024" />  
            </div>
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
};

export default Harison;
