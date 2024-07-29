import React from "react";

function BirthVenue() {
  return (
    <div className="flex flex-col     bg-[#0e100f] text-[#ffffff] font-neue-montreal">
      <div
        className="mainBackground flex flex-col md:flex-row
       w-full pt-20 px-10 md:px-20 md:gap-10  text-[#ffffff]   "
      >
        <div className="keyDescription w-full md:w-1/2  h-screen flex flex-col    md:justify-between ">
          <div className="heading">
            <h1 className="text-[5vw] uppercase font-founders-grotesk text-[#fffce1] leading-none    ">
              BirthVenue
            </h1>
          </div>

          <div className="summary pb-5 ">
            <p className="text-[20px]   ">
              Designed a web3 social media app to improve user onboarding and
              provide customizable social media experiences, with monetization
              options for users as well.
            </p>
          </div>

          <div className="achievments mt-0 ">
            <div className="text-[5vw]   font-founders-grotesk font-semibold  uppercase border-b-[1px] border-zinc-500  inline-block mb-6 text-[#fffce1]">
              <p>Key Achievements</p>
            </div>

            {[
              "Improved user onboarding",
              "Offered customizable content",
              "ad preferences",
              "enhanced data privacy settings",
            ].map((item, index) => (
              <div
                key={index}
                className="text-[18px] pb-2   font-neue-montreal flex items-center gap-3 capitalize"
              >
                <p className="w-[1vw] h-[1vw] rounded-full bg-zinc-300"></p>
                {item}
              </div>
            ))}
          </div>

          <div className="buttonLinks flex gap-5">
            {["Prototype", "Full case study"].map((item, index) => (
              <div
                key={index}
                className="links flex items-center justify-center gap-3 mt-5 buttonInfo border border-solid border-zinc-200 rounded-full px-4 py-1 w-fit group bg-[#fffce1] text-[#000] font-medium  uppercase   "
              >
                <p>{item}</p>

                <div className="arrow text-[25px] transform transition-transform duration-300 group-hover:rotate-[-45deg]">
                  <span>&rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="keyMockup w-full md:w-1/2 h-screen rounded-xl overflow-hidden ">
          <img
            className="w-full h-full object-cover"
            src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
            alt=""
          />
        </div>
      </div>
      <div className="processHighlight  w-full  px-10 py-20 md:p-20  bg-[#0e100f]   ">
        <div className="headings border-b-[1px] border-zinc-600 pb-2 ">
          <div className="semiHeading text-[16px] uppercase text-zinc-500  ">
            Process Highlights
          </div>
          <div className="headingMain text-[4vw] md:text-[2vw]  ">
            Design challenge and responsibilities overview
          </div>
        </div>
        <div className="challengeAndOppurtunity border-b-[1px] border-zinc-600  flex  gap-10   py-8">
          <div className="challenge">
            <div className="headingChallenge text-[18px] font-semibold  ">
              Challenge
            </div>
            <div className="challengeInfo text-[18px] text-zinc-500  ">
              Design an app connecting digital devices with real-life
              experiences and social interactions.
            </div>
          </div>
          <div className="oppurtunity">
            <div className="headingOppurtunity text-[18px] font-semibold ">
              Opportunity
            </div>
            <div className="oppurtunityInfo text-[18px] text-zinc-500">
              Create a unique app, linking multiple brands to enhance user
              engagement and achieve business goals.
            </div>
          </div>
        </div>
        <div className="lastInfo flex flex-wrap justify-between py-8 ">
          <div className="timeLine w-1/2 md:w-1/4 ">
            <div className="timelineHeading text-[18px] font-semibold">
              Timeline
            </div>
            <div className="timelineInfo  text-[18px] text-zinc-500  ">
              Nov2022-June-2023
            </div>
          </div>
          <div className="discipline w-1/2 md:w-1/4">
            <div className="disciplineHeading  text-[18px] font-semibold ">
              Discipline
            </div>
            <div className="disciplineInfo text-[18px] text-zinc-500 ">
              <h3>User Experience Design</h3>
              <h3>User Interface Design</h3>
            </div>
          </div>
          <div className="responsibilities w-1/2 md:w-1/4  md:mt-0  mt-5">
            <div className="responsibilitiesHeading  text-[18px] font-semibold ">
              Responsibilities
            </div>
            <div className="responsibilitiesMenu text-[18px] text-zinc-500">
              <p>UX Research</p>
              <p>Sketching</p>
              <p>UX/UI Mobile Design</p>
              <p>Web Data Design</p>
              <p>Prototyping</p>
            </div>
          </div>
          <div className="tools w-1/2 mt-5 md:w-1/4  md:mt-0 ">
            <div className="toolsHeading text-[18px] font-semibold">Tools</div>
            <div className="toolsMenu text-[18px] text-zinc-500">
              <p>Figma</p>
              <p>VSCode</p>
            </div>
          </div>
        </div>
        <div className="links mt-5 flex items-center justify-center gap-3 buttonInfo border border-solid border-zinc-200 rounded-full px-4 py-2 w-fit group bg-[#fffce1] text-[#000] font-medium ">
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

      <div className="backgroundAndProcess  pt-20   w-full px-20  bg-[#0e100f]  ">
        <div className="backGroundDeets">
          <div className="backgroundAndVision border-b-[1px] border-zinc-600 pb-4 ">
            <div className=" subHead  text-[14px] text-zinc-500 uppercase">
              Background
            </div>
            <div className="ourVision  text-[24px] font-semibold">
              Our Vision
            </div>
          </div>

          <div className="backgroundInfo py-8">
            <p className="text-zinc-500 text-[20px] ">
              To provide some background on our vision, we believe that
              <span className="text-white">
                {" "}
                stores are evolving into social clubs.{" "}
              </span>{" "}
              Through our app
              <span className="text-white">Visavis </span>, we aim to facilitate
              a future where brands can accomplish several key objectives. These
              include acquiring{" "}
              <span className="text-white">new customers,</span> fostering
              engagement through{" "}
              <span className="text-white">
                real-life events and experiences
              </span>
              , incentivizing valuable actions with <span> points</span> ,
              conducting <span className="text-white">surveys</span>and polls,
              and cultivating{" "}
              <span className="text-white">genuine relationships </span>
              within their store communities.
            </p>
          </div>
        </div>

        <div className="theProcessDeets my-4 ">
          <div className="headingProcess  border-b-[1px] border-zinc-600 py-4 pt-8 ">
            <p className="text-[24px] font-semibold">The Process</p>
          </div>

          <div className="process flex ">
            <div className="processDiv">
              <div className="circleAndText w-[5vw] h-[5vw] border border-solid border-whiite rounded-full flex items-center justify-center ">
                <p>1</p>
              </div>
              <div className="processHead">Research</div>
              <div className="processSummary">
                <p>Identify Problem</p>
                <p>Desk Research</p>
                <p>Competitor Analysis</p>
                <p>User Surveys</p>
              </div>
            </div>
            <div className="processDiv">
              <div className="circleAndText   w-[5vw] h-[5vw] border border-solid border-whiite rounded-full flex items-center justify-center ">
                <p>2</p>
              </div>
              <div className="processHead">Synthesis</div>
              <div className="processSummary">
                <p>Persona</p>
                <p>User Journey</p>
              </div>
            </div>
            <div className="processDiv">
              <div className="circleAndText w-[5vw] h-[5vw] border border-solid border-whiite rounded-full flex items-center justify-center ">
                <p>3</p>
              </div>
              <div className="processHead">
                <p>Ideation</p>
              </div>
              <div className="processSummary">
                <p>Developing a solution</p>
                <p>Moodboard</p>
                <p>Low-Fidelity</p>
                <p>Mid-Fidelity</p>
                <p>High-Fidelity</p>
                <p>Major Improvements</p>
              </div>
            </div>
            <div className="processDiv">
              <div className="circleAndText w-[5vw] h-[5vw] border border-solid border-whiite rounded-full flex items-center justify-center ">
                <p>4</p>
              </div>
              <div className="processHead"></div>
              <div className="processSummary"></div>
            </div>
            <div className="processDiv">
              <div className="circleAndText w-[5vw] h-[5vw] border border-solid border-whiite rounded-full flex items-center justify-center ">
                <p>5</p>
              </div>
              <div className="processHead"></div>
              <div className="processSummary"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BirthVenue;
