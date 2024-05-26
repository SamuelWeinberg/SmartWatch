import { useState } from "react";
import CurrentTime from "./CurrentTime";
import CurrentDate from "./CurrentDate";



export const Btn = () =>{

const [showTime, setShowTime] = useState(false);
const [showDate, setShowDate] = useState(false);

const handleClick = () => {
    setShowTime(true);
    setShowDate(false);
  };

const handleDate = () =>{
    setShowTime(false);
    setShowDate(true);
}

return (
  <div className="Btn">
    <header className="Btn-header">
      <div className='But-app'>
        
        <div>
          <button className="showTime" onClick={handleClick} >Show Time</button>
          {showTime && <CurrentTime/>}
        </div>
        <div>
          <button className="showDate" onClick={handleDate}>Show Date</button>
          {showDate && <CurrentDate/>}
        </div>
        <div>
        </div>
        <button>3</button>
        <button>4</button>
      </div>
    </header>
  </div>
);
}