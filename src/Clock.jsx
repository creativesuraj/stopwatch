import React, { useState, useEffect } from 'react';
import './Clock.css';
const Clock = () => {
  const [time, setTime] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [timeFormat, setTimeFormat] = useState('00:00:00.0');

  useEffect(()=>{
    let seconds = 0;
    let decSeconds = 0;
    let minutes = 0;
    let hours = 0;
    isStart && setTimeout(()=>{
      setTime(time+1);
      decSeconds = time % 10;
      seconds = Math.floor((time/10) % 60);
      minutes = Math.floor(time/600);
      hours = Math.floor(minutes/60);
      setTimeFormat(()=>(`${hours<10?'0'+hours:hours}:${minutes<10?'0'+minutes:minutes}:${seconds<10?'0'+seconds:seconds}.${decSeconds}`));
    }, 95);
  }, [isStart, time]);

  const handleOnClick = (type) => {
    if (type === 'reset') {
      setTimeFormat('00:00:00.0');
      setTime(0);
    } else {
      setIsStart(!isStart);
    }
  }


  return (
    <div className="clock-main">
      <h3 className="clock-start"
        onClick={()=>handleOnClick()}>
        {isStart ? 'STOP' : 'START'}
      </h3>
      <h3 className="clock-time">
        {timeFormat}
      </h3>
      <h3 className="clock-start"
        onClick={()=>handleOnClick('reset')}>
        {(!isStart && timeFormat !== '00:00:00.0') && 'RESET'}
      </h3>

    </div>
  )
}

export default Clock;