// //  import React from 'react'

// // const Array = () => {
// //     const details = [{
// //         name: "John",
// //         age: 30,
// //         field: "Engineer"
// //     },{
// //         name: "Jane",
// //         age: 25,
// //         field: "Designer"
// //     }]
// //     return (
// //     <div className='center-container'>
// //       {details.map((index, detail) => (
// //         <div key={index}>
// //           <h2>{detail.name}</h2>
// //           <p>Age: {detail.age}</p>
// //           <p>Field: {detail.field}</p>
// //             <hr style={{ width: "100%", border: "1px solid black", margin: "10px 0" }} />
// //         </div>
// //       ))}
// //     </div>
// //   )
// // }

// // export default Array
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
  // let ampm = hours >= 12 ? 'PM' : 'AM';

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

//   import React, { useState, useEffect } from 'react';

// const Array = () => {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => setTime(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   // Store time parts in an array
//   const timeParts = [
//     time.getHours().toString().padStart(2, '0'),
//     time.getMinutes().toString().padStart(2, '0'),
//     time.getSeconds().toString().padStart(2, '0')
//   ];

//   return (
//     <div className='center-container'>
//       <h1
//         style={{
//           color: "orange",
//           background: "linear-gradient(to right, #2193b0, #e35454ff, #e162bbff)",
//           padding: "20px 40px",
//           borderRadius: "12px",
//           boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
//           fontFamily: "monospace",
//           letterSpacing: "2px",
//           fontStyle: "italic",
//         }}
//       >
//         {timeParts.map((part, idx) =>
//           idx < timeParts.length - 1 ? `${part}:` : part
//         )}
//       </h1>
//     </div>
//   );
// };

// export default Array;