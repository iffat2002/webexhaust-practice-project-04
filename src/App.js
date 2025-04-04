import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";
import cat from "./cat.jpg";
import team from "./team.png";
import team1 from "./team1.png";
import team2 from "./team2.png";
import aiza from "./aiza.png";
import saim from "./saim.png";
import iffat from "./iffat.png";
import laiba from "./laiba.png";
import usama from "./usama.png";
import sharam from "./download.png";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);

function App() {
  const textRef = useRef(null);
  const boxRefs = useRef([]);

  const sectionRef = useRef(null);

  const [start, setStart] = useState(false);
  const letters = [
    {
      char: "S",
      content: saim,
      name: "Saim Abbas",
      designation: "Founder & CEO",
      description: "",
    },
    {
      char: "L",
      content: laiba,
      name: "Laiba Sheikh",
      designation: "Software Engineer",
      description: "",
    },
    {
      char: "R",
      content: usama,
      name: "Rana Usama",
      designation: "Mobile App Developer",
      description: "",
    },
    {
      char: "A",
      content: aiza,
      name: "Aiza Khan",
      designation: "Digital Marketing",
      description: "",
    },
    {
      char: "S",
      content: sharam,
      name: "Shahram",
      designation: "Software Engineer",
      description: "",
    },
    {
      char: "I",
      content: iffat,
      name: "Iffat Fatima",
      designation: "Frontend Developer",
      description: "",
    },
  ];
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(boxRefs.current, {
      clipPath: "inset(0% 0% 0% 100%)",
      duration: 3,
      // ease: "power1.out",
      mixBlendMode: "difference",
    });
    tl.to(
      ".text",
      {
        fontSize: "8rem",
        duration: 3,

        ease: "power1.out",
      },
      "-=3"
    );
    tl.to(".title", {
      opacity: 1,
      duration: 1,
      ease: "power1.out",
    });
  }, []);
  const circleRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    if (start) {
      gsap.set(".team1", { x: "0%" });
      gsap.set(".team2", { x: "0%" });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".team-img",
            start: "top 0px",
            scrub: true,
            markers: true,
          },
        })
        .to(".team1", {
          x: "-500%",
          duration: 1,
          ease: "power1.out",
        });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".team-img",
            start: "top 0px",
            scrub: true,
            markers: true,
          },
        })
        .to(".team2", {
          x: "500%",
          duration: 1,
          ease: "power1.out",
        });

      gsap.to(".bottom", {
        top: 300,
        position: "absolute",
        zIndex: 0,
      });

      gsap.utils.toArray(".letter-container").forEach((container) => {
        const letter = container.querySelector(".w-tag");
        const relatedContent = container.querySelector(".related-content");

        ScrollTrigger.create({
          trigger: container,
          start: "top 70%",
          end: "bottom 70%",
          scrub: true,
          onEnter: () => {
            gsap.to(letter, {
              fontSize: "5rem",
              scaleY: 2,
              duration: 0.5,
              ease: "power1.out",
            });
            gsap.to(relatedContent, {
              opacity: 1,
              display: "block",
              y: 0,
              duration: 0.5,
            });
          },
          onEnterBack: () => {
            gsap.to(letter, {
              fontSize: "5rem",
              scaleY: 2,
              duration: 0.5,
              ease: "power1.out",
            });
            gsap.to(relatedContent, {
              opacity: 1,
              y: 0,
              duration: 0.5,
            });
          },
          onLeaveBack: () => {
            gsap.to(letter, {
              fontSize: "1rem",
              scaleY: 1,
              duration: 0.5,
              ease: "power1.out",
            });
            gsap.to(relatedContent, {
              opacity: 0,
              y: 20,
              duration: 0.5,
            });
          },
          onLeave: () => {
            gsap.to(letter, {
              fontSize: "1rem",
              scaleY: 1,
              duration: 0.5,
              ease: "power1.out",
            });
            gsap.to(relatedContent, {
              opacity: 0,
              y: 20,
              duration: 0.5,
            });
          },
        });
      });
      imageRefs.current.forEach((imageRef, index) => {
        gsap.set(imageRef, { x: 0 });
      });
    }
  }, [start]);

  const descRefs = useRef([]);
  const handleClick = (index) => {
    const imageRef = imageRefs.current[index];
    const descRef = descRefs.current[index];
    gsap.set(imageRef, { x: 0, opacity: 1, scale: 1 });

    gsap.to(imageRef, {
      x: 450,
      scale: 2,
      y: -20,
      ease: "power4.out",
      duration: 4,
    });
    gsap.set(descRef, {
      x: 0,
      opacity: 1,
      display: "block",
      duration: 2,
      delay: 1,
      ease: "bounce.in",
      scale: 1,
    });
  };

  return (
    <div className="home">
      {/* <img src={cat} width={200} height={200}/> */}
      {!start ? (
        <>
          <div className="content">
            <h1 ref={textRef} className="text">
              WEBEXHAUST
            </h1>
            <h4 className="title">WEB dEVELOPMENT & DESIGN</h4>
            <button className="visit" onClick={() => setStart(true)}>
              Visit Site
            </button>
          </div>
          <div
            ref={(el) => (boxRefs.current[0] = el)}
            className="box box1"
          ></div>
          <div
            ref={(el) => (boxRefs.current[1] = el)}
            className="box box2"
          ></div>
          <div
            ref={(el) => (boxRefs.current[2] = el)}
            className="box box3"
          ></div>
          <div
            ref={(el) => (boxRefs.current[3] = el)}
            className="box box4"
          ></div>
          <div
            ref={(el) => (boxRefs.current[4] = el)}
            className="box box5"
          ></div>
          <div
            ref={(el) => (boxRefs.current[5] = el)}
            className="box box6"
          ></div>
          <div
            ref={(el) => (boxRefs.current[6] = el)}
            className="box box7"
          ></div>
          <div
            ref={(el) => (boxRefs.current[7] = el)}
            className="box box8"
          ></div>
          <div
            ref={(el) => (boxRefs.current[8] = el)}
            className="box box9"
          ></div>
          <div
            ref={(el) => (boxRefs.current[9] = el)}
            className="box box10"
          ></div>
          <div
            ref={(el) => (boxRefs.current[10] = el)}
            className="box box7"
          ></div>
          <div
            ref={(el) => (boxRefs.current[11] = el)}
            className="box box8"
          ></div>
          <div
            ref={(el) => (boxRefs.current[12] = el)}
            className="box box9"
          ></div>
          <div
            ref={(el) => (boxRefs.current[13] = el)}
            className="box box10"
          ></div>
          <div
            ref={(el) => (boxRefs.current[14] = el)}
            className="box box7"
          ></div>
          <div
            ref={(el) => (boxRefs.current[15] = el)}
            className="box box8"
          ></div>
          <div
            ref={(el) => (boxRefs.current[16] = el)}
            className="box box9"
          ></div>
          <div
            ref={(el) => (boxRefs.current[17] = el)}
            className="box box10"
          ></div>
        </>
      ) : (
        <div className="site-content">
          <div className="team-img">
            <img
              src={team1}
              width={768}
              alt="team"
              className="team1 team"
            ></img>
            <img
              src={team2}
              width={768}
              alt="team"
              className="team2 team"
            ></img>
          </div>
          <div className="bottom">
            <div className="bottom-text">
              <p>Each Team Member Brings</p>
              <h4>Skills, Passion, and Dedication</h4>
            </div>
          </div>
          <div>
            {letters.map((item, index) => (
              <div key={index} className="letter-container">
                <h4 className="w-tag">{item.char}</h4>
                <div className="related-content">
                  <p className="designation"> {item.designation}</p>
                  <h1 className="name">{item.name}</h1>
                  <div>
                    <img
                      ref={(el) => (imageRefs.current[index] = el)}
                      src={item.content}
                      width={200}
                      height={200}
                      alt="Example"
                    />
                  </div>

                  <p
                    className="desc"
                    ref={(el) => (descRefs.current[index] = el)}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor inci
                  </p>
                  <button onClick={() => handleClick(index)} id="somebtn">
                    Know about the role
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
