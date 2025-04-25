import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import "./harison.css";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useNavigate } from "react-router-dom";
import HarisonHeader from "../components/HarisonHeader";
import HarisonFooter from "../components/HarisonFooter";
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
  



  

  return (

    <div className="overflow-hidden" ref={containerRef}>
      
     <HarisonHeader />
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



<HarisonFooter />
        </div>
        
        </div>

       
     
    </div>

  );
};

export default Work;