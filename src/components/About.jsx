import React from "react";

function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.1"
      className="w-full bg-[#F89A6B] md:p-20 p-10 pb-20 rounded-tl-3xl rounded-tr-3xl font-neue-montreal"
    >
      <h1 className=" text-black text-[5vw]  md:text-[4vw] leading-[6vw] md:leading-[4vw] font-medium  ">
        Hey, I’m <span className="underline">Vinay Nain!</span> I turn complex
        ideas into joyful digital experiences. With skills in{" "}
        <span className="underline">UX/UI Design</span> and front-end development,
        I craft engaging interfaces using{" "}
        <span className="underline">React</span>, Tailwind CSS, GSAP, and
        Framer Motion. Let’s create something amazing together!
      </h1>
      <div className="w-full hidden md:flex  pt-[5vh] mt-[7vh] lg:mt-[12vh] border-t-[1px] border-[#6a7445]">
        <div className="w-1/2">
          <h1 className="text-[4vw] -mt-[2vh] text-black ">My approach:</h1>
          <button className="px-6 py-5 mt-[1.5vh] rounded-full text-white bg-zinc-950 uppercase text-sm flex gap-8 items-center">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>

        <div className="w-1/2 h-[70vh] rounded-2xl bg-[#d3a790] "></div>
      </div>
    </div>
  );
}

export default About;