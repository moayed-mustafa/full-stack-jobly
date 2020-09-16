import React,{useContext , useEffect} from 'react';
import { StateContext } from '../custom-hooks/Context'
import { FetchData } from '../custom-hooks/useFetch'
import { NavLink } from 'react-router-dom'
import {isLogged} from '../custom-hooks/useAuth'


function Home() {

  // let { logged, setLogged} = useContext(LoggedInContext)
  let { setJobs, setCompanies } = useContext(StateContext)


  // function isLogged() {
  //   if (JSON.parse(window.localStorage.getItem("_token")) !== null) {
  //      return true
  //   }
  //   else {
  //     return false
  //   }

  // }

    // useFetch to get companies, jobs
  const logged = isLogged()
  useEffect(() => {
    if (logged) FetchData(setCompanies, setJobs);

  }, [setCompanies, setJobs])

  console.log(logged)
    let username = JSON.parse(window.localStorage.getItem("username"))
  return (
    <div className="Home">
      <div className="welcome">
        {logged ?
          <>
          <h1>Welcome to Jobly {username}</h1>
            <p className="small"><small>All jobs in one place</small></p>
            </>
          :
          <>
            <h1>Welcome to Jobly</h1>
            <p className="small"><small>log in for a chance at your dream job</small></p>
            <NavLink className="login" to="/login">Login</NavLink>
        </>}


      </div>
    </div>
  );
}

export default Home;