import React from 'react' 

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';



function Loading() { 
    useGSAP(()=>{
        gsap.to(".bar",{
            height:0,
            delay:1,
            duration:1,
            stagger:0.1

        })
    })
  return (
    <div>
      <div className=" w-full h-screen ">
        <div className="overlay fixed w-full h-screen z-[11] flex ">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </div>
  );
}

export default Loading