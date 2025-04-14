import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const AnimatedText = ({ text, fontSize = "13px" }) => {
  const grayRef = useRef(null);
  const blackRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const gray = grayRef.current;
    const black = blackRef.current;
    const container = containerRef.current;

    gsap.set(black, { y: 30, opacity: 0 });

    const handleEnter = () => {
      gsap.killTweensOf([gray, black]);

      gsap.to(gray, {
        y: -30,
        opacity: 0,
        duration: 0.2,
        ease: "power1.out",
      });

      gsap.to(black, {
        y: 0,
        opacity: 1,
        duration: 0.2,
        ease: "power1.out",
      });
    };

    const handleLeave = () => {
      gsap.killTweensOf([gray, black]);

      gsap.to(gray, {
        y: 0,
        opacity: 1,
        duration: 0.2,
        ease: "power1.out",
      });

      gsap.to(black, {
        y: 30,
        opacity: 0,
        duration: 0.2,
        ease: "power1.out",
      });
    };

    container.addEventListener("mouseenter", handleEnter);
    container.addEventListener("mouseleave", handleLeave);

    return () => {
      container.removeEventListener("mouseenter", handleEnter);
      container.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        height: "13px",
        overflow: "hidden",
        cursor: "pointer",
        display: "inline-block",
        width:"111px",
        whiteSpace: "nowrap",
      }}
    >
      <p
        ref={grayRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          color: "gray",
          margin: 0,
          fontSize,
        }}
      >
        {text}
      </p>
      <p
        ref={blackRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          color: "black",
          margin: 0,
          fontSize,
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default AnimatedText;
