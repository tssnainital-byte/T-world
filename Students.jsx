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
      
     
      
      
      

    
