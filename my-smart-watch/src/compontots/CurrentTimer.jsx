import React, { useState, useEffect } from 'react';

const Timer =()=> {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const formatTime = (timeInSeconds) => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;
        const milliseconds =  seconds * 1000;

        return `
        ${hours}:${minutes}:${seconds}:${milliseconds.toString().split(2)}
   
    `};

    return (
        <div>
            <p>{formatTime(seconds)}</p>
            <button onClick={handleStart}>התחל טיימר</button>
            <button onClick={handleStop}>עצור טיימר</button>
        </div>
    );
}

export default Timer;
