import React, { useState } from "react";
import { Link } from "react-router-dom";

const cardBaseStyle = {
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer',
};

const Students = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cards = [
    "https://ideas.time.com/wp-content/uploads/sites/5/2013/03/college.jpg?w=720&h=480&crop=1",
    "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/665317a1a966d0001d6d537a.jpg",
    "https://blog.fitnyc.edu/admissions/files/2016/08/textbooks.resized-1.jpg"
  ];

  return (
    <>
      <div className="container" style={{ height: 'calc(100vh - 140px)', overflow: 'auto' }}>
        <div className="container">
          <div className="row">


















{cards.map((imgSrc, idx) => (
  <div key={idx} className="col-4">
    {idx === 1 ? (
      <Link to="/playingdetails" style={{ textDecoration: 'none' }}>
        <div
          className="card p-3"
          style={{
            ...cardBaseStyle,
            transform: hoveredIndex === idx ? 'translateY(-10px)' : 'none',
            boxShadow: hoveredIndex === idx ? '0 8px 16px rgba(0,0,0,0.3)' : 'none',
          }}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img src={imgSrc} className="d-block w-100" height="430px" width="100vw" alt="..." />
        </div>
      </Link>
    ) : (
    
    <Link to="/Class" style={{ textDecoration: 'none' }}>
      <div
        className="card p-3"
        style={{
          ...cardBaseStyle,
          transform: hoveredIndex === idx ? 'translateY(-10px)' : 'none',
          boxShadow: hoveredIndex === idx ? '0 8px 16px rgba(0,0,0,0.3)' : 'none',
        }}
        onMouseEnter={() => setHoveredIndex(idx)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <img src={imgSrc} className="d-block w-100" height="430px" width="100vw" alt="..." />
      </div>
      </Link>
      
      )}
      
     
      
      
      
      
      
      
    
    
      
      
      
      
      
    
    
    
    
    
    
    
    
    
    
  </div>
))}













            
                   
                 

        
        </div>
        
        {/* Rest of existing code unchanged */}
        
        
         <br></br><br></br>
    
   <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
     
		<div class="container-xxl amit">
		
		<div class="row amity">
		
		<div class="col-4">

		<div class="card p-3 myCard h-100" >

    <img src="https://lh5.googleusercontent.com/proxy/k8CSJ4dTRp1OtqYT3a9HQ2c2QxFrI7FxIrjtusGcTNaj-b3lVtQ7F4vBeA2zgXsqqD8TpYeYl8f9TqpyRTCM1Yn33I4LezSnpBUSgwdzRjdqQs9LGK2r-O_O9JE4yUWAub9yui25sVGL" height="350px"/>
		
		</div>
		
		</div>
		
		<div class="col-4">

		<div class="card p-3 myCard h-100">
    
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz1P_KfPq_rmdp5RSVZwRbKNhPhupZkNhKvw&s" height="350px"/>
     
		</div>
		
		</div>
		
		<div class="col-4">

		<div class="card p-3 myCard h-100">

      <img src="https://lh5.googleusercontent.com/proxy/JEGHQ-FXKHZMDhMtoE-qjSt4nNHJqQpTfNwdtEnVQRZeRsHA4cRTXU0bmTemVnH8KYxgKy93yDuUMfLBw0v-STujpPx8W7iWpyyMhnqIYOOn05D1EzE85u4" height="350px"/>
		
		</div>
		
		</div>

		
		</div> 
		</div>
      
   </div>
    
    <div class="carousel-item">
      
        
		<div class="container-xxl amit">
		
		<div class="row amity">
		
		<div class="col-4">

		<div class="card p-3 myCard h-100" >

    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWOtg2CIic7X8vj9FzhWhl00Bal77UOM85vA&s" height="350px"/>
		
		</div>
		
		</div>
		
		<div class="col-4">

		<div class="card p-3 myCard h-100">
    
     <img src="https://web.uri.edu/wp-content/uploads/sites/916/mgsl-tour-setup.jpg" height="350px"/>
     
		</div>
		
		</div>
		
		<div class="col-4">

		<div class="card p-3 myCard h-100">

      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNUXzTIowBF4fGJ2GmCtEwmSU7ksBSwZYlnA&s" height="350px"/>
		
		</div>
		
		</div>

		
		</div> 
		</div>
      
      

    </div>
    <div class="carousel-item">
      
      	<div class="container-xxl amit">
		
		<div class="row amity">
		
		<div class="col-4">

		<div class="card p-3 myCard h-100" >

    <img src="https://www.gncbudhlada.org/uploads/files/z5.jpeg" height="350px"/>
		
		</div>
		
		</div>
		
		<div class="col-4">

		<div class="card p-3 myCard h-100">
    
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzUjIgdliMur5A_bnk_Nuqco2GvAKotzJMMA&s" height="350px"/>
     
		</div>
		
		</div>
		
		<div class="col-4">

		<div class="card p-3 myCard h-100">

      <img src="https://content.jdmagicbox.com/v2/comp/kannur/w2/9999px497.x497.250128230756.f7w2/catalogue/iconic-fitness-center-family-gym-pallikunnu-kannur-fitness-centres-kve0xh2f1c-250.jpg" height="350px"/>
		
		</div>
		
		</div>

		
		</div> 
		</div>
		
      
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
    
    
    
    
    
    
    
    
    <div class="accordion" id="accordionExample" style={{marginTop:"4px"}}>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <b> Information</b>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        
        
        <b>Information (XYZ University):</b>
<br></br><br></br>

"Student Corner" (or Student Portal) on this university website is a centralized digital hub designed to provide students with essential resources, administrative tools, and academic information in one accessible location. It acts as a 24/7 self-service platform, reducing the need for in-person visits for routine tasks


        
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <b>Student Union</b>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <b>Student Union:</b>
        <br></br><br></br>
 <p> A Students' Union (SU) is an elected, student-led representative body in universities and colleges that advocates for student welfare, acts as a voice against administration, and organizes campus life. They enhance the student experience by organizing events (festivals, orientations), managing societies, providing academic support, and offering independent advice. 
<br></br><br></br>
<b> Key Aspects of a Students' Union: </b>

<br></br><br></br>


Representation & Advocacy: Acts as the official voice of students, negotiating with university administration on policy, fees, and academic issues.
Student Life & Events: Organizes major campus activities, including Freshers' orientation, cultural fests, and social events.
Support Services: Often provides independent, free, and confidential advice on housing, academic, and personal issues.
Governance & Clubs: Operates as a democratic,, often charitable organization (especially in the UK) that oversees student clubs, societies, and sports teams.
Facilities & Services: Many SUs run on-campus venues like cafes, shops, bars, or dedicated student activity centers. </p>

      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <b> Student's Activities plan </b>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>  Student's Activities </strong> 
       
        
        
        
        
     <p> College students can engage in a variety of activities, including volunteering, joining student clubs, attending workshops, playing intramural sports, and participating in wellness activities like yoga or meditation to balance academic demands. Popular, budget-friendly options include board game nights, outdoor picnics, scavenger hunts, open mic nights, and DIY craft workshops.</p> 

<b>Social & Fun Activities</b><br></br>
Themed Nights: Trivia nights, karaoke, or murder mystery parties.
Cultural Events: Film festivals or international food fairs.
Active Gaming: Role-playing games like Dungeons & Dragons, or video game tournaments.
Campus Traditions: Spirit week, bonfires, or talent shows. 
<br></br><br></br>

        
     <b>Wellness & Relaxation</b><br></br>
Mindfulness: Yoga, guided meditation, or breathing sessions.
Outdoor Activities: Hiking, gardening, or outdoor picnics.
Creative Outlets: Painting, pottery, or journaling workshops. 
<br></br>
        
        
        
        
        
        
        
        

        
        
      </div>
    </div>
  </div>
   <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
       <b> Student's Helpdesk </b>
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong> Students Helpdesk </strong> 
        <br></br><br></br>
        
        
        <b>Student Support & Communication</b>
Helpdesk/Chatbots: Automated or live support for resolving queries about admissions, forms, or technical issues.<br></br>
Notifications & Alerts: Timely updates on new, job opportunities, and upcoming events.<br></br>
Grievance Reporting: A system to log, track, and resolve student issues.<br></br>
Anti-Ragging Policies: Information on, and resources for, campus safety.<br></br>
        
      
        

        
        
      </div>
    </div>
  </div>
</div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   
    <br></br><br></br>
    
 


    
    </div>
    
  </div>
    
    
        
        
        
      
    </>
  );
};

