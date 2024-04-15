import React from 'react';
import { useState, useEffect } from 'react'

export function CountdownTimer(props) {
	
	const [seconds, setSeconds] = useState(props.start);

	useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(prevSeconds => prevSeconds - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
    </div>
  );
};
