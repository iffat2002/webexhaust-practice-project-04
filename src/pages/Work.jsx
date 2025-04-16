import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import "./harison.css";
import gsap from "gsap";
import harison from "../images/harison.avif";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";
import icon from "../images/insta.svg";
import AnimatedText from "../components/AnimatedText";
import { useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);
const Work = () => {
  const navigate = useNavigate();
  const textRef = useRef(null);
  const itemRef = useRef(null);
  const slideRef = useRef(null);
  const borderRef = useRef(null);
  const pageRef = useRef(null);

 
  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { y: "100vh", opacity: 1 },
      { y: 0, opacity: 1, duration: 1, ease:"power1.inOut" ,}
    );
  }, []);
  const handleMouseLeave = (card) => {
    const hoverImg = card.querySelector(".hover-img");
    const mainImg = card.querySelector(".main-img");
    const header = card.querySelector(".card-header");
    const grayish = card.querySelector(".grayish");
    const bottomBorders = card.querySelectorAll(".bottom-b");

    const tl = gsap.timeline();

    tl.to(hoverImg, {
      scaleY: 0,
      transformOrigin: "bottom",
      duration: 0.3,
      
      ease: "none",
    })
      .set(mainImg, {
        scaleX: 1,
        transformOrigin: "bottom",
      })
      .set(header, { color: "" })
      .set(grayish, { color: "" })
      .to(bottomBorders, {
        scaleX: 0,
        duration: 0.3,
        ease: "power2.out",
      });
  };

  const cardData = [
    {
      id: 1,
      img: "https://framerusercontent.com/images/btmUrvXAhz8HdFoLjsei0Nf1iBw.jpg",
      color: "#80726B",
    },
    {
      id: 2,
      img: "https://framerusercontent.com/images/jvNA2Qg0e4bS2Rksj8lC3nbshU.jpg",
      color: "#827E70",
    },
    {
      id: 3,
      img: "https://framerusercontent.com/images/UTbaB0jd4Z7qKqkv0wIW2H42edc.jpg",
      color: "#6C788C",
    },
    {
      id: 4,
      img: "https://framerusercontent.com/images/KhzI7QSkZs4bIJuMsEmgsSSE85s.jpg",
      color: "#B8AD98",
    },
    {
      id: 5,
      img: "https://framerusercontent.com/images/GHDsTH59R466EjnFvTMOEu3MytA.jpg",
      color: "#999999",
    },
  ];

  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".single-section");
    const slider = sliderRef.current;
    const totalScrollWidth = slider.scrollWidth - window.innerWidth;
    
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 100%",
          end: () => `+=${totalScrollWidth + window.innerWidth}`, // ← This is the key fix
          scrub: true,
          pin: true,
          markers: false,
        },
      });

      tl.to(slider, {
        x: () => `-${slider.scrollWidth + window.innerWidth}px`,
        ease: "none",
      });
      tl.to(".bg-orange", {
       overflow: "auto",
        ease: "none",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const images = [
    "https://framerusercontent.com/images/RhN6eKCyYKsaRBkdZJ4gRPGPnMQ.jpg",
    "https://framerusercontent.com/images/knCnku49lmqSF8JsOl1zcZ6teo8.jpg",
    "https://framerusercontent.com/images/2Hp32ENaZl6zdME60qYPzeheAxs.jpg?scale-down-to=2048",
    "https://framerusercontent.com/images/4dBB09GSWal2hvxHWyY3IcTnSdU.jpg?scale-down-to=2048",
    "https://framerusercontent.com/images/pVwx9oCMvdKeFytoych0FpQnvM.jpg",
  ];

  const upRefs = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      upRefs.current.forEach((upEl) => {
        if (!upEl) return;

        const upHeight = upEl.scrollHeight / 2;

        gsap.set(upEl, { y: 0 });

        gsap.to(upEl, {
          y: `-=${upHeight}`,
          duration: 90,
          ease: "none",
          repeat: -1,
          modifiers: {
            y: gsap.utils.unitize((y) => parseFloat(y) % upHeight),
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);





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


  
  const handleCardEnter = (card) => {
    const hoverImg = card.querySelector(".hover-img");
    const mainImg = card.querySelector(".main-img");
    const header = card.querySelector(".card-header");
    const grayish = card.querySelector(".grayish");
    const bottomBorders = card.querySelectorAll(".bottom-b");

  
    const tl = gsap.timeline();
  
    tl.to(hoverImg, {
      scaleY: 1,
      transformOrigin: "bottom",
      duration: 0.3,
      ease: "none",
    })

      .set(mainImg, {
        scaleX: 0,
        transformOrigin: "bottom",
      })
      .set(header, { color: "black" })
      .set(grayish, { color: "black" })
     
      .to(bottomBorders, {
        scaleX: 1,
        duration: 0.4,
        ease: "power2.out",
      });
  };
  const handleCardLeave = (card) => {
    const hoverImg = card.querySelector(".hover-img");
    const mainImg = card.querySelector(".main-img");
    const header = card.querySelector(".card-header");
    const grayish = card.querySelector(".grayish");
    const bottomBorders = card.querySelectorAll(".bottom-b");
  
    const tl = gsap.timeline();
  
    tl.to(hoverImg, {
      scaleY: 0,
      transformOrigin: "bottom",
      duration: 0.3,
      ease: "none",
    })
      .set(mainImg, {
        scaleX: 1,
        transformOrigin: "bottom",
      })
      .set(header, { color: "" })
      .set(grayish, { color: "" })
      .to(bottomBorders, {
        scaleX: 0,
        duration: 0.3,
        ease: "power2.out",
      });
  };
  
  const handleKeyDown = (e) => {
    const el = footerRef.current;
    const { scrollTop, scrollHeight, clientHeight } = el;

    const atTop = scrollTop === 0;
    const atBottom = scrollTop + clientHeight >= scrollHeight;

    let delta = 0;

    switch (e.key) {
      case 'ArrowDown':
        delta = 40;
        break;
      case 'ArrowUp':
        delta = -40;
        break;
      case 'PageDown':
        delta = clientHeight;
        break;
      case 'PageUp':
        delta = -clientHeight;
        break;
      default:
        return; // let other keys pass
    }

    if ((delta < 0 && !atTop) || (delta > 0 && !atBottom)) {
      e.preventDefault();
      e.stopPropagation();
      el.scrollTop += delta;
    }
  };

  useEffect(() => {
    const el = footerRef.current;
    if (el) {
      el.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (el) {
        el.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, []);


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
  return (

    <div className="overflow-hidden" ref={containerRef}>
      
      <header className="harison-header"  ref={headerRef}>
        <div className="boxx">
          <div
            className="
    header"
          >
            <div className="left">
              <img
              ref={logoRef}
                onClick={() => navigate("/harison")}
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
                  onClick={() =>
                    text === "Work" ? navigate("/harison/work") : null
                  }
                >
                  {text}
                </p>
              )
            )}
          </div>

          </div>
        </div>
      </header>
      <div className="scroll-main">
        <div className="work-slider-content" ref={sliderRef}>
          {cardData.map((card, index) => (
            <div
              key={index}
              className="slide-card"
              onMouseEnter={(e) => {
                handleCardEnter(e.currentTarget);
              }}
              onMouseLeave={(e) => handleCardLeave(e.currentTarget)}
            >
              <div className="img-container" style={{ background: card.color }}>
                <img
                  className="main-img"
                  src={card.img}
                  width={560}
                  height={392}
                />
                <img
                  className="hover-img"
                  src={card.img}
                  width={280}
                  height={350}
                />
              </div>
              <div>
                <div className="card-header">
                  <span className="type">FURNITURE</span>
                  <span className="type">2023</span>
                </div>
                <div className="underline">
                  <h4>WALDENBURG TOUSLEY</h4>
                  <div ref={borderRef} className="bottom-b"></div>
                </div>
                <div className="underline">
                  <h4 className="grayish">HERITAGE AND INNOVATION</h4>
                  <div ref={borderRef} className="bottom-b"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div   ref={footerRef}  tabIndex={0} className="single-section bg-orange">
          <div className="center-text">
            <h1>EXPLORE ARCHIVE <span className="big-dot"></span></h1>
            
          </div>
          <div className="img-bg">
            <div
              ref={(el) => el && upRefs.current.push(el)}
              style={{ display: "flex", flexDirection: "column" }}
            >
              {/* Reel 1 */}
              <div className="reel-up reel">
                {images.map((src, i) => (
                  <img key={i} src={src} width={400} height={400} alt="reel" />
                ))}
              </div>

              {/* Reel 1 duplicate */}
              <div className="reel-up reel">
                {images.map((src, i) => (
                  <img
                    key={`dup-${i}`}
                    src={src}
                    width={400}
                    height={400}
                    alt="reel"
                  />
                ))}
              </div>
            </div>

            {/* Reel 2 */}
            <div className="marquee-container">
              <div className="marquee-track">
                {images.concat(images).map((src, i) => (
                  <img key={i} src={src} width={400} height={400} alt="reel" />
                ))}
              </div>
            </div>

            <div
              ref={(el) => el && upRefs.current.push(el)}
              style={{ display: "flex", flexDirection: "column" }}
            >
              {/* Reel 1 */}
              <div className="reel-up reel">
                {images.map((src, i) => (
                  <img key={i} src={src} width={400} height={400} alt="reel" />
                ))}
              </div>

              {/* Reel 1 duplicate */}
              <div className="reel-up reel">
                {images.map((src, i) => (
                  <img
                    key={`dup-${i}`}
                    src={src}
                    width={400}
                    height={400}
                    alt="reel"
                  />
                ))}
              </div>
            </div>

            {/* Reel 2 */}
            <div className="marquee-container">
              <div className="marquee-track">
                {images.concat(images).map((src, i) => (
                  <img key={i} src={src} width={400} height={400} alt="reel" />
                ))}
              </div>
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

       
     
    </div>

  );
};

export default Work;
