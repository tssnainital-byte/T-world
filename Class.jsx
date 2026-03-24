import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";





const Class = () => {
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
    
    hello welcome to classroom section....
    
    <br></br><br></br>
    
    
    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.highlandernews.org/wp-content/uploads/Irene-Tu-_-The-Highlander.jpg" class="d-block w-100" height="430px" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images.ctfassets.net/2htm8llflwdx/2mKP5dTvcwi8RUABcb6VEP/5fe3aa6f438ba63b96e9f36c639e66e8/Classroom_StudentGroup_Studying_Indoor_GettyImages-679437550.jpg" class="d-block w-100" height="430px" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfal5ohq9BquKQgOAEe7ujClm6TuEU8mlxcw&s" class="d-block w-100" height="430px" alt="..."/>
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
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
 </div>
    
    
    
    
    
    </div>
    
    
    
    )
    
    };
    
    export default Class;
    
