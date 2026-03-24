import React from "react";

const Fee = () => {
  const message = < img src="https://freesvg.org/img/pitr_red_menu_icon_set_2.png" height="50px" width="100px"/>;

  return (
    <>
      
      <div className="container" style={{ height: 'calc(100vh - 140px)', overflow: 'auto' }}>
      
      
      <div  class="image" style={{ marginLeft:"-25px" }}>
  <span style={{ marginLeft:"425px" , fontSize:"40px" , marginTop:"-30px" , fontWeight:"100px"}} ><b> COURSES BUZZ </b> </span>
      </div>
      
      
      
      
      
      <b> OUR OFFERED COURSES....</b>

      <br /><br /><br />

      {/* Blinking popup message with CSS animation */}
      <p
        style={{
          color: "red",
          fontWeight: "bold",
          fontSize: "1.2rem",
          animation: "blink 3s ease infinite",
          minHeight: "1.5em",
        }}
      >
        {message}
      </p>
      
      <br></br><br></br><br></br>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Course Level </th>
            <th scope="col">Course Name</th>
            <th scope="col"> Total Fees (INR)</th>
            <th scope="col">Duration</th>
          </tr>
        </thead>
        <tbody>
          {/* Your rows remain unchanged */}
          <tr>
            <th scope="row">Undergraduate</th>
            <td>B.Tech Computer Science </td>
            <td>10,00,000 </td>
            <td>4 Years</td>
          </tr>
          <tr>
            <th scope="row">Undergraduate</th>
            <td>B.Tech IT</td>
            <td>8,00,000</td>
            <td>4 Years</td>
          </tr>
          <tr>
            <th scope="row">Undergraduate</th>
            <td> BBA</td>
            <td>3,00,000 </td>
            <td>3 Years</td>
          </tr>
          <tr>
            <th scope="row">Undergraduate</th>
            <td>B.Com Hons</td>
            <td>50,000 </td>
            <td> 3 Years</td>
          </tr>
          <tr>
            <th scope="row">Undergraduate</th>
            <td>B.Sc Nursing</td>
            <td>2,00,000 </td>
            <td>4 Years</td>
          </tr>
          <tr>
            <th scope="row">Undergraduate</th>
            <td>B.Sc botany</td>
            <td>2,00,000</td>
            <td>4 Years</td>
          </tr>
          <tr>
            <th scope="row">Undergraduate</th>
            <td>B.sc food science</td>
            <td>300000</td>
            <td>4 Years</td>
          </tr>
          <tr>
            <th scope="row">Undergraduate</th>
            <td>B.sc Physics</td>
            <td>400000</td>
            <td>4 Years</td>
          </tr>
          <tr>
            <th scope="row">Postgraduate</th>
            <td>MBA</td>
            <td> 20,00,000 </td>
            <td>2 Years</td>
          </tr>
          <tr>
            <th scope="row">Postgraduate</th>
            <td>M.Sc Data Science</td>
            <td>3,00,000</td>
            <td>2 Years</td>
          </tr>
        </tbody>
      </table>

      <style>{`
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>

      <br /><br /><br /><br /><br />
      
      </div>
    </>
  );
};

export default Fee;




















// import React, { useState, useEffect } from "react";

// const Fee = () => {
//   const message = "Important: Fees must be paid before the start of the semester!";

//   const [displayedText, setDisplayedText] = useState("");
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     if (index <= message.length) {
//       const timeout = setTimeout(() => {
//         setDisplayedText(message.slice(0, index));
//         setIndex(index + 1);
//       }, 150); // typing speed
//       return () => clearTimeout(timeout);
//     } else {
//       // After full message shown, wait and then clear to restart blinking
//       const timeout = setTimeout(() => {
//         setDisplayedText("");
//         setIndex(0);
//       }, 2000); // wait 2 seconds before restarting
//       return () => clearTimeout(timeout);
//     }
//   }, [index, message]);

//   return (
//     <>
//       <br /><br />
//       <b> OUR OFFERED COURSES....</b>

//       <br /><br /><br />

//       {/* Blinking popup message */}
//       <p style={{ color: "red", fontWeight: "bold", fontSize: "1.2rem", minHeight: "1.5em" }}>
//         {displayedText}
//         <span className="cursor">|</span>
//       </p>

//       <table className="table">
//         <thead>
//           <tr>
//             <th scope="col">Course Level </th>
//             <th scope="col">Course Name</th>
//             <th scope="col"> Total Fees (INR)</th>
//             <th scope="col">Duration</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <th scope="row">Undergraduate</th>
//             <td>B.Tech Computer Science </td>
//             <td>10,00,000 </td>
//             <td>4 Years</td>
//           </tr>
//           <tr>
//             <th scope="row">Undergraduate</th>
//             <td>B.Tech IT</td>
//             <td>8,00,000</td>
//             <td>4 Years</td>
//           </tr>
//           <tr>
//             <th scope="row">Undergraduate</th>
//             <td> BBA</td>
//             <td>3,00,000 </td>
//             <td>3 Years</td>
//           </tr>
//           <tr>
//             <th scope="row">Undergraduate</th>
//             <td>B.Com Hons</td>
//             <td>50,000 </td>
//             <td> 3 Years</td>
//           </tr>
//           <tr>
//             <th scope="row">Undergraduate</th>
//             <td>B.Sc Nursing</td>
//             <td>2,00,000 </td>
//             <td>4 Years</td>
//           </tr>
//           <tr>
//             <th scope="row">Undergraduate</th>
//             <td>B.Sc botany</td>
//             <td>2,00,000</td>
//             <td>4 Years</td>
//           </tr>
//           <tr>
//             <th scope="row">Undergraduate</th>
//             <td>B.sc food science</td>
//             <td>300000</td>
//             <td>4 Years</td>
//           </tr>
//           <tr>
//             <th scope="row">Undergraduate</th>
//             <td>B.sc Physics</td>
//             <td>400000</td>
//             <td>4 Years</td>
//           </tr>
//           <tr>
//             <th scope="row">Postgraduate</th>
//             <td>MBA</td>
//             <td> 20,00,000 </td>
//             <td>2 Years</td>
//           </tr>
//           <tr>
//             <th scope="row">Postgraduate</th>
//             <td>M.Sc Data Science</td>
//             <td>3,00,000</td>
//             <td>2 Years</td>
//           </tr>
//         </tbody>
//       </table>

//       <style>{`
//         .cursor {
//           display: inline-block;
//           width: 10px;
//           animation: blink 1s step-start infinite;
//           color: red;
//           font-weight: bold;
//         }

//         @keyframes blink {
//           50% {
//             opacity: 0;
//           }
//         }
//       `}</style>

//       <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//     </>
//   );
// };

// export default Fee;


























// import React, { useState, useEffect } from "react";

// const Fee = () => {



    
    
//   return (
//     <>
//       <br /><br />
//       <b> OUR OFFERED COURSES....</b>

//       <br /><br /><br />
     
       
//       <table className="table">
//         <thead>
//           <tr>
//             <th scope="col">Course Level </th>
//             <th scope="col">Course Name</th>
//             <th scope="col"> Total Fees (INR)</th>
//             <th scope="col">Duration</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <th scope="row">Undergraduate</th>
//             <td>B.Tech Computer Science </td>
//             <td>10,00,000 </td>
//             <td>4 Years</td>
//           </tr>
//           <tr>
//             <th scope="row">Undergraduate</th>
//             <td>B.Tech IT</td>
//             <td>8,00,000</td>
//             <td>4 Years</td>
//           </tr>
//           <tr>
//             <th scope="row">Undergraduate</th>
//             <td> BBA</td>
//             <td>3,00,000 </td>
//             <td>3 Years</td>
//           </tr>
//           <tr>
//             <th scope="row">Undergraduate</th>
//             <td>B.Com Hons</td>
//             <td>50,000 </td>
//             <td> 3 Years</td>
//           </tr>
//           <tr>
//             <th scope="row">Undergraduate</th>
//             <td>B.Sc Nursing</td>
//             <td>2,00,000 </td>
//             <td>4 Years</td>
//           </tr>
//           <tr>
//             <th scope="row">Undergraduate</th>
//             <td>B.Sc botany</td>
//             <td>2,00,000</td>
//             <td>4 Years</td>
//           </tr>
//           <tr>
//             <th scope="row">Undergraduate</th>
//             <td>B.sc food science</td>
//             <td>300000</td>
//             <td>4 Years</td>
//           </tr>
//           <tr>
//             <th scope="row">Undergraduate</th>
//             <td>B.sc Physics</td>
//             <td>400000</td>
//             <td>4 Years</td>
//           </tr>
//           <tr>
//             <th scope="row">Postgraduate</th>
//             <td>MBA</td>
//             <td> 20,00,000 </td>
//             <td>2 Years</td>
//           </tr>
//           <tr>
//             <th scope="row">Postgraduate</th>
//             <td>M.Sc Data Science</td>
//             <td>3,00,000</td>
//             <td>2 Years</td>
//           </tr>
//         </tbody>
//       </table>

     

//       <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//     </>
//   );
// };

// export default Fee;
























































// import React, { useState } from "react";
// import { Link } from "react-router-dom";


// const Fee = () => {
  

//   const message = "Important: Fees must be paid before the start of the semester!";
//   const [displayedText, setDisplayedText] = useState("");
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     if (index <= message.length) {
//       const timeout = setTimeout(() => {
//         setDisplayedText(message.slice(0, index));
//         setIndex(index + 1);
//       }, 150); // typing speed
//       return () => clearTimeout(timeout);
//     }
//     else {
//       // After full message shown, wait and then clear to restart
//       const timeout = setTimeout(() => {
//         setDisplayedText("");
//         setIndex(0);
//       }, 2000); // wait 2 seconds before restarting
//       return () => clearTimeout(timeout);
//     }
//   }, [index, message]);
  
//   return(
//     <>
        

// <br></br><br></br>

// <b> OUR OFFERED COURSES....</b>

//   <p style={{ color: "red", fontWeight: "bold", fontSize: "1.2rem", minHeight: "1.5em" }}>
//         {displayedText}
//         <span className="cursor">|</span>
//       </p>


// <br></br><br></br><br></br>
// <p style={blinkStyle}>Important: Fees must be paid before the start of the semester!</p>

// <br></br>

// <table class="table">
//   <thead>
//     <tr>
//       <th scope="col">Course Level </th>
//       <th scope="col">Course Name</th>
//       <th scope="col"> Total Fees (INR)</th>
//       <th scope="col">Duration</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">Undergraduate</th>
//       <td>B.Tech Computer Science	</td>
//       <td>10,00,000 </td>
//       <td>4 Years</td>
//     </tr>
//     <tr>
//       <th scope="row">Undergraduate</th>
//       <td>B.Tech IT</td>
//       <td>8,00,000</td>
//       <td>4 Years</td>
//     </tr>
//     <tr>
//       <th scope="row">Undergraduate</th>
//       <td>	BBA</td>
//       <td>3,00,000 </td>
//       <td>3 Years</td>
//     </tr>
//     <tr>
//       <th scope="row">Undergraduate</th>
//       <td>B.Com Hons</td>
//       <td>50,000 </td>
//       <td>	3 Years</td>
//     </tr>
//     <tr>
//       <th scope="row">Undergraduate</th>
//       <td>B.Sc Nursing</td>
//       <td>2,00,000 </td>
//       <td>4 Years</td>
//     </tr>
//     <tr>
//       <th scope="row">Undergraduate</th>
//       <td>B.Sc botany</td>
//       <td>2,00,000</td>
//       <td>4 Years</td>
//     </tr> <tr>
//       <th scope="row">Undergraduate</th>
//       <td>B.sc food science</td>
//       <td>300000</td>
//       <td>4 Years</td>
//     </tr> <tr>
//       <th scope="row">Undergraduate</th>
//       <td>B.sc Physics</td>
//       <td>400000</td>
//       <td>4 Years</td>
//     </tr> <tr>
//       <th scope="row">Postgraduate</th>
//       <td>MBA</td>
//       <td>	20,00,000 </td>
//       <td>2 Years</td>
//     </tr> <tr>
//       <th scope="row">Postgraduate</th>
//       <td>M.Sc Data Science</td>
//       <td>3,00,000</td>
//       <td>2 Years</td>
//     </tr>
//   </tbody>
  
  
  
// </table>

// <style>{`
//         .cursor {
//           display: inline-block;
//           width: 10px;
//           animation: blink 1s step-start infinite;
//           color: red;
//           fontWeight: bold;
//         }

//         @keyframes blink {
//           50% {
//             opacity: 0;
//           }
//         }
//       `}</style>

// <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>v






// </>
    
    
    
    
    
    
//     );
    
// }








// export default Fee;
