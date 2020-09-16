import React,{useEffect, useState, useContext} from 'react'
import { NavLink } from 'react-router-dom'
// import { StateContext } from '../custom-hooks/Context'
import { isLogged } from '../custom-hooks/useAuth'
// import { FetchData } from '../custom-hooks/useFetch'






const Navigation = () => {

  // let {logged, setLogged} = useContext(LoggedInContext)
  const logged = isLogged()
  console.log(logged)

  return (
    <div className="nav">
      <ul className="navbar">
        <li className="Logo nav-list"> <NavLink exact to="/" className="navbar-brand">Jobly</NavLink></li>
        <li className="nav-list"> <NavLink to="/companies">Companies</NavLink> </li>
        <li className="nav-list"> <NavLink to="/jobs">Jobs</NavLink></li>
        {logged ?
          <>
            <li className="nav-list"> <NavLink to="/profile">Profile</NavLink></li>
            <li className="nav-list"> <NavLink to="/logout">Logut</NavLink></li>
            </>
          :
          <li className="nav-list"> <NavLink to="/login">Login</NavLink></li> }


      </ul>


  </div>





    )

}

export default Navigation