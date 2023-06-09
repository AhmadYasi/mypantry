import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const HomePage = () => {
    return (
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">MyPantry</a>
      <div>
        <input type="search" placeholder="Search" />
        <button className="btn btn-outline-success " type="submit">Search</button>
      </div>    
        <div >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">All Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Meal Planner</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Recycle</a>
            </li>
          </ul>
          
        </div>
      </nav>
    );
  };
  
  export default HomePage;