import { useEffect } from "react";
import "./harison.css";
import gsap from "gsap";
import harison from "../images/harison.avif";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import icon from "../images/insta.svg";

gsap.registerPlugin(ScrollTrigger);
const Harison = () => {
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

    gsap.timeline({
      scrollTrigger: {
        trigger: ".video1",
        start: "top bottom",  
        end: "top top",       
        scrub: true,
        markers: true,
      },
    })
    .fromTo(
      ".video1",
      { scaleX: 0.8 },
      { scaleX: 1, transformOrigin: "center center" }
    );

    gsap.timeline({
      scrollTrigger: {
        trigger: ".banner-full",
        start: "top bottom",  
        end: "top top",       
        scrub: true,
        markers: true,
      },
    })
    .fromTo(
      ".banner-full",
      { scaleX: 0.5 },
      { scaleX: 1, transformOrigin: "center center" }
    );


    gsap.timeline({
      scrollTrigger: {
        trigger: ".video3",
        start: "top bottom",  
        end: "top top",       
        scrub: true,
        markers: true,
      },
    })
    .fromTo(
      ".video3",
      { scaleX: 0.5 },
      { scaleX: 1, transformOrigin: "center center" }
    );


  }, []);

  return (
    <div>
      <header>
        <div className="boxx">
          <div
            className="
    header"
          >
            <div className="left">
              <img
                src="https://framerusercontent.com/images/E4ICFTxGKZdn6E6cf8MfRB6M5Ak.png?scale-down-to=512"
                alt="logo"
                width={100}
                height={16}
              />
            </div>
            <div className="right">
              <div className="work-box">
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
        
        <video className="video1" autoPlay loop muted playsInline>
          <source
            src="https://source.fouroom.co/video/pexels-videos-06.mp4"
            type="video/mp4"
          />
        </video>
        <img className="center-banner" src="https://framerusercontent.com/images/4xAOhFIZ4llQfMiXVZotSt71hBs.jpg" alt="banner" width={400} height={400} />
<div className="slide-2">
        <img className="banner-full" src="https://framerusercontent.com/images/jvNA2Qg0e4bS2Rksj8lC3nbshU.jpg" alt="banner" width={400} height={400} />
        <video width={629} height={354}  className="video2" autoPlay loop muted playsInline>
          <source
          src="https://source.fouroom.co/video/evanston-02.mp4"
            type="video/mp4"
          />
        </video>
        </div>
        <div className="slide-3">
        <video className="video3" autoPlay loop muted playsInline>
          <source
            src="https://source.fouroom.co/video/watches-02.mp4"
          />
        </video>
        <img width={629} height={354}  className="banner-3" src="https://framerusercontent.com/images/Rx7jEden3crkGVCmRkBGrDLw.jpg" />
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
                  <div className="service-item">
                    <span>Strategy</span>
                    <div className="dot"></div>
                  </div>

                  <div className="service-item">
                    <span>Branding</span>
                    <div className="dot"></div>
                  </div>
                  <div className="service-item">
                    <span>Technology</span>
                    <div className="dot"></div>
                  </div>
                  <div className="service-item">
                    <span>Digital</span>
                    <div className="dot"></div>
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
                <span>Back to top</span>
                <button className="purchase">Purchase</button>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-left">
              <button className="footer-btn">fourroom.co</button>
              <p className="footer-links">TERMS OF USE</p>
              <p className="footer-links">•</p>
              <p className="footer-links">IMPRTINTS</p>
            </div>
            <div className="footer-bottom-left">
              <p className="footer-links">MADE IN FRAMER</p>
              <p className="footer-links">•</p>
              <p className="footer-links">TYPE SET IN INTER</p>

              <p className="footer-links">•</p>
              <p className="footer-links">BERLIN, 2024</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Harison;
