import React, { useState, useEffect, useRef } from "react";
import "./CursorAnimation.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import video from "../images/video.webm";

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
        x: 0, // translateX
        y: 0, // translateY
        z: 0, 
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
        transformStyle: "preserve-3d !important", 
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
            markers: false,
            toggleActions: "play none none reverse",
            onEnterBack: () => {
              gsap.to(row.querySelector(".table-right"), {
                x: 210,
                duration: 1,
                ease: "power1.inOut",
              });
            },
            onLeave: () => {
              gsap.to(row.querySelector(".table-right"), {
                x: 0,
                duration: 1,
                ease: "power1.inOut",
              });
            },
          },
          delay: index * 0.2,
          ease: "power1.inOut",
        }
      );
    });

    gsap.to(".simple-text", {
      x: (i) => (i % 2 === 0 ? -500 : 0),
      ease: "none",
      scrollTrigger: {
        trigger: ".x-text",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: false,
      },
    });

    gsap.fromTo(
      ".simple-text-2",
      { x: -500 },
      {
        x: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".x-text-2",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          markers: false,
        },
      }
    );

    gsap.to(".visual-feed", {
      backgroundColor: "black",

      scrollTrigger: {
        trigger: ".visual-feed",
        start: "top top",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
        markers: false,
      },
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".item-1",
          start: "90vh",
          end: "bottom 30%",
          scrub: true,
          markers: false,
        },
      })

      .to(".item-1", { scaleX: 1.4, scaleY: 0.8, duration: 3 })
      .to(".item-1", {
        scaleX: 0,
        scaleY: 2,
        skewY: -3,
        skewX: 0,
        duration: 2,
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".item-2",
          start: "top 20%",
          end: "bottom 20%",
          scrub: true,
          markers: false,
        },
      })
      .to(".item-2", { scaleX: 1, scaleY: 0.8, duration: 3 })
      .to(".item-2", {
        scaleX: 0,
        scaleY: 2.3,
        skewY: -3,
        skewX: 0,
        duration: 2,
      });


      gsap
      .timeline({
        scrollTrigger: {
          trigger: ".item-3",
          start: "top top",
          end: "top -100%",
       
          scrub: true,
          markers: false,
        },
      })
      .to(".item-3", { scaleX: 1.1,  duration: 3 })
      .to(".item-3", {
        scaleX: 0,
        scaleY: 1.3,
        skewY: -6,
        delay:10,
        skewX: 0,
        duration: 10,
      });


      gsap
      .timeline({
        scrollTrigger: {
          trigger: ".item-4",
          start: "top 20%",
         end: "top -30%",
          scrub: true,
          markers: false,
        
        },
      })
      .to(".item-4", { scaleX: 1.3, scaleY: 0.8, duration: 6 })
      .to(".item-4", {
        scaleX: 0,
        scaleY: 0.8,
        skewY: -3,
        skewX: 0,
        duration: 4,
      });
  }, []);

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
          I’m a freelance digital director. I turn ideas into digital solutions
          and oversee the entire process, from initial concept to final
          execution. I make sure that every step is efficient and sustainable
          and leads to lasting results.
        </div>
      </section>
      <div className="text-table">
        <div className="table-row">
          <div className="count">1</div>
          <div className="table-right">
            Research, brainstorming & conception
          </div>
        </div>
        <div className="table-row">
          <div className="count">2</div>
          <div className="table-right">
            Research, brainstorming & conception
          </div>
        </div>
        <div className="table-row">
          <div className="count">3</div>
          <div className="table-right">
            Research, brainstorming & conception
          </div>
        </div>
        <div className="table-row">
          <div className="count">4</div>
          <div className="table-right">
            Research, brainstorming & conception
          </div>
        </div>
      </div>

      <div className="visual-feed">
        <div className="text-container">
          <div className="wrapper">
            <div class="visual-text">Visual Feed</div>
            <div class="text-block">(Projects coming soon)</div>
          </div>
        </div>
        <div className="grid-box">
          <div className="item-1">
            <video width="100%" autoPlay={true} loop muted>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="item-2">
            <img
              className="item-img"
              src="https://cdn.prod.website-files.com/67b2f066e72dd42bd56d8751/67b2f066e72dd42bd56d878c_1920_ebh-mobile01.avif"
            />
          </div>

          <div className="item-3">
            <img
              className="item-img-2"
              src="https://cdn.prod.website-files.com/67b2f066e72dd42bd56d8751/67b2f066e72dd42bd56d87a8_lowago_04.avif"
            />
          </div>
          <div className="item-4">
            <img
              className="item-img-4"
            />
          </div>
          <div className="item-4">
            <img
              className="item-img-4"
              src="https://cdn.prod.website-files.com/67b2f066e72dd42bd56d8751/67b2f066e72dd42bd56d8773_face01.avif"
            />
          </div>
        </div>
      </div>

      {/* scroll marquee */}
      <div className="x-text">
        <div className="simple-text">
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
        </div>

        <div className="simple-text">
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
        </div>
      </div>

      <div className="x-text-2">
        <div className="simple-text-2">
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
        </div>

        <div className="simple-text-2">
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
        </div>
      </div>

      <div className="x-text">
        <div className="simple-text">
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
        </div>

        <div className="simple-text">
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
        </div>
      </div>

      <div className="x-text-2">
        <div className="simple-text-2">
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
        </div>

        <div className="simple-text-2">
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
        </div>
      </div>
      <div className="blank"></div>
    </div>
  );
};

export default CursorAnimation;
