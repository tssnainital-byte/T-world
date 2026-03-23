import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar.jsx";
import Dashboard from "./Dashboard.jsx"; // Sidebar component
import SignUp from "./SignUp.jsx";
import Students from "./Students.jsx";
import Rules from "./Rules.jsx";
import Fee from "./Fee.jsx";
import   "./styles.css";
import PlayingDetails from "./PlayingDetails.jsx"; 
import Board from "./Board.jsx";
import Class from "./Class.jsx";


function Cart() {
  return <h2>Cart Page</h2>;
}

function Mess() {
  
   const [messFee] = React.useState(15000);
  const [guestMealCount, setGuestMealCount] = React.useState(0);
  const guestMealCost = 100;

  const totalCost = messFee + guestMealCount * guestMealCost;
  
   
  
  
  
  
  
  
  return  <div class="container" style={{height: 'calc(100vh - 140px)', overflow: 'auto'}}>
    <h2> <b>Mess Facility </b></h2>
  
  <br></br><br></br>
  
   <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Hostel_Mess_small.jpg" class="d-block w-100" height="430px" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://content.jdmagicbox.com/comp/def_content/buffet-restaurants/buffet-restaurants3-buffet-restaurants-3-xlink.jpg" class="d-block w-100" height="430px" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://i.ytimg.com/vi/M_BRmqP67_I/maxresdefault.jpg" class="d-block w-100" height="430px" alt="..."/>
    </div>
     <div class="carousel-item">
      <img src="https://images.shiksha.com/mediadata/images/1531467787phpPCTRIq.jpeg" class="d-block w-100" height="430px" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  
   <br></br><br></br>
  
  
   <p> Hostel mess services provide mandatory, nutritious, and hygienic daily meals (breakfast, lunch, snacks, dinner) typically on a semester-contract basis, acting as a key component of student residential life. Rules include non-transferable mess cards, set dining hours, penalties for food waste or property damage, and restricted guest access.</p> 
<br></br> <br></br>
  
  <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <b>Mess Information</b>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        
        
        <b>Information (XYZ University):</b>
<br></br><br></br>

<ul>
  
<li>  Mess Fee: 15,000 per semester (mandatory for all residents).</li>  <br></br>
<li>  Timing: Breakfast (7:30 AM-9:00 AM), Lunch (12:30 PM-2:00 PM), Tea (4:30 PM-5:30 PM), Dinner (8:00 PM-9:30 PM).</li>  <br></br>
<li>  Rules: Misbehavior with staff or damaging dining furniture will result in a fine of $$$1000 or suspension.</li>  <br></br>
<li>  Guest Policy: Guests require pre-booked coupons at $$$100 per meal.</li>   <br></br>
<li>  Dining: Separate, secured dining halls for boys and girls with strict, clean, and healthy dining environments.</li>

</ul>
        
        
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <b>Rules & Regulations</b>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong><b>Common Mess Regulations:</b></strong> 
        <br></br><br></br>
<ul>
<li> Mandatory Membership: All hostel residents must enroll in the mess.</li>  <br></br>
<li> No Food Removal: Taking mess cutlery, utensils, or food outside the dining area is strictly prohibited. </li>   <br></br>
<li> Hygiene & Conduct: Students must maintain cleanliness, and any misbehavior with staff may lead to expulsion.</li>  <br></br>
<li> Speial Diet: Specific arrangements may be made for sick students upon notification to the warden.</li>
</ul>
        
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <b> Usual Common Requirements </b>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong> Mandatory Mess Requirements for Students </strong> 
        
        
Tiffin Boxes: For taking food to classrooms if lunch is missed.
Water Bottles: For refilling at dispensers.
Personal Cutlery: Spoons/forks for eating in the room. 
        
        
      </div>
    </div>
  </div>
</div>
  
  
  
  
  
  
  
  
  
  
  




<br></br>
<br></br>
 



<b>[[ WEEKLY MESS MENU ]] </b> 

<br></br><br></br><br></br><br></br><br></br>





 <table class="table table-bordered border-primary">
  
               <thead>
          <tr> 
                 
          <th>DAY</th>
					<th>Breakfast</th>
					<th>Lunch</th>
					<th>Dinner</th>
				
					</tr> 
	              </thead>  				
			      <tbody>
			        <tr>
					   <td>MONDAY</td>
					   <td>Stuffed Paratha+Curd, Sprouted Moong, Tea/Coffee</td>
					   <td>Dal Tadka, Seasonal Veg, Rice, Roti, Salad</td>
					   <td>Rajma,Rice,Aloo-Jeera,Roti, Salad</td>
					  
					</tr>
					<tr>
					   <td>TUESDAY</td>
					   <td>Poha with Jalebi, Boiled Chana, Tea/Coffee</td>
					   <td>Kadhi Pakora, Mix Veg, Rice, Roti, Papad</td>
					   <td>Paneer Butter Masala, Dal Fry, Roti, Rice, Sweet (Gulab Jamun)</td>
					  
					  </tr>
					<tr>
					   <td>WENESDAY</td>
					   <td>Idli/Vada with Sambar & Chutney, Sprouts</td>
					   <td>Dal Makhani, Aloo Bhindi, Rice, Roti, Curd</td>
					   <td>Chole Masala, Veg Pulao, Roti, Papad, Salad</td>
					  
					</tr>
					<tr>
					   <td>THURSDAY</td>
					   <td>Upma/Vermicelli, Boiled Egg/Banana, Tea/Coffee</td>
					   <td>Arhar Dal, Baingan Bharta, Rice, Roti, Salad</td>
					   <td>Special Paneer, Dal Fry, Roti, Rice, Salad</td>
					   
					</tr>
					<tr>
					   <td>FRIDAY</td>
					   <td>	Aloo Puri/Chhole Bhature, Tea/Coffee</td>
					   <td>Mixed Dal, Seasonal Veg, Rice, Roti, Raita</td>
					   <td>Veg Manchurian, Fried Rice, Roti, Dal</td>
					   
					</tr>
					<tr>
					    <td>SATURDAY</td>
					    <td>Masala Dosa + Sambhar, Sprouts, Tea/Coffee</td>
					    <td>Dal Fry, Aloo Matar, Rice, Roti, Papad	</td>
					    <td>Matar Paneer, Rice, Roti, Salad</td>
					    
				    </tr>
					<tr>
					    <td>SUNDAY</td>
					    <td>Sandwich + Chutney, Banana/Egg, Tea/Coffee</td>
					    <td>Special Veg/Non-Veg, Raita, Rice, Roti, Salad</td>
					    <td>	Khichdi/Simple Meal, Roti, Salad, Sweet</td>
					</tr>
				
				</tbody>
			</table>















<br></br>


<br></br>
  
   {/* Calculator Section */}
      <hr />
      <h3>Mess Fee Calculator</h3>
      <p>Base Mess Fee: ₹{messFee} per semester</p>

      <div className="mb-3" style={{ maxWidth: '300px' }}>
        <label htmlFor="guestMeals" className="form-label">
          Number of Guest Meals (₹{guestMealCost} each):
        </label>
        <input
          type="number"
          id="guestMeals"
          className="form-control"
          min="0"
          value={guestMealCount}
          onChange={(e) => {
            const val = parseInt(e.target.value, 10);
            setGuestMealCount(isNaN(val) || val < 0 ? 0 : val);
          }}
        />
      </div>

      <h4>Total Mess Cost: ₹{totalCost}</h4>
    
  

  
     

</div>;
}



