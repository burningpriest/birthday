import logo from './logo.svg';
import './App.scss';
import { Birthday } from './birthday/birthday';
import React, { useEffect } from 'react';

function App() {
  const endDate = new Date('Oct 20, 2022, 2:05');
  const currentDate = new Date();
  const diff = endDate.getTime() - currentDate.getTime();
  const ds = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  console.log(ds, hours, minutes, seconds);
  const [[days, hrs, mins, secs], setTime] = React.useState([
    ds,
    hours,
    minutes,
    seconds,
  ]);
  const tick = () => {
    if (hrs == 0 && mins == 0 && secs == 0) {
      setTime([days - 1, 11, 59, 59]);
    } else if (mins == 0 && secs == 0) {
      setTime([days, hrs - 1, 59, 59]);
    } else if (secs == 0) {
      setTime([days, hrs, mins - 1, 59]);
    } else {
      setTime([days, hrs, mins, secs - 1]);
    }
  };
  let timeId = 0;
  useEffect(() => {
    timeId = setInterval(() => tick(), 1000);
    return () => clearInterval(timeId);
  });
  return (
    <div className='App'>
      {days < 0 ? (
        <>
        <Birthday/>
        </>
      ) : (
        <>
          <h1>Time remaining for my birthday.</h1>
          <div className='cover'>
            <div className='timeBox'>
              {days.toString().padStart(2, 0)}
              <div className='small'>Hours</div>
            </div>
            <div className='timeBox'>{hrs.toString().padStart(2, 0)}</div>
            <div className='timeBox'>{mins.toString().padStart(2, 0)}</div>
            <div className='timeBox'>{secs.toString().padStart(2, 0)}</div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
