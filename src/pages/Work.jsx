import React, { useEffect, useRef, useState } from "react";
import "./harison.css";
import gsap from "gsap";
import harison from "../images/harison.avif";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import icon from "../images/insta.svg";

import { useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);
const Work = () => {
  const navigate = useNavigate();

  const slideRef = useRef(null);
  const borderRef = useRef(null);

  useEffect(() => {
    let sections = gsap.utils.toArray(".single-section");
  
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".scroll-main",
        pin: true,
        scrub: true,
        end: () => "+=" + document.querySelector(".scroll-main").offsetWidth,
      },
    });
  
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
 
  const handleMouseEnter = (card) => {
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
  

const cardData= [
    {
        id:1,
        img:"https://framerusercontent.com/images/btmUrvXAhz8HdFoLjsei0Nf1iBw.jpg",
        color:"#80726B",
    },
    {
        id:2,
        img:"https://framerusercontent.com/images/jvNA2Qg0e4bS2Rksj8lC3nbshU.jpg",
        color:"#827E70",
    },
    {
        id:3,
        img:"https://framerusercontent.com/images/UTbaB0jd4Z7qKqkv0wIW2H42edc.jpg",
        color:"#6C788C",
    },
    {
        id:4,
        img:"https://framerusercontent.com/images/KhzI7QSkZs4bIJuMsEmgsSSE85s.jpg",
        color:"#B8AD98",
    },
    {
        id:5,
        img:"https://framerusercontent.com/images/GHDsTH59R466EjnFvTMOEu3MytA.jpg",
        color:"#999999",
    },
]

  return (
    <div className="overflow-hidden">    
      <header>
        <div className="boxx">
          <div
            className="
    header"
          >
            <div className="left">
              <img
                onClick={() => navigate("/harison")}
                src="https://framerusercontent.com/images/E4ICFTxGKZdn6E6cf8MfRB6M5Ak.png?scale-down-to=512"
                alt="logo"
                width={100}
                height={16}
              />
            </div>
            <div className="right">
              <div
                className="work-box"
                onClick={() => navigate("/harison/work")}
              >
                <p className="header-anchor">Work</p>
              </div>
              <p className="header-anchor">Archive</p>
              <p className="header-anchor">Studio</p>
              <p className="header-anchor">Press</p>
              <p className="header-anchor">Contact</p>
              <p className="header-anchor">Buy Template</p>
            </div>
          </div>
        </div>
      </header>
      <div className="scroll-main">
      <div className="single-section work-container">
        <div className="boxx">
            <div className="horizontal-section">
          <div  className="work-slider-content">
     
            {cardData.map((card, index) => (
                   <div
                   key={index}
                   className="slide-card"
                   ref={slideRef}
                   
                     onMouseEnter={(e) => {handleMouseEnter(e.currentTarget); }}
       onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                 >
               
                   <div className="img-container"   style={{ background: card.color }}>
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
          </div>
        </div>
      </div>

      <div className="single-section bg-orange"></div>
    </div>
    </div>
  );
};

export default Work;
