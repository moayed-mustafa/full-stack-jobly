import React from 'react'
import { NavLink } from 'react-router-dom'
const Navigation = () => {
  return (
    <div className="nav">
      <ul className="navbar">
        <li className="Logo nav-list"> <NavLink exact to="/" className="navbar-brand">Jobly</NavLink></li>
        <li className="nav-list"> <NavLink to="/companies">companies</NavLink> </li>
        <li className="nav-list"> <NavLink to="/jobs">jobs</NavLink></li>
           {/* <NavItem>
          <NavLink to="/add">Add Drink/Snack</NavLink>
        </NavItem> */}

      </ul>


  </div>





    )

}

export default Navigation