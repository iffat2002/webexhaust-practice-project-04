import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(MotionPathPlugin, Flip);

const MotionPath = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    // motionpath
    gsap.to(circleRef.current, {
      duration: 6,
      repeat: -1,
      ease: "power1.inOut",
      motionPath: {
        path: "#diamondPath",
        align: "#diamondPath",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
    });

    // Flip animation
    document.querySelector("button").addEventListener("click", () => {
      const box = document.querySelector(".flip-box");
      const target = document.querySelector("#targetBox");

      Flip.fit(box, target,{
        scale: true,
        duration:2,
        ease: "power1.inOut",
      });

      // Animate from previous state
     
    });
  }, []);

  return (
    <div style={{ width: "100%", height: "300px", position: "relative" }}>

      <svg width="100%" height="150px" viewBox="0 0 200 100">
        <path
          id="diamondPath"
          d="
            M 20 50 
            L 40 30 
            L 60 50 
            L 80 30 
            L 100 50 
            L 120 30 
            L 140 50 
            L 120 70 
            L 100 50 
            L 80 70 
            L 60 50 
            L 40 70 
            L 20 50
          "
          fill="none"
          stroke="gray"
          strokeWidth="2"
        />
        <circle ref={circleRef} r="6" fill="crimson" />
      </svg>

    
      <button style={{ position: "absolute", top: "10px", left: "10px", zIndex: 2 }}>
        FLIP
      </button>


      <div
        className="flip-box"
        style={{
          position: "absolute",
          top: "180px",
          left: "20px",
          height: "100px",
          width: "100px",
          backgroundColor: "black",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        I'm the Box
      </div>

      {/* Target  */}
      <div
        id="targetBox"
        style={{
          position: "absolute",
          top: "180px",
          left: "140px",
          width: "60px",
          height: "60px",
          backgroundColor: "lightgray",
          opacity: 0.3,
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default MotionPath;
