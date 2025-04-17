import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

  useEffect(() => {
    const items = stepperRef.current?.querySelectorAll(".stepper-item") || [];

    items.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 1, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top top",
            toggleActions: "play none none reverse",
            markers: true, // Enable to debug scroll points
          },
        }
      );
    });
  }, []);

  const wrapperRef = useRef(null);

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

  return (
    <div ref={wrapperRef} bubbles="" className="charlie-drink">
      <div className="charlie-drink-header">
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
            src="https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/67cea500e52540fc4346f61b_Charlie%20organics.svg"
            alt="cd logo"
            width={160}
            height={68}
          ></img>
          <button className="order-btn">ORDER</button>
        </div>
        <div className="h-bottom">
          <a href="">PRODUCTS</a>
          <a href="">OUR STORY</a>
          <a href="">FAQ</a>
          <a href="">CONTACT</a>
          <a href="">ORDER</a>
        </div>
      </div>
      <section className="cd-hero">
        <div className="cd-hero-wrapper">
          <img
            class="hero-bg"
            src="https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/66dadc75a87cf9914f4539d7_Mask%20Group%20119.avif"
            alt=""
            sizes="(max-width: 4422px) 100vw, 4422px"
            data-w-id="4b2aa2c9-4cc5-ed73-db87-c615f79b8c62"
            loading="lazy"
            srcset="https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/66dadc75a87cf9914f4539d7_Mask%20Group%20119-p-500.png 500w, https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/66dadc75a87cf9914f4539d7_Mask%20Group%20119-p-800.png 800w, https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/66dadc75a87cf9914f4539d7_Mask%20Group%20119-p-1080.png 1080w, https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/66dadc75a87cf9914f4539d7_Mask%20Group%20119-p-1600.png 1600w, https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/66dadc75a87cf9914f4539d7_Mask%20Group%20119-p-2000.png 2000w, https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/66dadc75a87cf9914f4539d7_Mask%20Group%20119.avif 4422w"
          />
          <div className="tap">
            <span>TAP</span>
          </div>
          <div className="hero-center">hello world

          {/* <img src={} width={200} height={200} alt></img> */}
          </div>
          <video
            className="cd-hero-video"
            autoPlay
            loop
            muted
            playsInline
            width={660}
            height={660}
          >
            <source
              src="https://pub-fb9062f1fe2444cd88ae29118656462c.r2.dev/Charlies_casis_%5B001-128%5D-vp9-chrome.webm"
              type="video/mp4"
            ></source>
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
                key={index}
                style={{ background: item.bgColor }}
              >
                <img src={item.canImg} alt="" className="can-img" />
                <div class="product_card-text">
                  <div class="product_card-heading">{item.name}</div>
                  <div class="text-color-white">0 sugar</div>
                </div>
                <div className="product_card-bg">
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
        <div className="yellow-slide">
          <p className="product-text">
            The product <br></br>
            Well then, what's not in the can?<br></br>
            No added sugars, no sweeteners<br></br>
            No colourants, no preservatives, no concentrates.<br></br>
            Funny we even mention it, no?
          </p>
          <img
            src="https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/6745c83eed8b5149d602d8b9_intro_img.avif"
            loading="lazy"
            alt=""
            class="lemon_img"
          />
        </div>
        <div className="blue-slide">
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
            <h1>SOCIALS</h1>
            <div>
              <h4>INSTAGRAM</h4>
              <h4>TIKTOK</h4>
            </div>
          </div>
        </div>
        <div className="cd-slider-component">
          <div className="cd-slide">
            <img
              width={536}
              height={635}
              src="https://cdn.prod.website-files.com/66dabe4fe2fdbb07d092f829/679ba94976f6357e69a72f5c_Scherm_afbeelding%202025-01-30%20om%2017.29.22.avif"
            />
          </div>
          <div className="cd-slide">
            <img
              width={536}
              height={635}
              src="https://cdn.prod.website-files.com/66dabe4fe2fdbb07d092f829/679ba9214b0e009ffebd292d_Scherm_afbeelding%202025-01-30%20om%2017.29.10.avif"
            />
          </div>
          <div className="cd-slide">
            <img
              width={536}
              height={635}
              src="https://cdn.prod.website-files.com/66dabe4fe2fdbb07d092f829/679a2b9503d0d67e3ae58400_Scherm%C2%ADafbeelding%202023-11-30%20om%2020.50.23.avif"
            />
          </div>
          <div className="cd-slide">
            <img
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
                  Enjoy the pure, organic taste of Charlie’s – no added sugars,
                  no nonsense, just refreshment in a fully recyclable can
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
