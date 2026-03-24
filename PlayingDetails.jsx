import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";





const PlayingDetails = () => {
  const navigate = useNavigate();
  return (

<div className="container" style={{ height: 'calc(100vh - 140px)', overflow: 'auto' }}>
  
<div style={{ padding: "20px" }}>
  
    <button 
    style={{ marginLeft:"-30px"}} 
 
      
        className="btn btn-light mb-5 " 
        onClick={() => navigate(-1)}   // browser history me back
      >
      
      
        ← Back
        
    </button>
    
    <br></br><br></br><br></br><br></br>
    
    <div>
      
<b  style={{ backgroundColor:"grey"}} >Football</b>

<br></br><br></br>

<p>Football (or soccer) is the world’s most popular sport, featuring two teams of 11 players aiming to score by getting a ball into the opponent's net, primarily using their feet. Originating in 19th-century England, it is played over 90 minutes. Major tournaments like the FIFA World Cup attract billions of viewers worldwide.</p> <br></br><br></br>      

 <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://static.toiimg.com/thumb/msid-119579374,width-1070,height-580,imgsize-211190,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg" class="d-block w-100" height="430px" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://5.imimg.com/data5/SELLER/Default/2020/12/DM/LE/RC/120137423/football-soccer-balls.jpg" class="d-block w-100" height="430px" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv7Z4KtVkiHIAn60INGGSq89URMedcWyEVfQ&s" class="d-block w-100" height="430px" alt="..."/>
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


<h5>Thousands of football players suit up each year for colleges and universities coast to coast. Some take the field for the most storied teams in all of sports — ***** or professional
</h5>

</div>
<br></br>


<div>
  
  
  
  
  
  
  <br></br>

<b  style={{ backgroundColor:"grey"}} >Cricket</b>

<br></br><br></br>


<p>Cricket is a bat-and-ball game that is played between two teams of eleven players on a field, at the centre of which is a 22-yard (20-metre; 66-foot) pitch with a wicket at each end, each comprising two bails (small sticks) balanced on three stumps. Two players from the batting team, the striker and nonstriker, stand in front of either wicket holding bats, while one player from the fielding team, the bowler, bowls the ball toward the striker's wicket from the opposite end of the pitch. The striker's goal is to hit the bowled ball with the bat and then switch places with the nonstriker, with the batting team scoring one run for each of these swaps. Runs are also scored when the ball reaches the boundary of the field or when the ball is bowled illegally.
1. Program Overview (The "Why Join Us" Section)Headline: Elevate Your Game at [College Name]Sub-headline: From state-of-the-art nets to intercollegiate championships, we provide the ultimate ecosystem for the modern cricketer.Elite Coaching: Training sessions led by ICC-certified coaches and former First-Class players.High-Performance Hub: Access to 6 indoor turf tracks and 4 outdoor floodlit pitches.Data-Driven Analytics: We use PitchVision and Catapult wearable tech to track your bowling speed, bat swing, and fitness metrics.Scholarship Pathways: Performance-based tuition waivers for top-tier regional and national talent.2. Facilities & Equipment (Feature Grid)If you are building a "Facilities" page, use these dummy specs:FeatureSpecificationMain GroundInternational Standard (70m boundaries)Pitch TypeNatural Hybrid Turf & Synthetic All-weatherBowling Machines3x BOLA Professional SeriesAnalysis LabHigh-speed 120fps cameras for bio-mechanical feedbackGymSport-specific strength & conditioning wing

</p>


<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://img.redbull.com/images/q_auto,f_auto/redbullcom/2017/05/18/e9ebf997-4358-4811-80db-0095c30800fd/red-bull-campus-cricket-2017-loyola-college-team-photo.jpg" class="d-block w-100" height="430px" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://img.redbull.com/images/q_auto,f_auto/redbullcom/2017/05/18/e9ebf997-4358-4811-80db-0095c30800fd/red-bull-campus-cricket-2017-loyola-college-team-photo.jpg" class="d-block w-100" height="430px" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv7Z4KtVkiHIAn60INGGSq89URMedcWyEVfQ&s" class="d-block w-100" height="430px" alt="..."/>
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





  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>





</div> 
</div>
)

};

export default PlayingDetails;
