import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import hero from "../hero.png";
import "./CharlieDrink.css";

gsap.registerPlugin(ScrollTrigger);
const CharlieDrink = () => {
  const products = [
    {
      id: 1,
      canImg:
        "https://cdn.prod.website-files.com/66dabe4fe2fdbb07d092f829/6745a05384ef1bcfb3f5a3bd_Charlies%20Organics%20330ml%20Can%20Black%20Currant.avif",
      splashBg:
        "https://cdn.prod.website-files.com/66dabe4fe2fdbb07d092f829/674dd38b3d902e72d8ed92e6_1.avif",
      bgColor: " #a19bd9",
      name: "Cassis",
    },
    {
      id: 2,
      canImg:
        "https://cdn.prod.website-files.com/66dabe4fe2fdbb07d092f829/6745a009e86eb7e0cb4d45e8_Charlies%20Organics%20330ml%20Can%20Passionfruit.avif",
      splashBg:
        "https://cdn.prod.website-files.com/66dabe4fe2fdbb07d092f829/674dd393fce26526cd14b91d_2.avif",
      bgColor: "#f7d064",
      name: "Passionfruit",
    },
    {
      id: 3,
      canImg:
        "https://cdn.prod.website-files.com/66dabe4fe2fdbb07d092f829/66dae210037e3f34eaf3eb57_Charlies%20Organics%20330ml%20Can%20Orange%20Mandarin%20Orange%20HR.avif",
      splashBg:
        "https://cdn.prod.website-files.com/66dabe4fe2fdbb07d092f829/674dd39afdc91f5b02a248b2_3.avif",
      bgColor: "hsla(23.368421052631586, 84.07%, 77.84%, 1.00)",
      name: "Orange & Mandarin",
    },
    {
      id: 4,
      canImg:
        "https://cdn.prod.website-files.com/66dabe4fe2fdbb07d092f829/66dae1d7e2fdbb07d0b4eeca_Charlies%20Organics%20330ml%20Can%20Raspberry%20%26%20Lime.avif",
      splashBg:
        "https://cdn.prod.website-files.com/66dabe4fe2fdbb07d092f829/674dd3a115d5d982e77c61f3_8.avif",
      bgColor: "#c3d250",
      name: "Raspberry & Lime",
    },
    {
      id: 5,
      canImg:
        "https://cdn.prod.website-files.com/66dabe4fe2fdbb07d092f829/6745a09f7810e476037a3cc2_Charlies%20Organics%20330ml%20Can%20Grapefruit.avif",
      splashBg:
        "https://cdn.prod.website-files.com/66dabe4fe2fdbb07d092f829/674dd39afdc91f5b02a248b2_3.avif",
      bgColor: "#ecb1be",
      name: "Grapefruit",
    },
    {
      id: 6,
      canImg:
        "https://cdn.prod.website-files.com/66dabe4fe2fdbb07d092f829/66dad9f9da8ca070ebd27542_Charlies%20Organics%20330ml%20Can%20Lemon.avif",
      splashBg:
        "https://cdn.prod.website-files.com/66dabe4fe2fdbb07d092f829/674dd39afdc91f5b02a248b2_3.avif",
      bgColor: "hsla(195.45454545454547, 57.89%, 77.65%, 1.00)",
      name: "Lemon",
    },
  ];
  const stepperRef = useRef(null);

  const wrapperRef = useRef(null);
  //bubbles
  useEffect(() => {
    const introWrapper = wrapperRef.current;

    const createBubble = (x, y) => {
      const rect = introWrapper.getBoundingClientRect();
      const bubbleX = x - rect.left;
      const bubbleY = y - rect.top;

      const bubble = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
      );
      bubble.setAttribute("width", "40");
      bubble.setAttribute("height", "40");
      bubble.setAttribute("viewBox", "0 0 100 100");
      bubble.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      bubble.style.position = "absolute";
      bubble.style.left = `${bubbleX}px`;
      bubble.style.top = `${bubbleY}px`;
      bubble.style.pointerEvents = "none";
      bubble.style.zIndex = "1000";

      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      path.setAttribute(
        "d",
        "M928.554,0a11.414,11.414,0,0,1,10.413,7.943c.61,1.717.011,3.834.155,5.754.1,1.4,1.09,2.984.683,4.132-.728,2.05-1.782,4.732-3.469,5.534a26.872,26.872,0,0,1-10.27,2.5C919.783,26.1,913,19.8,913.6,14.457c.576-5.1,3.333-10.3,9.034-12.466C924.58,1.251,926.58.659,928.554,0m.482,17.932A31.631,31.631,0,0,0,932.313,17c.376-.144.884-.938.773-1.2a47.546,47.546,0,0,0-2.939-6.084,26.829,26.829,0,0,0-3.159-3.61c-1.539,2.132-3.641,4.069-4.463,6.449-.854,2.474,2.84,5.373,6.51,5.376"
      );
      path.setAttribute("fill", "#96D8EA");
      path.setAttribute("transform", "translate(-913.566)");

      bubble.appendChild(path);
      introWrapper.appendChild(bubble);

      gsap.fromTo(
        bubble,
        {
          y: 0,
          opacity: 1,
          scale: Math.random() * 0.5 + 0.5,
          rotation: Math.random() * 360,
        },
        {
          y: -100,
          opacity: 0,
          duration: 1.5,
          ease: "power2.out",
          onComplete: () => bubble.remove(),
        }
      );
    };

    const handleMouseMove = (event) => {
      createBubble(event.clientX, event.clientY);
    };

    introWrapper.addEventListener("mousemove", handleMouseMove);
    return () => introWrapper.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerRef = useRef(null);
  const circleRef = useRef(null);
  const [HeroBg, setHerobg] = useState([
    "#a19bd9",
    "#f7d064",
    "hsla(23.368421052631586, 84.07%, 77.84%, 1.00)",
    "#c3d250",
  ]);
  const [video, setVideo] = useState([
    "https://pub-fb9062f1fe2444cd88ae29118656462c.r2.dev/Charlies_casis_%5B001-128%5D-vp9-chrome.webm",
    "https://pub-fb9062f1fe2444cd88ae29118656462c.r2.dev/Charlies_passionfruit_%5B001-128%5D-vp9-chrome.webm",
    "https://pub-fb9062f1fe2444cd88ae29118656462c.r2.dev/Charlies_Orange%20%26%20Mandarin_%5B001-128%5D-vp9-chrome.webm",
    "https://pub-fb9062f1fe2444cd88ae29118656462c.r2.dev/Charlies_Raspberry_%5B001-128%5D-vp9-chrome.webm",
  ]);
  const [bgIndex, setBgIndex] = useState(0);

  const handleTap = () => {
    const nextIndex = (bgIndex + 1) % HeroBg.length;
    const container = containerRef.current;

    // Create ripple
    const ripple = document.createElement("div");
    ripple.style.position = "absolute";
    ripple.style.left = "50%";
    ripple.style.top = "50%";
    ripple.style.transform = "translate(-50%, -50%)";
    ripple.style.borderRadius = "50%";
    ripple.style.backgroundColor = HeroBg[nextIndex];
    ripple.style.width = "0px";
    ripple.style.height = "0px";
    ripple.style.zIndex = 2;
    ripple.style.pointerEvents = "none";
    container.appendChild(ripple);

    const finalSize = Math.max(window.innerWidth, window.innerHeight) * 2;

    gsap.to(ripple, {
      width: finalSize,
      height: finalSize,
      duration: 0.8,
      ease: "power2.out",
      onComplete: () => {
        container.style.backgroundColor = HeroBg[nextIndex];
        container.removeChild(ripple);
        setBgIndex(nextIndex);
      },
    });
  };

  //tap movement
  useEffect(() => {
    const container = containerRef.current;
    const circle = circleRef.current;

    const circleSize = 120; // must match CSS width/height

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const rawX = e.clientX - rect.left;
      const rawY = e.clientY - rect.top;

      // Clamp position so circle stays fully inside container
      const x = Math.max(
        circleSize / 2,
        Math.min(rawX, rect.width - circleSize / 2)
      );
      const y = Math.max(
        circleSize / 2,
        Math.min(rawY, rect.height - circleSize / 2)
      );

      gsap.to(circle, {
        x: x - circleSize / 2,
        y: y - circleSize / 2,
        duration: 0.6,

        ease: "none",
      });
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  //hero float
  const videoRef = useRef(null);
  const imageRef = useRef(null);
  const centerImgRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseMove = (e) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      // Normalize between -1 and 1
      const offsetX = (x / width - 0.5) * 2;
      const offsetY = (y / height - 0.5) * 2;

      const moveAmount = 15; // Adjust for stronger/weaker float

      gsap.to([videoRef.current, imageRef.current, centerImgRef.current], {
        x: offsetX * moveAmount,
        y: offsetY * moveAmount,
        ease: "power2.out",
        duration: 0.6,
      });
    };

    const reset = () => {
      gsap.to([videoRef.current, imageRef.current, centerImgRef.current], {
        x: 0,
        y: 0,
        ease: "power2.out",
        duration: 0.8,
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", reset);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", reset);
    };
  }, []);

  //product section
  const productRef = useRef([]);
  const canImgRef = useRef([]);
  const bgRef = useRef([]);

  // Initialize refs for each product based on the products length
  useEffect(() => {
    productRef.current = productRef.current.slice(0, products.length);
    canImgRef.current = canImgRef.current.slice(0, products.length);
    bgRef.current = bgRef.current.slice(0, products.length);
  }, [products.length]);

  // Hover animation on mouse enter
  const onEnter = (index) => {
    gsap.to(bgRef.current[index], {
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out",
    });
    gsap.to(canImgRef.current[index], {
      rotate: 12,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  // Hover animation on mouse leave
  const onLeave = (index) => {
    gsap.to(bgRef.current[index], {
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
    });
    gsap.to(canImgRef.current[index], {
      rotate: 0,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  //marquee section + info section
  useEffect(() => {
    //info
    gsap.fromTo(
      ".info_text-wrapper",
      { y: 200 },
      {
        y: 0,
        scrollTrigger: {
          trigger: ".info-section",
          start: "top 50%",
        },
      }
    );
    //marquee
    gsap.fromTo(
      ".m-list",
      { x: 0 },
      {
        x: "-25%", // move half the width left
        ease: "none",
        scrollTrigger: {
          trigger: ".m-list",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          // markers: true,
        },
      }
    );
    //cards slide up
    const tl = gsap.timeline({});
    tl.fromTo(
      ".step-mask",
      { scaleX: 0.7 },
      {
        scaleX: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".steps-section",
          start: "top bottom ",
          end: "top top ",
          scrub: true,
          markers: true,
        },
      }
    );
    tl.fromTo(
      ".stepper-wrapper",
      { y: 0 },
      {
        y: "-64%",
        duration: 0.1,

        scrollTrigger: {
          trigger: ".steps-section",
          start: "top top ",
          end: "bottom 90% ",
          scrub: true,
          markers: true,
        },
      }
    );
  }, []);

  //colored slides
  useEffect(() => {
    gsap.to(".yellow-slide", {
      scaleX: "0.7",
      rotate: "-4deg",
      scrollTrigger: {
        trigger: ".colored-slides",
        start: "bottom 95%",
        end: "bottom top",
        scrub: true,
        // markers: true,
      },
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".yellow-slide",
        start: "top 50%",
        end: "bottom top",
        scrub: true,
         markers: true,
      },
    });

    tl.fromTo(
      ".yellow-slide",
      { width: "80%", height: "80%" },
      {
        scaleX: 1.1,
        scaleY: 1.1,
        scaleZ: 1,
        height: "100vh",
        width: "100vw",
        ease: "none",
        duration: 2,
      }
    ).fromTo(
      ".slide-t",
      { clipPath: "inset(100% 0% 0% 0%)" }, // fully hidden from bottom
      { clipPath: "inset(0% 0% 0% 0%)", ease: "none" },
      "-=1"
    );
    tl.fromTo(
      ".lemon_img",
      { scaleX: 0, scaleY: 0 },
      { scaleX: 1, scaleY: 1 },
      "-=0.4"
    );
    tl.fromTo(
      ".blue-slide",
      { scaleX: 0, scaleY: 0 },
      {
        scaleX: 18,
        scaleY: 18,
        scaleZ: 1,
        ease: "power2.inOut",
        delay: 0.5,
      }
    );
    tl.to(".lemon_img", { scaleX: 0, scaleY: 0 }, "-=0.4");
    tl.fromTo(".text-img", { y: 300 }, { y: 0, ease: "power2.inOut" }, "-=0.4");
    tl.set(".p1", { display: "none" }, "-=0.4");
    tl.set(".p2", { display: "flex" }, "-=0.4").fromTo(
      ".slide-t2",
      { clipPath: "inset(100% 0% 0% 0%)" },
      { clipPath: "inset(0% 0% 0% 0%)", ease: "none" },
      "-=0.4"
    );
  }, []);

  //social section
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".socials-section",
        start: "top 70% ",
        delay: 1,
   
        toggleActions: "play reset play reset", 

      },
    });
    tl.fromTo(
      ".h-socials",
      { y: 500,  },
      {
        y: 0,
        duration: "0.5",
        
    
      }
    )
 .fromTo(
      ".cd-slider-component",
      { x: 0 },
      {
        x: "-20%", 
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".cd-slider-component",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          // markers: true,
        },
      }
    )
    .fromTo(
      ".zoom-img",
      {scale:1.2},
      {
      scale:1,
        ease: "none",
        scrollTrigger: {
          trigger: ".zoom-img",
          start: "top bottom",
          end: "top top",
          
        scrub:"true",
        },
      },"-=1"
    )

   

  }, []);
