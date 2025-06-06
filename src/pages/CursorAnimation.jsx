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
        x: 0,
        y: 0,
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
      const SMobile = window.innerWidth <= 480;
      const rightElement = row.querySelector(".table-right");
      const countElement = row.querySelector(".b-r");
  
      // Set initial rotation for count
      gsap.set(countElement, { rotateZ: 45 });
  
      // Animate both rightElement and countElement
      gsap.fromTo(
        [rightElement, countElement],
        {
          x: 0,
 
        },
        {
          x: (i) => (i === 0 ? (SMobile ? 60 : 210) : 0), 
          rotateZ: (i) => (i === 0 ? 0 : 0), 
          scrollTrigger: {
            trigger: row,
            start: "top 90%",
            duration: 1,
            end: "top -10%",
            scrub: false,
            once: false,
            markers: false,
            toggleActions: "play none none reverse",
            onEnterBack: () => {
              gsap.to([rightElement, countElement], {
                x: (i) => (i === 0 ? (SMobile ? 60 : 210) : 0),
                rotate: 0,
                duration: 1,
                ease: "power1.inOut",
              });
            },
            onLeave: () => {
              gsap.to([rightElement, countElement], {
                x: (i) => (i === 0 ? (SMobile ? 60 : 210) : 0),
                rotate: 0,
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
  }, []);

  useEffect(() => {
 
    gsap.to(".simple-text", {
      x: (i) => (i % 2 === 0 ? -1000 : 0),
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
      { x: -1000 },
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
        end: "bottom 40%",
        toggleActions: "play reverse play reverse",
        markers: false,
      },
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".item-1",
          start: "top 15%",
          end: "",
          scrub: true,
          markers: false,
        },
      })

      .to(".item-1", { scaleX: 1.2, scaleY: 0.8, duration: 1 })
      .to(".item-1", {
        scaleX: 0,
        scaleY: 2,
        skewY: -5,
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
          end: "",

          scrub: true,
          markers: false,
        },
      })
      .to(".item-3", { scaleX: 1.1, duration: 3 })
      .to(".item-3", {
        scaleX: 0,
        scaleY: 1.3,
        skewY: -6,
        delay: 10,
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
    <div className="cursor-header">
      <a>Lydija Kühr</a>
      <div>
        <a>Info</a>
        <a>Email</a>
      </div>
    </div>
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
          <div className="count">
            <span className="b-r">1</span>
          </div>
          <div className="table-right">
            Research, brainstorming & conception
          </div>
        </div>
        <div className="table-row">
          <div className="count">
            <span className="b-r">2</span>
          </div>
          <div className="table-right">
            Research, brainstorming & conception
          </div>
        </div>
        <div className="table-row">
          <div className="count">
            <span className="b-r">3</span>
          </div>
          <div className="table-right">
            Research, brainstorming & conception
          </div>
        </div>
        <div className="table-row">
          <div className="count">
            <span className="b-r">4</span>
          </div>
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
            <img className="item-img-4" />
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
      <div class="label-box"><h2 class="label">What happened so far</h2></div>

      <div className="x-text">
        <div className="simple-text">
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
          <span>Barlach Haus</span>
          <div className="tag">clients</div>
          <span>Directline</span>
          <div className="tag">clients</div>
          <span>Finanzen.de</span>
          <div className="tag">clients</div>
          <span>Bauwelt</span>
          <div className="tag">clients</div>
          <span>Baunetz
          </span>
          <div className="tag">clients</div>
        </div>

        <div className="simple-text">
          <span>Deutsche Bahn</span>
          <div className="tag">clients</div>
          <span>Barlach Haus</span>
          <div className="tag">clients</div>
          <span>Directline</span>
          <div className="tag">clients</div>
          <span>Finanzen.de</span>
          <div className="tag">clients</div>
          <span>Bauwelt</span>
          <div className="tag">clients</div>
          <span>Baunetz
          </span>
          <div className="tag">clients</div>
        </div>
      </div>

      <div className="x-text-2">
        <div className="simple-text-2">
          <span>Golden Award of Montreux</span>
          <div className="tag">awards</div>
          <span>Mobius Award</span>
          <div className="tag">awards</div>
          <span>European Design Award</span>
          <div className="tag">awards</div>
          <span>Lead Award: Webmagazin des Jahres</span>
          <div className="tag">awards</div>
          <span>Deutsche Bahn</span>
          <div className="tag">awards</div>
          <span>Deutsche Bahn</span>
          <div className="tag">awards</div>
        </div>

        <div className="simple-text-2">
        <span>Golden Award of Montreux</span>
          <div className="tag">awards</div>
          <span>Mobius Award</span>
          <div className="tag">awards</div>
          <span>European Design Award</span>
          <div className="tag">awards</div>
          <span>Lead Award: Webmagazin des Jahres</span>
          <div className="tag">awards</div>
          <span>Deutsche Bahn</span>
          <div className="tag">awards</div>
          <span>Deutsche Bahn</span>
          <div className="tag">awards</div>
        </div>
      </div>

      <div className="x-text">
        <div className="simple-text">
          <span>Deutsche Telekom</span>
          <div className="tag">clients</div>
          <span>Sozialhelden</span>
          <div className="tag">clients</div>
          <span>Uncube</span>
          <div className="tag">clients</div>
          <span>Urbz</span>
          <div className="tag">clients</div>
          <span>Perspectives</span>
          <div className="tag">clients</div>
          <span>ZDF</span>
          <div className="tag">clients</div>
        </div>

        <div className="simple-text">
        <span>Deutsche Telekom</span>
          <div className="tag">clients</div>
          <span>Sozialhelden</span>
          <div className="tag">clients</div>
          <span>Uncube</span>
          <div className="tag">clients</div>
          <span>Urbz</span>
          <div className="tag">clients</div>
          <span>Perspectives</span>
          <div className="tag">clients</div>
          <span>ZDF</span>
          <div className="tag">clients</div>
        </div>
      </div>

      <div className="x-text-2">
        <div className="simple-text-2">
          <span>DDC — Gute Gestaltung</span>
          <div className="tag">awards</div>
          <span>Lovie Award</span>
          <div className="tag">awards</div>
          <span>DMMA Onlinestar</span>
          <div className="tag">awards</div>
          <span>Annual Multimedia Award</span>
          <div className="tag">awards</div>
          <span>Red Dot</span>
          <div className="tag">awards</div>
          <span>IF Award</span>
          <div className="tag">awards</div>
        </div>

        <div className="simple-text-2">
        <span>DDC — Gute Gestaltung</span>
          <div className="tag">awards</div>
          <span>Lovie Award</span>
          <div className="tag">awards</div>
          <span>DMMA Onlinestar</span>
          <div className="tag">awards</div>
          <span>Annual Multimedia Award</span>
          <div className="tag">awards</div>
          <span>Red Dot</span>
          <div className="tag">awards</div>
          <span>IF Award</span>
          <div className="tag">awards</div>
        </div>
      </div>
      <div className="cursor-footer">
        <a className="legal">Legal</a>
        <a onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Only upwards from here</a>
      </div>
    </div>
  );
};

export default CursorAnimation;