function App() {
  const [count, setCount] = useState(0);

  const styles = {
    container: { display: "flex", minHeight: "90vh" }, // full viewport height minus navbar
    content: { flex: 1, padding: "20px" },
    title: { color: "#5C6AC4" },
  };

  return (
    <Router>
      <Navbar /> {/* Top Navbar */}
      <div style={styles.container}>
        <Dashboard /> {/* Left sidebar - fixed */}
        <div style={styles.content}>
          {/* Routes render right side content */}
          <Routes>
            
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/mess" element={<Mess />} />
            <Route path="/Students" element={<Students />} />
            <Route path="/Rules" element={<Rules />} />
            <Route path="/Fee" element={<Fee />} />
            <Route path="/playingdetails" element={<PlayingDetails />} />
            <Route path="/" element={<Board />} />
            <Route path="/Class" element={<Class />} />
            
          </Routes>
         
        </div>
      </div>
    </Router>
  );
}

export default App;























// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './navbar.jsx';
// import SignUp from './SignUp.jsx';
// import Dashboard from './Dashboard.jsx';

// function Home() {
//   return <h2>Home hello</h2>;
// }

// function Cart() {
//   return <h2>Cart Page</h2>;
// }

// function Mess() {
//   return <h2>Mess Page</h2>;
// }

// function App() {
//   const [count, setCount] = useState(0);

//   const styles = {
//     main: { padding: '20px' },
//     title: { color: '#5C6AC4' },
//   };

//   return (
//     <Router>
//       <Navbar />
//       <Dashboard />
      
//       <div style={styles.main}>
//         <h1 style={styles.title}>Hello, World!</h1>
//         <button onClick={() => setCount(count + 1)}>count {count}</button>
//       </div>

//       {/* Routes yahan honge, aur Dashboard ka render sirf jab /dashboard pe ho */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/mess" element={<Mess />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;






















// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './navbar.jsx';
// import SignUp from "./SignUp.jsx";
// import Dashboard from "./Dashboard.jsx";
// function Home() {
//   return  <h2>Home hello</h2>  ;
// }

// function Cart() {
//   return <h2>Cart Page</h2>;
// }




// function App() {
//   const [count, setCount] = useState(0);

//   const styles = {
//     main: { padding: '20px' },
//     title: { color: '#5C6AC4' },
//   };

//   return (
//     <Router>
//       <Navbar />
       
    

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/Cart" element={<Cart />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/signUp" element={<SignUp />} />
//         <Route path="/mess" element={<Mess />} />
        
//       </Routes>
//     </Router>
//   );
// }

// export default App;
































                                                                          