//footer
useEffect(() => {

  gsap.fromTo(
    ".footer-para",
    { y: 200 },
    {
      y: 0,
  
      scrollTrigger: {
        trigger: ".cd-footer",
        start: "top 50%",
        stagger: 0.4,
        toggleActions: "play reset play reset", 
        duration:0.4,
    
      },
    }
  );

  gsap.fromTo(
    ".fg-r",
    { scaleX:0.7, scaleY:0.7, rotateX:"10deg" },
    {
     
      scaleX:1, scaleY:1, rotateZ:0,
      scrollTrigger: {
        trigger: ".cd-footer",
        start: "top 80%",
       
        scrub:true,
   
    
      },
    }
  );


  gsap.fromTo(
    ".footer-marquee",
    { x: 0 },
    {
      x: "-25%", // move half the width left
      ease: "none",
      scrollTrigger: {
        trigger: ".footer-marquee",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        // markers: true,
      },
    }
  );

 
}, []);


const [open,setOpen] = useState(false)
  return (
    <div ref={wrapperRef} bubbles="" className="charlie-drink">
      <div className={`charlie-drink-header ${open && "headerOpen"}`}>
        <div className="h-top">
          <div className="circle">
            <img
              src="https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/66dad3c38b4909b55d36eaf5_Instagram.svg"
              alt="instagram"
              width={16}
              height={16}
            ></img>
          </div>
          <img
          className="cd-logo"
            src="https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/67cea500e52540fc4346f61b_Charlie%20organics.svg"
            alt="cd logo"
            width={160}
            height={68}
          ></img>
          <button onClick={()=>setOpen(!open)} style={{ background: open && "#22546e" }}
 className="order-btn"><span>ORDER</span>
          {!open ?
         ( <svg className="toggle-svg"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 20 20"
      width="20"
      height="20"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <clipPath id="__lottie_element_1526">
          <rect width="20" height="20" x="0" y="0" />
        </clipPath>
        <clipPath id="__lottie_element_1539">
          <path d="M0,0 L10,0 L10,2 L0,2z" />
        </clipPath>
      </defs>
      <g clipPath="url(#__lottie_element_1526)">
        <g transform="matrix(1,0,0,1,0,2.999999761581421)" opacity="1">
          <path
            fill="rgb(33,83,109)"
            fillOpacity="1"
            d="M20,1 C20,0.4481000006198883 19.55190086364746,0 19,0 C19,0 1,0 1,0 C0.4481000006198883,0 0,0.4481000006198883 0,1 C0,1 0,1 0,1 C0,1.551900029182434 0.4481000006198883,2 1,2 C1,2 19,2 19,2 C19.55190086364746,2 20,1.551900029182434 20,1 C20,1 20,1 20,1z"
          />
        </g>
        <g transform="matrix(1,0,0,1,0,15.000000953674316)" opacity="1">
          <path
            fill="rgb(33,83,109)"
            fillOpacity="1"
            d="M20,1 C20,0.4481000006198883 19.55190086364746,0 19,0 C19,0 1,0 1,0 C0.4481000006198883,0 0,0.4481000006198883 0,1 C0,1 0,1 0,1 C0,1.551900029182434 0.4481000006198883,2 1,2 C1,2 19,2 19,2 C19.55190086364746,2 20,1.551900029182434 20,1 C20,1 20,1 20,1z"
          />
        </g>
        <g
          clipPath="url(#__lottie_element_1539)"
          transform="matrix(1,0,0,1,0,9)"
          opacity="1"
        >
          <g transform="matrix(1,0,0,1,0,0)" opacity="1">
            <path
              fill="rgb(33,83,109)"
              fillOpacity="1"
              d="M10,1 C10,0.4481000006198883 9.551899909973145,0 9,0 C9,0 1,0 1,0 C0.4481000006198883,0 0,0.4481000006198883 0,1 C0,1 0,1 0,1 C0,1.551900029182434 0.4481000006198883,2 1,2 C1,2 9,2 9,2 C9.551899909973145,2 10,1.551900029182434 10,1 C10,1 10,1 10,1z"
            />
          </g>
        </g>
      </g>
    </svg>)
    :
   ( <svg
    className="close-svg"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 20 20"
  width="20"
  height="20"
  preserveAspectRatio="xMidYMid meet"
>
  <defs>
    <clipPath id="__lottie_element_1526">
      <rect width="20" height="20" x="0" y="0" />
    </clipPath>
    <clipPath id="__lottie_element_1539">
      <path d="M0,0 L10,0 L10,2 L0,2z" />
    </clipPath>
  </defs>
  <g clipPath="url(#__lottie_element_1526)">
    <g
      transform="matrix(0.7071068286895752,0.7071067690849304,-0.7071067690849304,0.7071068286895752,3.6360387802124023,2.22182559967041)"
      opacity="1"
    >
      <path
        fill="rgb(255,255,255)"
        fillOpacity="1"
        d="M20,1 C20,0.4481 19.5519,0 19,0 C19,0 1,0 1,0 C0.4481,0 0,0.4481 0,1 C0,1 0,1 0,1 C0,1.5519 0.4481,2 1,2 C1,2 19,2 19,2 C19.5519,2 20,1.5519 20,1 C20,1 20,1 20,1z"
      />
    </g>
    <g
      transform="matrix(0.7071068286895752,-0.7071067690849304,0.7071067690849304,0.7071068286895752,2.221825122833252,16.36396026611328)"
      opacity="1"
    >
      <path
        fill="rgb(255,255,255)"
        fillOpacity="1"
        d="M20,1 C20,0.4481 19.5519,0 19,0 C19,0 1,0 1,0 C0.4481,0 0,0.4481 0,1 C0,1 0,1 0,1 C0,1.5519 0.4481,2 1,2 C1,2 19,2 19,2 C19.5519,2 20,1.5519 20,1 C20,1 20,1 20,1z"
      />
    </g>
    <g clipPath="url(#__lottie_element_1539)" transform="matrix(1,0,0,1,0,9)" opacity="0">
      <g transform="matrix(1,0,0,1,0,0)" opacity="1">
        <path
          fill="rgb(255,255,255)"
          fillOpacity="1"
          d="M10,1 C10,0.4481 9.5519,0 9,0 C9,0 1,0 1,0 C0.4481,0 0,0.4481 0,1 C0,1 0,1 0,1 C0,1.5519 0.4481,2 1,2 C1,2 9,2 9,2 C9.5519,2 10,1.5519 10,1 C10,1 10,1 10,1z"
        />
      </g>
    </g>
  </g>
</svg>)
}
          </button>
        </div>
        <div className={`h-bottom ${open && "bottomHeader"}`}>
          <a href="">PRODUCTS</a>
          <a href="">OUR STORY</a>
          <a href="">FAQ</a>
          <a href="">CONTACT</a>
          <a href="">ORDER</a>
        </div>
      </div>
      <section className="cd-hero">
        <div className="cd-hero-wrapper" ref={containerRef}>
          <img
            ref={imageRef}
            class="hero-bg"
            src="https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/66dadc75a87cf9914f4539d7_Mask%20Group%20119.avif"
            alt=""
            sizes="(max-width: 4422px) 100vw, 4422px"
            data-w-id="4b2aa2c9-4cc5-ed73-db87-c615f79b8c62"
            loading="lazy"
            srcset="https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/66dadc75a87cf9914f4539d7_Mask%20Group%20119-p-500.png 500w, https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/66dadc75a87cf9914f4539d7_Mask%20Group%20119-p-800.png 800w, https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/66dadc75a87cf9914f4539d7_Mask%20Group%20119-p-1080.png 1080w, https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/66dadc75a87cf9914f4539d7_Mask%20Group%20119-p-1600.png 1600w, https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/66dadc75a87cf9914f4539d7_Mask%20Group%20119-p-2000.png 2000w, https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/66dadc75a87cf9914f4539d7_Mask%20Group%20119.avif 4422w"
          />
          <div className="tap" ref={circleRef} onClick={handleTap}>
            <span>TAP</span>
          </div>
          <div className="hero-center" ref={centerImgRef}>
            <img src={hero} width={616} height={430} alt></img>
          </div>
          <video
            ref={videoRef}
            className="cd-hero-video"
            key={video[bgIndex]}
            autoPlay
            loop
            muted
            playsInline
            width={660}
            height={660}
          >
            <source src={video[bgIndex]} type="video/mp4"></source>
          </video>
        </div>
      </section>

      <section className="cd-products">
        <div className="products-header">
          <h1>PRODUCTS</h1>
          <div>
            <button className="cans">CANS</button>
            <button className="bottles">BOTTLES</button>
          </div>
        </div>
        <div className="product-cards">
          {products.map((item, index) => {
            return (
              <div
                className="cd-product"
                ref={(el) => (productRef.current[index] = el)}
                key={index}
                onMouseEnter={() => onEnter(index)}
                onMouseLeave={() => onLeave(index)}
                style={{ background: item.bgColor }}
              >
                <img
                  src={item.canImg}
                  alt=""
                  ref={(el) => (canImgRef.current[index] = el)}
                  className="can-img"
                />
                <div class="product_card-text">
                  <div class="product_card-heading">{item.name}</div>
                  <div class="text-color-white">0 sugar</div>
                </div>
                <div
                  ref={(el) => (bgRef.current[index] = el)}
                  className="product_card-bg"
                >
                  <img
                    sizes="(max-width: 4422px) 100vw, 4422px"
                    srcset="https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/66dadc75a87cf9914f4539d7_Mask%20Group%20119-p-500.png 500w, https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/66dadc75a87cf9914f4539d7_Mask%20Group%20119-p-800.png 800w, https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/66dadc75a87cf9914f4539d7_Mask%20Group%20119-p-1080.png 1080w, https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/66dadc75a87cf9914f4539d7_Mask%20Group%20119-p-1600.png 1600w, https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/66dadc75a87cf9914f4539d7_Mask%20Group%20119-p-2000.png 2000w, https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/66dadc75a87cf9914f4539d7_Mask%20Group%20119.avif 4422w"
                    alt=""
                    src="https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/66dadc75a87cf9914f4539d7_Mask%20Group%20119.avif"
                    loading="lazy"
                    class="can-bg"
                  />
                  <img
                    loading="lazy"
                    src={item.splashBg}
                    alt=""
                    class="splash-bg"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="marquee-section">
        <div className="marquee-outer">
          <div className="marquee-inner">
            <div className="m-list">
              <div className="m-list-item">
                <img
                  src="https://cdn.prod.website-files.com/66dabe4fe2fdbb07d092f829/67459fe8b4fa7723c4bb2180_passionfruit%20blob.svg"
                  loading="lazy"
                  alt=""
                  class="blob-icon"
                />
                <div>Cassis</div>
              </div>

              <div className="m-list-item">
                <img
                  src="https://cdn.prod.website-files.com/66dabe4fe2fdbb07d092f829/66dae1a6867fe0d41092ceae_grapefruit.svg"
                  loading="lazy"
                  alt=""
                  class="blob-icon"
                />
                <div>Orange & Mandarin</div>
              </div>

              <div className="m-list-item">
                <img
                  src="https://cdn.prod.website-files.com/66dabe4fe2fdbb07d092f829/66dae1d1e524e5ff6084f4d5_raspberry.svg"
                  loading="lazy"
                  alt=""
                  class="blob-icon"
                />
                <div>Raspberry & lime</div>
              </div>

              <div className="m-list-item">
                <img
                  src="https://cdn.prod.website-files.com/66dabe4fe2fdbb07d092f829/66dae1a6867fe0d41092ceae_grapefruit.svg"
                  loading="lazy"
                  alt=""
                  class="blob-icon"
                />
                <div>Grapefruit</div>
              </div>

              <div className="m-list-item">
                <img
                  src="https://cdn.prod.website-files.com/66dabe4fe2fdbb07d092f829/66dad9a700f8992aaa92e75c_lemon-shape.svg"
                  loading="lazy"
                  alt=""
                  class="blob-icon"
                />
                <div>lemon</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="colored-slides">
        <div className="sticky-slide">
          <div className="mask-slide">
            <div className="yellow-slide">
              <p className="product-text p1">
                <span className="slide-t"> The product</span>
                <span className="slide-t">
                  {" "}
                  Well then, what's not in the can?
                </span>
                <span className="slide-t"> No added sugars, no sweeteners</span>
                <span className="slide-t">
                  {" "}
                  No colourants, no preservatives, no concentrates.
                </span>
                <span className="slide-t"> Funny we even mention it, no?</span>
              </p>

              <img
                src="https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/6745c83eed8b5149d602d8b9_intro_img.avif"
                loading="lazy"
                alt=""
                className="lemon_img"
              />
              <div className="blue-slide"></div>
              <p className="product-text p2" style={{ color: "white" }}>
                <span className="slide-t2"> Mission </span>
                <span className="slide-t2">
                  {" "}
                  So this is the way you can stay hydrated
                </span>
                <span className="slide-t2">
                  {" "}
                  Healthily, all day, every day – feeling good
                </span>
                <span className="slide-t2">
                  {" "}
                  and doing good. At work, on the go,
                </span>
                <span className="slide-t2"> studying, or out for a walk.</span>
              </p>
              <img
                src="https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/67cec30a33cd24573c03a349_letsdrinkharmless.svg"
                loading="lazy"
                alt=""
                className="text-img"
              />
            </div>
          </div>
          {/* <div className="blue-slide">
          <p className="product-text">
            Mission <br></br>
            So this is the way you can stay hydrated<br></br>
            Healthily, all day, every day – feeling good<br></br>
            and doing good. At work, on the go,<br></br>
            studying, or out for a walk.<br></br>
          </p>
          <img
            src="https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/67cec30a33cd24573c03a349_letsdrinkharmless.svg"
            loading="lazy"
            alt=""
            class="lemon_img"
          />
        </div> */}
        </div>
      </section>

      <section className="info-section">
        <div className="container-large">
          <div className="info-grid">
            <div className="info_text-wrapper">
              <div className="info-label">MEET CHARLIE</div>
              <p className="info-p">
                Charlie cares for healthy people on a healthy planet. Inspiring
                others to do the same. Transparent about what we’re already
                doing and about what’s on the{" "}
                <span className="red-underline">bucket list</span>.
              </p>
              <img
                src="https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/6745ca6cec81ee7fac907794_drip.svg"
                alt=""
                class="info_drip"
              />
              <button className="order-btn blue">ORDER NOW</button>
            </div>
            <div className="drop-mask">
              <img
                src="https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/679a2ab09c807fe36a1ef2c8_Scherm%C2%ADafbeelding%202023-11-30%20om%2020.50.23.jpg"
                loading="lazy"
                data-w-id="5170ac57-1eb3-a4b6-8426-5b0c0b188ca0"
                sizes="(max-width: 940px) 100vw, 940px"
                alt=""
                srcset="https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/679a2ab09c807fe36a1ef2c8_Scherm­afbeelding%202023-11-30%20om%2020.50.23-p-500.jpg 500w, https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/679a2ab09c807fe36a1ef2c8_Scherm­afbeelding%202023-11-30%20om%2020.50.23-p-800.jpg 800w, https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/679a2ab09c807fe36a1ef2c8_Scherm%C2%ADafbeelding%202023-11-30%20om%2020.50.23.jpg 940w"
                class="meet-img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="steps-section">
        <div className="container-large" style={{ height: "100%" }}>
          <div className="steps-outer">
            <div className="step-mask">
              <div className="steps-component">
                <div class="steps_title-wrapper">
                  <div class="steps_label">WIIF the planet?</div>
                  <h2 class="steps_title">
                    Charlie wants her<br></br> to stay pretty as<br></br> well
                  </h2>
                  <a href="/store-finder" class="steps_button w-inline-block">
                    <div class="steps_button-circle">
                      <div>🚚</div>
                    </div>
                    <div>Nu proberen?&nbsp;Bestel online</div>
                    <img
                      src="https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/6745cf596776485bf1a9e3bb_cross.svg"
                      loading="lazy"
                      alt=""
                      class="steps_cross"
                    />
                  </a>
                </div>
                <div className="steps">
                  <div className="stepper-wrapper" ref={stepperRef}>
                    <div className="stepper-item">
                      <div class="steps-upper">
                        <div class="step_counter">01</div>
                        <img
                          src="https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/67cec10f089cd19966bf86d1_Recycle%20can.svg"
                          loading="lazy"
                          alt=""
                          class="steps_img"
                        />
                      </div>
                      <h3 class="step-item_title">Yes we can. Can!</h3>
                      <p class="step-item_text">
                        Cans, crafted from permanent aluminum, offer unique
                        recycling advantages. Unlike plastic bottles, cans can
                        be recycled endlessly, boasting the world’….
                      </p>
                    </div>

                    <div className="stepper-item">
                      <div class="steps-upper">
                        <div class="step_counter">02</div>
                        <img
                          src="https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/67cec10f089cd19966bf86d1_Recycle%20can.svg"
                          loading="lazy"
                          alt=""
                          class="steps_img"
                        />
                      </div>
                      <h3 class="step-item_title">Yes we can. Can!</h3>
                      <p class="step-item_text">
                        Cans, crafted from permanent aluminum, offer unique
                        recycling advantages. Unlike plastic bottles, cans can
                        be recycled endlessly, boasting the world’….
                      </p>
                    </div>

                    <div className="stepper-item">
                      <div class="steps-upper">
                        <div class="step_counter">03</div>
                        <img
                          src="https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/67cec10f089cd19966bf86d1_Recycle%20can.svg"
                          loading="lazy"
                          alt=""
                          class="steps_img"
                        />
                      </div>
                      <h3 class="step-item_title">Yes we can. Can!</h3>
                      <p class="step-item_text">
                        Cans, crafted from permanent aluminum, offer unique
                        recycling advantages. Unlike plastic bottles, cans can
                        be recycled endlessly, boasting the world’….
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="socials-section">
        <div className="container-large">
          <div className="products-header">
            <h1 className="h-socials">SOCIALS</h1>
            <div>
              <h4>INSTAGRAM</h4>
              <h4>TIKTOK</h4>
            </div>
          </div>
        </div>
        <div className="cd-slider-component">
          <div className="cd-slide">
            <img
            className="zoom-img"
              width={536}
              height={635}
              src="https://cdn.prod.website-files.com/66dabe4fe2fdbb07d092f829/679ba94976f6357e69a72f5c_Scherm_afbeelding%202025-01-30%20om%2017.29.22.avif"
            />
          </div>
          <div className="cd-slide">
            <img
               className="zoom-img"
              width={536}
              height={635}
              src="https://cdn.prod.website-files.com/66dabe4fe2fdbb07d092f829/679ba9214b0e009ffebd292d_Scherm_afbeelding%202025-01-30%20om%2017.29.10.avif"
            />
          </div>
          <div className="cd-slide">
            <img
               className="zoom-img"
              width={536}
              height={635}
              src="https://cdn.prod.website-files.com/66dabe4fe2fdbb07d092f829/679a2b9503d0d67e3ae58400_Scherm%C2%ADafbeelding%202023-11-30%20om%2020.50.23.avif"
            />
          </div>
          <div className="cd-slide">
            <img
               className="zoom-img"
              width={536}
              height={635}
              src="https://cdn.prod.website-files.com/66dabe4fe2fdbb07d092f829/679ba94976f6357e69a72f5c_Scherm_afbeelding%202025-01-30%20om%2017.29.22.avif"
            />
          </div>
        </div>
      </section>

      <section className="cd-footer">
        <div className="container-large">
          <div className="footer-pink">
            <div className="f-grid">
              <div className="fg-l">
                <p>
                <span  className="footer-para">Enjoy the pure, organic taste of Charlie’s</span>
  <span  className="footer-para">- no added sugars, no nonsense, just</span>
  <span  className="footer-para">refreshment in a fully recyclable can</span>
                </p>
                <img
                  src="https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/6745ca6cec81ee7fac907794_drip.svg"
                  loading="lazy"
                  alt=""
                  class="footer_drip"
                />
              </div>
              <img
                src="https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/67471d8adf80dd6be4682802_footer-img.svg"
                loading="eager"
                alt=""
                class="fg-r"
              ></img>
            </div>

            <div class="footer-marquee">
              <img
                src="https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/6745c83eed8b5149d602d8b9_intro_img.avif"
                loading="lazy"
                alt=""
                class="footer_marquee-img"
              />
              <div class="footer_marquee-text">Drink Charlie</div>
              <img
                src="https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/66db13f84899dbf5d5ab3de2_world.avif"
                loading="lazy"
                sizes="(max-width: 1233px) 100vw, 1233px"
                srcset="https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/66db13f84899dbf5d5ab3de2_world-p-500.avif 500w, https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/66db13f84899dbf5d5ab3de2_world.avif 1233w"
                alt=""
                class="footer_marquee-img"
              />
              <div class="footer_marquee-text">Follow us</div>
              <img
                src="https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/6745c83eed8b5149d602d8b9_intro_img.avif"
                loading="lazy"
                alt=""
                class="footer_marquee-img"
              />
              <div class="footer_marquee-text">Drink Charlie</div>
              <img
                src="https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/66db13f84899dbf5d5ab3de2_world.avif"
                loading="lazy"
                sizes="(max-width: 1233px) 100vw, 1233px"
                srcset="https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/66db13f84899dbf5d5ab3de2_world-p-500.avif 500w, https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/66db13f84899dbf5d5ab3de2_world.avif 1233w"
                alt=""
                class="footer_marquee-img"
              />
              <div class="footer_marquee-text">Follow us</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CharlieDrink;
