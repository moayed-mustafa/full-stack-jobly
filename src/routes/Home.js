import React,{useContext , useEffect} from 'react';
import { StateContext,LoggedInContext } from '../custom-hooks/Context'
import {FetchData} from '../custom-hooks/useFetch'


function Home() {

  let { logged, setLogged} = useContext(LoggedInContext)
  let { setJobs, setCompanies } = useContext(StateContext)



      // useEffect(() => {
        if (JSON.parse(window.localStorage.getItem("_token")) !== null) {
           setLogged(true)
        }
        else {
          setLogged(false)
        }

    // },[logged])
    // useFetch to get companies, jobs
    if (logged) FetchData(setCompanies, setJobs);
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
            <a className="login" href="/login">Login</a>
        </>}


      </div>
    </div>
  );
}

export default Home;