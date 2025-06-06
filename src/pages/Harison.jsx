import { useEffect, useRef, useState } from "react";
import "./harison.css";
import gsap from "gsap";
import harison from "../images/harison.avif";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useNavigate } from "react-router-dom";
import AnimatedText from "../components/AnimatedText";
import HarisonHeader from "../components/HarisonHeader";
import HarisonFooter from "../components/HarisonFooter";

gsap.registerPlugin(ScrollTrigger);
const Harison = () => {
  const navigate = useNavigate();
  const pageRef = useRef(null);



  useEffect(() => {
    gsap.fromTo(
      pageRef.current,
      {  opacity: 0 },
      {opacity: 1, duration:1,  }
    );
  }, []);

  //hero + photos scroll
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
 
 
 
//   const itemRef = useRef(null);
//   const borderRef = useRef(null);

 
// //footer
//   useEffect(() => {
//     const items = document.querySelectorAll(".service-item");

//     items.forEach((item) => {
//       const border = item.querySelector(".bottom-border");

//       item.addEventListener("mouseenter", () => {
//         gsap.to(border, {
//           scaleX: 1,
//           duration: 0.4,
//           ease: "power2.out",
//         });
//       });

//       item.addEventListener("mouseleave", () => {
//         gsap.to(border, {
//           scaleX: 0,
//           duration: 0.4,
//           ease: "power2.out",
//         });
//       });
//     });
//   }, []);

  // const handleMouseEnter = () => {
  //   const el = textRef.current;

  //   gsap.to(el, {
  //     y: -30,

  //     duration: 0.2,

  //     onComplete: () => {
  //       gsap.set(el, { y: 30 }); // move below
  //       gsap.to(el, {
  //   y:0,
  //         opacity: 1,
  //         duration: 0.2,
      
  //       });
  //     }
  //   });
  // };



 
  //   const handleScrollToTop = () => {
  //     window.scrollTo({
  //       top: 0,
      
  //     });
  //   };


  
  return (
    <div ref={pageRef} style={{background:"white", }}>
     
    <HarisonHeader />


    <div>
    

      <div className="harison-content">
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
            creating meaningful and purpose driven digital brand
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
   <HarisonFooter />
      </div>

      
    </div>
    </div>
  );
};

export default Harison;
