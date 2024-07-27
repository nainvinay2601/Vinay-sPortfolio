import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function Hero() {
  const semiHeadRef = useRef([]);
  const headingRef = useRef([]);
  const buttonRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(headingRef.current, {
      y: 60,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      stagger: 0.5,
      ease: "power2.out",
    })
      .from(
        semiHeadRef.current,
        {
          x: -30,
          opacity: 0,
          duration: 1,
          stagger: 0.5,
          ease: "power2.out",
        },
        "-=0.5" // Overlap with the previous animation
      )
      .from(
        buttonRef.current,
        {
          y: -30,
          opacity: 0,
          duration: 1,
          stagger: 0.5,
          ease: "power2.out",
        },
         // Overlap with the previous animation
      );
  });

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.4"
      className="w-full h-screen flex flex-col pt-1 bg-[#0e100f] text-[#fffce1]"
    >
      <div className="textAndButtonStructure flex flex-col justify-between">
        <div className="textStructure  mt-40 px-10 md:px-20 ">
          <div
            ref={(el) => (semiHeadRef.current[0] = el)}
            className="skillButton flex gap-2 text-xs pb-2 md:text-[16px] "
          >
           
              <button className="border uppercase border-solid border-zinc-400   px-2 py-1   font-neue-montreal rounded-full">
                Frontend Developer
              </button>
            

            <button
              ref={(el) => (semiHeadRef.current[1] = el)}
              className="border border-solid border-zinc-400 px-2 py-1   font-neue-montreal rounded-full uppercase"
            >
              UI/UX Designer
            </button>
          </div>
          {[
            "Crafting UI/UX experience",
            "with design finesse",
            "and React power",
          ].map((item, index) => (
            <div key={index} className="masker">
              <h1
                ref={(el) => (headingRef.current[index] = el)} // Store each element in the array
                className="uppercase text-[9vw]  leading-[.75] font-founders-grotesk   "
              >
                {item.split(" ").map((word, wordIndex) => {
                  if (word.toLowerCase() === "design") {
                    return (
                      <span key={wordIndex} className="gradient-text">
                        {word}{" "}
                      </span>
                    );
                  } else {
                    return <span key={wordIndex}>{word} </span>;
                  }
                })}
              </h1>
            </div>
          ))}
        </div>
        <div
          ref={buttonRef}
          className="buttonStructure flex flex-col md:flex-row  md:items-center md:justify-between    mt-20 md:mt-8 p-10  border-t-[1.5px] border-zinc-800 md:py-2  text-sm md:text-[16px]  px-10  md:px-20  "
        >
          <div className="workButtons flex  flex-col  md:flex-row  gap-3">
            <a href="#frontendContainer">
              <div className="viewWork px-3 py-1 uppercase border border-solid border-zinc-400 rounded-full darkScreenButton w-fit   ">
                Frontend Projects
              </div>
            </a>
            <a href="#designContainer">
              <div className="viewWork px-3 py-1 uppercase border border-solid border-zinc-400 rounded-full darkScreenButton w-fit">
                UI/UX Projects
              </div>
            </a>
          </div>

          <div className="startProject px-3 py-1 my-7  uppercase border border-solid border-zinc-400 rounded-full darkScreenButton w-fit">
            Start a project
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
