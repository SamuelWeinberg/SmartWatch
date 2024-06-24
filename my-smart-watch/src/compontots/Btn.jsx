export const Btn = ({ onModeChange }) => {
   
  return (
    <div className="Btn">
      <header className="Btn-header">
        <div className="But-app">
          <button className="showTime" onClick={() => onModeChange("time")}>
            Show Time
          </button>
          <button className="showDate" onClick={() => onModeChange("date")}>
            Show Date
          </button>
          <button onClick={() => onModeChange("timer")}>
            Show Timer
          </button>
          <button>4</button>
        </div>
        <div>
        
        </div>
      </header>
    </div>
  );
};
