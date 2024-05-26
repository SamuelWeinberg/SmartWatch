import React from "react";
import CurrentTime from './CurrentTime';
import CurrentDate from './CurrentDate';

export const Screen = ({TimeShow, dataShow})=>{
  return (
    <div>
      {TimeShow ? <CurrentTime /> : <CurrentDate />}
    </div>
  );}