
import React from "react";
import { useNavigate } from "react-router-dom";
import HoverCard from "./HoverCard";

import ochiImage from "/src/assets/ochi.svg"
import simonsaysImage from "/src/assets/simonsays.svg"
import portfolioImage from "/src/assets/portfolioweb.svg"
import spotifyBanner from "/src/assets/spotifybanner.svg"
import swoleyFitImage from "/src/assets/Swoleyfit.svg"

function Featured() {
  const navigate = useNavigate();

  const handleCardClick = (title) => {
   if (title === "BIRTHVENUE") {
     navigate("/birthvenue");
   } else if (title === "SPOTIFY") {
     navigate("/spotify");
   } else if (title === "PORTFOLIO") {
     navigate("/portfoliio");
   } else if (title === "SIMONSAYS") {
     navigate("/simonsaysgame");
   }
    else if (title === "SWOLEYGYM") {
     navigate("/swoleygymapp");
   }
    else if (title === "OCHI") {
     navigate("/ochi");
   }

    // Add more conditions for other cards if needed
  }; 

  const buttonLinkSimonGame = [
    { text: "Case Study", link: "https://your-casestudy-link.com" },
    { text: "Github", link: "https://github.com/nainvinay2601/simongame.git" },
    { text: "Live", link: "https://simongamechlnge.netlify.app/" },
  ];
  const buttonLinkPortfolio = [
    { text: "Case Study", link: "https://your-casestudy-link.com" },
    { text: "Github", link: "https://github.com/nainvinay2601/simongame.git" },
    { text: "Live", link: "https://vinaynainportfolio.netlify.app/" },
  ];
  const buttonLinkSwoleyFit = [
    { text: "Case Study", link: "https://your-casestudy-link.com" },
    { text: "Github", link: "https://github.com/nainvinay2601/GymApp.git" },
    { text: "Live", link: "https://swoley-fit-gymapp.netlify.app" },
  ];
  const buttonLinkOchi = [
    { text: "Case Study", link: "https://your-casestudy-link.com" },
    { text: "Github", link: "https://github.com/nainvinay2601/OchiJS.git" },
    { text: "Live", link: "https://ochijs.netlify.app" },
  ];

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.06"
      className="w-full py-10 md:py-20 bg-zinc-100 text-zinc-900 rounded-tl-3xl rounded-tr-3xl"
      id="projects"
    >
      <div className="w-full px-10  md:px-20  mb-2 md:mb-10  border-b-[0.5px] pb-10 border-zinc-500">
        <h1 className="text-[7vw] font-founders-grotesk uppercase leading-[4vw]">
          Featured projects <span>&rarr;</span>
        </h1>
      </div>
      <div className="projectsContainer pb-20" id="frontendContainer">
        <div className="projectSection px-10 md:px-20 font-founders-grotesk text-[5vw] md:text-[3vw]  md:pt-10  pt-5   md:mb-5 mb-3 uppercase ">
          <p className="border-b-[1px] border-zinc-600">
            1. Front-end Projects
          </p>
        </div>
        <div className="flex flex-col md:flex-row  gap-10 md:gap-5 items-center justify-center  w-full  md:px-20 px-10  pt-5 pb-10  font-neue-montreal  ">
          <div className="projectAndButton  flex flex-col w-full ">
            <div className="projectName flex items-center gap-2 uppercase pb-3  ">
              <div className="circle w-[1vw] h-[1vw] bg-zinc-950 rounded-full "></div>
              <div className="name">Portfolio</div>
            </div>
            <HoverCard
              title="PORTFOLIO"
              imgSrc={portfolioImage}
              textAlignClass="left-full"
              translateClass="-translate-x-1/2"
              onClick={handleCardClick} // Pass the click handler
            />
            <div className="infoButton flex gap-3 pt-4 ">
              {buttonLinkPortfolio.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="buttonInfo border border-solid border-zinc-950 px-4 md:px-6 py-2  text-sm rounded-full flex justify-center items-center md:text-[16px] uppercase "
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>
          <div className="projectAndButton  flex flex-col w-full  ">
            <div className="projectName flex items-center gap-2 uppercase pb-3  ">
              <div className="circle w-[1vw] h-[1vw] bg-zinc-950 rounded-full "></div>
              <div className="name">SWOLEY-FIT-GYM-APP</div>
            </div>
            <HoverCard
              title="SWOLEYGYM"
              imgSrc={swoleyFitImage}
              textAlignClass="right-full"
              translateClass="translate-x-1/2"
              onClick={handleCardClick} // Pass the click handler
            />
            <div className="infoButton flex gap-3 pt-4 ">
              {buttonLinkSwoleyFit.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="buttonInfo border border-solid border-zinc-950 px-4 md:px-6 py-2  text-sm rounded-full flex justify-center items-center md:text-[16px] uppercase "
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex  flex-col md:flex-row    md:gap-5 gap-10 items-center justify-center  w-full  md:px-20 px-10 pt-5  font-neue-montreal  ">
          <div className="projectAndButton  flex flex-col w-full ">
            <div className="projectName flex items-center gap-2 uppercase pb-3  ">
              <div className="circle w-[1vw] h-[1vw] bg-zinc-950 rounded-full "></div>
              <div className="name">Simon says game</div>
            </div>
            <HoverCard
              title="SIMONSAYS"
              imgSrc={simonsaysImage}
              textAlignClass="left-full"
              translateClass="-translate-x-1/2"
              onClick={handleCardClick} // Pass the click handler
            />
            <div className="infoButton flex gap-3 pt-4 ">
              {buttonLinkSimonGame.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="buttonInfo border border-solid border-zinc-950 px-4 md:px-6 py-2  text-sm rounded-full flex justify-center items-center md:text-[16px] uppercase "
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>
          <div className="projectAndButton  flex flex-col w-full  ">
            <div className="projectName flex items-center gap-2 uppercase pb-3  ">
              <div className="circle w-[1vw] h-[1vw] bg-zinc-950 rounded-full "></div>
              <div className="name">OCHI</div>
            </div>
            <HoverCard
              title="OCHI"
              imgSrc={ochiImage}
              textAlignClass="right-full"
              translateClass="translate-x-1/2"
              onClick={handleCardClick} // Pass the click handler
            />
            <div className="infoButton flex gap-3 pt-4 ">
              {buttonLinkOchi.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="buttonInfo border border-solid border-zinc-950 px-4 md:px-6 py-2  text-sm rounded-full flex justify-center items-center md:text-[16px] uppercase "
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="projectsContainer  " id="designContainer">
        <div
          className="designSection md:px-20 px-10 font-founders-grotesk md:text-[3vw] text-[5vw] md:pt-5 md:mb-5  pt-3 mb-2 uppercase "
          id={"designContainer"}
        >
          <p className="border-b-[1px] border-zinc-600">2. UI/UX Projects</p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-5 items-center justify-center  w-full  pt-5 md:pb-20 pb-10 md:px-20 px-10 font-neue-montreal  ">
          <div className="projectAndButton  flex flex-col w-full ">
            <div className="projectName flex items-center gap-2 uppercase pb-3  ">
              <div className="circle w-[1vw] h-[1vw] bg-zinc-950 rounded-full "></div>
              <div className="name">Birthvenue</div>
            </div>
            <HoverCard
              title="BIRTHVENUE"
              imgSrc="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
              textAlignClass="left-full"
              translateClass="-translate-x-1/2"
              onClick={handleCardClick} // Pass the click handler
            />
            <div className="infoButton flex gap-3 pt-4 ">
              {["Case Study", "Prototype"].map((item, index) => (
                <div
                  key={index}
                  className="buttonInfo border border-solid border-zinc-950 px-4 md:px-6 py-2  text-sm rounded-full flex justify-center items-center md:text-[16px] uppercase "
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="projectAndButton  flex flex-col w-full  ">
            <div className="projectName flex items-center gap-2 uppercase pb-3  ">
              <div className="circle w-[1vw] h-[1vw] bg-zinc-950 rounded-full "></div>
              <div className="name">SPOTIFY</div>
            </div>
            <HoverCard
              title="SPOTIFY"
              imgSrc={spotifyBanner}
              textAlignClass="right-full"
              translateClass="translate-x-1/2"
              onClick={handleCardClick} // Pass the click handler
            />
            <div className="infoButton flex gap-3 pt-4 ">
              {["Case Study", "Prototype"].map((item, index) => (
                <div
                  key={index}
                  className="buttonInfo border border-solid border-zinc-950 px-4 md:px-6 py-2  text-sm rounded-full flex justify-center items-center md:text-[16px] uppercase "
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
