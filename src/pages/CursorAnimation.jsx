import React,{useState, useEffect} from "react";
import "./CursorAnimation.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const CursorAnimation = () => {
  useEffect(() => {
    const container = document.querySelector(".hero");
    if (!container) return;
  
    gsap.utils.toArray(".cursor-image").forEach((img, index) => {
      gsap.to(img, {
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom bottom", 
          scrub: true,
        },
        x: 0,                // translateX
        y: 0,                // translateY
        z: 0,                // translateZ (use with `transformPerspective` or 3D context)
        willChange: "width, height, transform",
        width: "400vw",
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,           
        rotateX: 0,
        rotateY: 0,
        rotateZ: 359,    
        skewX: 0,
        skewY: 0,
        transformStyle: "preserve-3d !important", // for 3D context
       ease: "none", 
      });
    });

  
 
    
    
  }, []);
  useEffect(() => {
    gsap.utils.toArray(".table-row").forEach((row, index) => {
      gsap.fromTo(
        row.querySelector(".table-right"), 
        {
          x: 0, 
        },
        {
          x: 210, 
          scrollTrigger: {
            trigger: row,
            start: "top 90%", 
            end: "top -10%",   
            scrub: false,     
            once: false,     
            markers: true,   
            toggleActions: "play none none reverse", 
            onEnterBack: () => {

              gsap.to(row.querySelector(".table-right"), {
                x: 210, 
                duration: 1, 
                ease: "power1.inOut"
              });
            },
            onLeave: () => {

              gsap.to(row.querySelector(".table-right"), {
                x: 0, 
                duration: 1, 
                ease: "power1.inOut"
              });
            },
          },
          delay: index * 0.2, 
          ease: "power1.inOut", 
        }
      );
    });

    gsap.fromTo(
      ".simple-text",
      {
        x: 0, 
      },
      {
        x: 500, 
        scrollTrigger: {
          trigger: ".simple-text",
          start: "top bottom",
          end: "bottom top", 
          scrub: true, 
          markers: true, 
        },
      }
    );
    
    // Horizontal movement on scroll
    gsap.fromTo(
      ".simple-text",
      {
        x: 0, 
        paddingRight: "1000px",
      },
      {
        x: -10, // Move the text to the left by 500px when scrolled horizontally
        paddingRight: "100px",
        scrollTrigger: {
          trigger: ".simple-text",
          start: "top top", // Trigger when the top of the element is at the top of the viewport
          end: "bottom bottom", // Ends when the bottom of the element reaches the bottom of the viewport
          scrub: true, // Smooth animation
          markers: true, 
          duration: 10, 
        },
      }
    );
 
  }, [])
  

  return (
    <div>
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-heading">
              Digital <br></br> Direction
            </h1>
            <div className="cursor-row">
                <div className="cursor-image _01"></div>
                <div className="cursor-image _02"></div>
                <div className="cursor-image _03"></div>
                <div className="cursor-image _04"></div>
                <div className="cursor-image _05"></div>
            
            </div>
            <div className="cursor-row">
          
                <div className="cursor-image _06"></div>
                <div className="cursor-image _07"></div>
                <div className="cursor-image _08"></div>
                <div className="cursor-image _09"></div>
                <div className="cursor-image _10"></div>
            </div>
            <div className="cursor-row">
          
          <div className="cursor-image _11"></div>
          <div className="cursor-image _12"></div>
          <div className="cursor-image _13"></div>
          <div className="cursor-image _14"></div>
          <div className="cursor-image _15"></div>
      </div>
            <div className="cursor-row"></div>
          </div>
        </div>


        <div className="intro-text">
     I’m a freelance digital director. I turn ideas into digital solutions and oversee the entire process, from initial concept to final execution. I make sure that every step is efficient and sustainable and leads to lasting results.
     </div>
   
      </section>
      <div className="text-table">
      <div className="table-row">
        <div className="count">1</div>
        <div className="table-right">Research, brainstorming & conception</div>
      </div>
      <div className="table-row">
        <div className="count">2</div>
        <div className="table-right">Research, brainstorming & conception</div>
      </div>
      <div className="table-row">
        <div className="count">3</div>
        <div className="table-right">Research, brainstorming & conception</div>
      </div>
      <div className="table-row">
        <div className="count">4</div>
        <div className="table-right">Research, brainstorming & conception</div>
      </div>
     </div>
     <div className="x-text">
     <div className="simple-text">
     <span>Deutsche Bahn</span> <div className="tag">clients</div>  <span>Deutsche Bahn</span> <div className="tag">clients</div>  <span>Deutsche Bahn</span> <div className="tag">clients</div>
     <span>Deutsche Bahn</span> <div className="tag">clients</div> <span>Deutsche Bahn</span> <div className="tag">clients</div> <span>Deutsche Bahn</span> <div className="tag">clients</div>
     <span>Deutsche Bahn</span> <div className="tag">clients</div>  <span>Deutsche Bahn</span> <div className="tag">clients</div>  <span>Deutsche Bahn</span> <div className="tag">clients</div>
     <span>Deutsche Bahn</span> <div className="tag">clients</div> <span>Deutsche Bahn</span> <div className="tag">clients</div> <span>Deutsche Bahn</span> <div className="tag">clients</div>
     </div>
     </div>
     <div className="blank"></div>
    </div>
  );
};

export default CursorAnimation;
