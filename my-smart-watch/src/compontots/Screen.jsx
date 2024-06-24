import React from "react";
import CurrentTime from './CurrentTime';
import CurrentDate from './CurrentDate';
import CurrentTimer from "./CurrentTimer";


export const Screen = ({mode})=>{

  if (mode === "time"){
    return <CurrentTime/>
  }
   
  if(mode === "date"){
    return <CurrentDate/>
  }

  if(mode === "timer"){
    return <CurrentTimer/>
  }
  }

 

