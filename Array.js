
import React, { useState, useEffect } from 'react';

const Array = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  let hours = time.getHours().toString().padStart(2, '0'); 
  const  minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');
return (
    <div className='center-container'>
      <h1 
      style={{
        color: "GREEN",
        // background: "linear-gradient(to right, #2193b0, #e35454ff, #e162bbff)",
        padding: "20px 40px",
        borderRadius: "30px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
        border: "20px solid #333",
        fontFamily: "monospace",
        letterSpacing: "2px",
         background: "rgba(255,255,255,0.1)",
         animation: "pulse 2s infinite",
        fontSize: "2em",
        fontWeight: "bold",
      }}> {time.toLocaleTimeString()}
      </h1>
      <h6>Current Time: {hours}:{minutes}:{seconds}</h6>
      <h6 style={{ color: "#211f1fff", fontSize: "1.2rem", marginTop: "10px" }}>
  {time.toDateString()}
</h6>
    </div>
  );
};

export default Array;
