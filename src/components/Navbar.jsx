import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef();
  const logoRef = useRef();
  const navLinksRef = useRef([]);

  // Initialize the timeline using the useGSAP hook
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(logoRef.current, {
      y: -30,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power4.out",
    }).from(
      navLinksRef.current,
      {
        y: -30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      },
      "-=0.5"
    );
  });

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Projects", link: "#projects" }, 
    {
      name: "Resume",
      link: "/src/assets/resumeVinayNainFrontendDev.pdf",
      download: true,
    },
    { name: "Contact Me", link: "#contact" },
  ];

  return (
    <div
      ref={navRef}
      className="w-full backdrop-blur-sm fixed z-[10] flex justify-between items-center px-10 md:px-20 py-6 font-neue-montreal text-[#FBFFFE]"
    >
      <div
        className="logo font-founders-grotesk md:text-[1.9vw] text-[7vw] leading-[0.75] flex justify-between items-center tracking-none "
        ref={logoRef}
      >
        <h3>VN.</h3>
      </div>
      <div className="flex items-center md:hidden">
        <button onClick={handleMenuToggle}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <div
        className={`navItems h-screen md:h-fit flex-col md:flex-row md:flex md:justify-center md:items-center gap-5 absolute md:static top-16 left-0 w-full md:w-auto bg-[#0e100f] md:bg-transparent text-[16vw] md:text-[15px] uppercase md:capitalize font-founders-grotesk md:font-neue-montreal px-10 md:px-0 pt-3 md:pt-0 ${
          menuOpen ? "flex" : "hidden"
        }`}
      >
        {navItems.map((item, index) =>
          item.download ? (
            <a
              key={index}
              href={item.link}
              className={`navLink font-regular leading-none hover:text-[#fffce1] hover:underline ${
                index === 4 ? "md:ml-[203px]" : ""
              }`}
              download="resumeVinayNainFrontendDev.pdf"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ) : (
            <a
              key={index}
              href={item.link}
              className={`navLink font-regular leading-none hover:text-[#fffce1] hover:underline ${
                index === 4 ? "md:ml-[203px]" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          )
        )}
      </div>
    </div>
  );
}

export default Navbar;
