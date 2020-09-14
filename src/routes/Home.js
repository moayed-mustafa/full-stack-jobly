import React,{useContext , useEffect} from 'react';
import { StateContext,LoggedInContext } from '../custom-hooks/Context'
import {FetchData} from '../custom-hooks/useFetch'


function Home() {

  let { logged, setLogged} = useContext(LoggedInContext)
  let { setJobs, setCompanies } = useContext(StateContext)

  // useFetch to get companies, jobs
  if (logged) FetchData(setCompanies, setJobs);
  console.log(logged)


  // useEffect(() => {
    if (JSON.parse(window.localStorage.getItem("_token")) !== null) {
       setLogged(true)
    }
    else {
      setLogged(false)
    }
  // }, [logged])
  return (
    <div className="Home">
      <div className="welcome">
      <h1>Welcome to Jobly</h1>
      <p className="small"><small>All jobs in one place</small></p>

      </div>
    </div>
  );
}

export default Home;