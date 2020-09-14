import React from 'react'
import { NavLink } from 'react-router-dom'
const Navigation = () => {
  return (
    <div className="nav">
      <ul className="navbar">
        <li className="Logo nav-list"> <NavLink exact to="/" className="navbar-brand">Jobly</NavLink></li>
        <li className="nav-list"> <NavLink to="/companies">Companies</NavLink> </li>
        <li className="nav-list"> <NavLink to="/jobs">Jobs</NavLink></li>
        <li className="nav-list"> <NavLink to="/login">Login</NavLink></li>
           {/* <NavItem>
          <NavLink to="/add">Add Drink/Snack</NavLink>
        </NavItem> */}

      </ul>


  </div>





    )

}

export default Navigation