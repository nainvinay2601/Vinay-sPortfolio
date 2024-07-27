import React from "react";
import { motion } from "framer-motion";


function Marquee() {
  const marqueeItems = [
    "UI/UX Design",
    "Front-End Development",
    "React.js",
    "Tailwind CSS",
    "GSAP",
    "Framer Motion"
  ];

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.09"
      className="w-full py-[5vw] rounded-tl-3xl rounded-tr-3xl bg-[#f1b8f2] "
    >
      <div className="text border-t-[1px] border-b-[1px] border-zinc-300 flex whitespace-nowrap overflow-hidden items-center">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 50 }}
          className="flex"
        >
          {marqueeItems.map((item, index) => (
            <div
              key={index}
              className="mx-10 font-founders-grotesk uppercase text-[20vw] leading-none -mt-[1vh] text-black  "
            >
              {item}
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 50 }}
          className="flex"
        >
          {marqueeItems.map((item, index) => (
            <div
              key={index}
              className="mx-5 font-founders-grotesk uppercase text-[20vw] leading-none -mt-[1vh] text-black  "
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Marquee;
