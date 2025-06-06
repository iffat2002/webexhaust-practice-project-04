import { useEffect, useRef, useState } from "react";
import icon from "../images/insta.svg";
import gsap from "gsap";
import harison from "../images/harison.avif";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import AnimatedText from "../components/AnimatedText";

gsap.registerPlugin(ScrollTrigger);
const HarisonFooter = () => {
     
      const itemRef = useRef(null);
      const borderRef = useRef(null);
      const textRef = useRef(null);

     
    //footer
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
      
      
      
       
          const handleScrollToTop = () => {
            window.scrollTo({
              top: 0,
            
            });
          };
      
      
  return (
    <footer>
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-left">
            <div className="footer-left-top">
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
            <div className="right-top-f">
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

          <div className="right-top ff">
            <p>FOLLOW</p>
            <div className="icons">
              <img src={icon} width={24} height={24} alt="icon" />
              <img src={icon} width={24} height={24} alt="icon" />
              <img src={icon} width={24} height={24} alt="icon" />
              <img src={icon} width={24} height={24} alt="icon" />
              <img src={icon} width={24} height={24} alt="icon" />
            </div>
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
  )
}

export default HarisonFooter