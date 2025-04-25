import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import harison from "../images/harison.avif";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const HarisonHeader = () => {
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
      "-=2"
    );
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  useEffect(() => {
    if (menuOpen) {
      gsap.fromTo(
        ".overlay-menu",
        { y: "-100%", opacity: 0.4 },
        { y: "0%", opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [menuOpen]);

  //menu animation
  const containerRef = useRef(null);

  useEffect(() => {
    if (menuOpen && containerRef.current) {
      const q = gsap.utils.selector(containerRef);

      gsap.fromTo(
        q("p"),
        {
          clipPath: "inset(100% 0% 0% 0%)",
          scaleY: 0,
          opacity: 0,
          transformOrigin: "center bottom",
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          delay:0.3,
          scaleY: 1,
          opacity: 1,
          duration: 1.2,
       
          ease: "power3.out",
        }
      );
    }
  }, [menuOpen]);

  return (
    <>
      <header
        className="harison-header"
        style={{ backgroundColor: menuOpen && "transparent" }}
        ref={headerRef}
      >
        <div className="boxx">
          <div
            className="
header"
          >
            <div className="left">
              <a href="/harison">
                <img
                  ref={logoRef}
                  src="https://framerusercontent.com/images/E4ICFTxGKZdn6E6cf8MfRB6M5Ak.png?scale-down-to=512"
                  alt="logo"
                  width={100}
                  height={16}
                />
              </a>
            </div>

            <div className="right">
              {[
                "Work",
                "Archive",
                "Studio",
                "Press",
                "Contact",
                "Buy Template",
              ].map((text, index) => (
                <p
                  key={index}
                  ref={(el) => (linksRef.current[index] = el)}
                  className="header-anchor"
                  onClick={index === 0 ? handleNavigate : undefined}
                >
                  {text}
                </p>
              ))}
              <p className="menu-tag" onClick={toggleMenu}>
                {" "}
                {menuOpen ? "Close" : "Menu"}
              </p>
            </div>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="overlay-menu" ref={containerRef}>
          <div className="left-links">
            <p onClick={handleNavigate}>Work</p>
            <p>Archive</p>
            <p>Studio</p>
            <p>Press</p>
            <p>Contact</p>
            <p>Purchase</p>
          </div>
          <div className="right-links">
            <p>Instagram</p>
            <p>Twitter</p>
            <p>LinkedIn</p>
            <p>Dribbble</p>
          </div>
        </div>
      )}
    </>
  );
};

export default HarisonHeader;
