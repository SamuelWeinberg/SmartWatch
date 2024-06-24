import React, { useState } from 'react';
import {Btn} from './Btn';
import {Screen} from './Screen';

 export const Watch = () => {
  const [mode, setMode] = useState();
   
const handleModeChange =(newMode)=> {
  setMode(newMode);
}

return (
  <div>
    <Btn onModeChange={handleModeChange} />
    <Screen mode={mode} />
  </div>
);
};