export default Students;









 













// const Students = () => {
//   return (
//     <>
    
   
    
//     <div class="container" style={{height: 'calc(100vh - 140px)', overflow: 'auto'}}>
      
//       <div class="container">
//       <div class="row">
        
        
//         <div class="col-4">
          
//           <div class="card p-3">
          
//     	<img src="https://ideas.time.com/wp-content/uploads/sites/5/2013/03/college.jpg?w=720&h=480&crop=1" className="d-block w-100" height="430px" width="100vw" alt="..."/>
	
          
//           </div>
//         </div>
        
//         <div class="col-4">
          
//           <div class="card p-3">
          
//     	<img src="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/665317a1a966d0001d6d537a.jpg" className="d-block w-100" height="430px" width="100vw" alt="..."/>
	
          
//           </div>
//         </div>
        
//         <div class="col-4">
          
//           <div class="card p-3">
          
//     	<img src="https://blog.fitnyc.edu/admissions/files/2016/08/textbooks.resized-1.jpg" className="d-block w-100" height="430px" width="100vw" alt="..."/>
	
          
//           </div>
//         </div>
        
        
        
        
        
        
//       </div>
      
      
      
      
//     </div>
    
    
    
//     <br></br><br></br>
    
//     <div id="carouselExample" class="carousel slide"   style={{ borderRadius:"8px" }}>
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img src="https://bibliolifestyle.com/wp-content/uploads/2022/02/10-Reasons-Why-Libraries-Are-Important.jpeg" class="d-block w-100" height="430px" alt="..."/>
//     </div>
//     <div class="carousel-item">
//       <img src="https://lh5.googleusercontent.com/proxy/PgxYXnYwJfaS3UHPgTYKPT4yMVBdJ-cqczP5gv9Q8KENo4vxieqUQfMrgO17K38L8kEH8Uuj2gweeR4wCx7b0L3mGNrlJk1eG90I7YCxgXRb" class="d-block w-100" height="430px" alt="..."/>
//     </div>
//     <div class="carousel-item">
//       <img src="https://i.ytimg.com/vi/sWb3oOSQ5Os/maxresdefault.jpg" class="d-block w-100" height="430px" alt="..."/>
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>
    
    
//     <br></br><br></br>
    
    
//     <b>STUDENT UNION</b>
//     <br></br><br></br>
    
//   <p> A Students' Union (SU) is an elected, student-led representative body in universities and colleges that advocates for student welfare, acts as a voice against administration, and organizes campus life. They enhance the student experience by organizing events (festivals, orientations), managing societies, providing academic support, and offering independent advice. 

// <br></br><br></br>

// <b> Key Aspects of a Students' Union: </b>

// <br></br>


// Representation & Advocacy: Acts as the official voice of students, negotiating with university administration on policy, fees, and academic issues.
// Student Life & Events: Organizes major campus activities, including Freshers' orientation, cultural fests, and social events.
// Support Services: Often provides independent, free, and confidential advice on housing, academic, and personal issues.
// Governance & Clubs: Operates as a democratic,, often charitable organization (especially in the UK) that oversees student clubs, societies, and sports teams.
// Facilities & Services: Many SUs run on-campus venues like cafes, shops, bars, or dedicated student activity centers. </p>

    
    
    
//     </div>
    
    
   
//     </>
    
    
    
//     );
// };

// export default Students;


    
    
    

      
