import React from 'react'

function Swoleyfit() {
  return (
    <div className="flex flex-col     bg-[#020617] text-[#ffffff] font-neue-montreal">
      <div className="mainBackground flex  w-full pt-20 px-20 gap-10 text-[#ffffff]   ">
        <div className="keyDescription w-1/2  h-screen flex flex-col    justify-between ">
          <div className="heading">
            <h1 className="text-[5vw] uppercase font-founders-grotesk text-[#fffce1] leading-none ">
              Swoley Fit Gym App
            </h1>
          </div>

          <div className="summary pb-5 ">
            <p className="text-[20px]   ">
              woley Fit is a web application designed to help users manage their
              fitness routines and track progress. It allows users to create
              personalized workout plans and log their exercise data.
            </p>
          </div>

          <div className="achievments mt-6 ">
            <div className="text-[3vw]  font-founders-grotesk font-semibold  uppercase border-b-[1px] border-zinc-500  inline-block mb-6 text-[#fffce1]">
              <p>Key Achievements</p>
            </div>

            {[
              "Created a user-friendly interface for customizing workout plans.",
              "Developed a responsive design for seamless use on all devices",
            ].map((item, index) => (
              <div
                key={index}
                className="text-[18px] pb-2  font-neue-montreal flex items-center gap-3 capitalize"
              >
                <p className="w-[1vw] h-[1vw] rounded-full bg-zinc-300"></p>
                {item}
              </div>
            ))}
          </div>

          <a
            href="https://swoley-fit-gymapp.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="links flex items-center justify-center gap-3 mt-5 buttonInfo border border-solid border-zinc-200 rounded-full px-4 py-1 w-fit group bg-[#fffce1] text-[#000] font-medium">
              <div className="text text-[16px] uppercase">
                <p>Live Link</p>
              </div>
              <div className="arrow text-[25px] transform transition-transform duration-300 group-hover:rotate-[-45deg]">
                <span>&rarr;</span>
              </div>
            </div>
          </a>
        </div>
        <div className="keyMockup w-1/2 h-screen rounded-xl overflow-hidden ">
          <img
            className="w-full h-full object-cover  "
            src="/src/assets/Swoleyfit.svg"
            alt=""
          />
        </div>
      </div>
      <div className="processHighlight  w-full  p-20  bg-[#020617]   ">
        <div className="headings border-b-[1px] border-zinc-600 pb-2 ">
          <div className="semiHeading text-[16px] uppercase text-zinc-500  ">
            Process Highlights
          </div>
          <div className="headingMain text-[2vw]">
            Development challenge and responsibilities overview
          </div>
        </div>
        <div className="challengeAndOppurtunity border-b-[1px] border-zinc-600  flex  gap-10   py-8">
          <div className="challenge">
            <div className="headingChallenge text-[18px] font-semibold  ">
              Challenge
            </div>
            <div className="challengeInfo text-[18px] text-zinc-500  ">
              Creating an intuitive interface for diverse users. Ensuring the
              application is responsive and user-friendly.
            </div>
          </div>
          <div className="oppurtunity">
            <div className="headingOppurtunity text-[18px] font-semibold ">
              Opportunity
            </div>
            <div className="oppurtunityInfo text-[18px] text-zinc-500">
              Adding features for personalized workout recommendations.
              Introducing social features like community challenges.
            </div>
          </div>
        </div>
        <div className="lastInfo flex justify-between py-8 ">
          <div className="timeLine">
            <div className="timelineHeading text-[18px] font-semibold">
              Timeline
            </div>
            <div className="timelineInfo  text-[18px] text-zinc-500  ">
              <p>Understanding UI: 3 Days</p>
              <p>Development and Implementation: 1 weeks</p>
              <p>Testing and Optimization:1 week</p>
            </div>
          </div>
          <div className="discipline">
            <div className="disciplineHeading  text-[18px] font-semibold ">
              Discipline
            </div>
            <div className="disciplineInfo text-[18px] text-zinc-500 ">
              <p>UI/UX</p>
              <p>React Development </p>
              <p>Testing</p>
            </div>
          </div>
          <div className="responsibilities">
            <div className="responsibilitiesHeading  text-[18px] font-semibold ">
              Responsibilities
            </div>
            <div className="responsibilitiesMenu text-[18px] text-zinc-500">
              <p>Understanding the existing UI.</p>
              <p>Frontend development using React</p>
              <p>Testing and optimizing the application.</p>
            </div>
          </div>
          <div className="tools">
            <div className="toolsHeading text-[18px] font-semibold">
              Tools&Tech
            </div>
            <div className="toolsMenu text-[18px] text-zinc-500">
              <p>ReactJS</p>
              <p>Tailwind CSS</p>
              <p>Figma</p>
              <p>VSCode</p>
            </div>
          </div>
        </div>
        <div className="links flex items-center justify-center gap-3 buttonInfo border border-solid border-zinc-200 rounded-full px-4 py-2 w-fit group bg-[#fffce1] text-[#000] font-medium ">
          <div className="text text-[18px] uppercase">
            <p>Full Case Study</p>
          </div>
          <div className="arrow text-[25px] transform transition-transform duration-300 group-hover:rotate-[-45deg]">
            <span>&rarr;</span>
          </div>
        </div>
        <div className="sorry py-10  ">
          <p className="text-[3vw] text-zinc-500 leading-[1.2] ">
            I are currently in the process of developing the full case study. In
            the meantime, you can explore the preliminary details on{" "}
            <span className="text-zinc-100">Notion </span>
            by clicking the button above.{" "}
            <span className="text-white">
              Thank you for your understanding.{" "}
            </span>
          </p>
        </div>
      </div>

      
    </div>
  );
}

export default Swoleyfit