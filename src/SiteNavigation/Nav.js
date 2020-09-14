import React,{useEffect, useState, useContext} from 'react'
import { NavLink } from 'react-router-dom'
import {LoggedInContext} from '../custom-hooks/Context'




const Navigation = () => {

  let {logged, setLogged} = useContext(LoggedInContext)
  // const [_token,  set_token] = useState(null)
  // useEffect(() => {
  //   if (JSON.parse(window.localStorage.getItem("_token")) !== null) {
  //      setLogged(logged => logged = true)
  //    }
  // }, [logged])

// alert(logged)

  return (
    <div className="nav">
      <ul className="navbar">
        <li className="Logo nav-list"> <NavLink exact to="/" className="navbar-brand">Jobly</NavLink></li>
        <li className="nav-list"> <NavLink to="/companies">Companies</NavLink> </li>
        <li className="nav-list"> <NavLink to="/jobs">Jobs</NavLink></li>
        { logged? <li className="nav-list"> <NavLink to="/logout">Logut</NavLink></li> :
          <li className="nav-list"> <NavLink to="/login">Login</NavLink></li>}


      </ul>


  </div>





    )

}

export default Navigation