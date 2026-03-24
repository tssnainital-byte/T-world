import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="col-lg-2 left-sidebar p-2" style={{ height: 'calc(100vh - 90px)',overflow:'auto' , backgroundColor: 'grey' }}>
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="/"><b>Dashboard</b></Link>
        </li>
        
        <li className="list-group-item">
         <Link to="/Students"><b>Students</b></Link>
        </li>
        
     
        
        <li className="list-group-item">
          <Link to="/Fee"><b>Courses & Fees</b></Link>
        </li>
        
        <li className="list-group-item">
          <Link to="/mess"><b>Mess</b></Link>
        </li>
        
        <li className="list-group-item">
          <Link to="/Rules"><b>Rules & Regulations</b></Link>
        </li>
        
         <li className="list-group-item">
          <Link to="/signup"><b>New Registration</b></Link>
        </li>
        
         <li className="list-group-item">
          <Link to="/signup"><b>New Registration</b></Link>
        </li>
        
         <li className="list-group-item">
          <Link to="/signup"><b>New Registration</b></Link>
        </li>
        
         <li className="list-group-item">
          <Link to="/signup"><b>New Registration</b></Link>
        </li>
        
         <li className="list-group-item">
          <Link to="/signup"><b>New Registration</b></Link>
        </li>
        
         <li className="list-group-item">
          <Link to="/signup"><b>New Registration</b></Link>
        </li>
        
      </ul>
    </div>
  );
};

export default Dashboard;























