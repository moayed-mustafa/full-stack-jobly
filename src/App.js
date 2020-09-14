import React, {useState, useContext, useEffect} from 'react';
import './App.css';
import './styles/nav.css'
import './styles/home.css'
import './styles/companies.css'
import './styles/jobs.css'


import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'
import Navigation from './SiteNavigation/Nav'
import {FetchData} from './custom-hooks/useFetch'
import {StateContext, LoggedInContext} from './custom-hooks/Context'



function App() {

  // inititate state
  const [companies, setCompanies] = useState()
  const [jobs, setJobs] = useState()
  const [logged, setLogged] = useState(false)

  // useEffect(() => {
  //   if (JSON.parse(window.localStorage.getItem("_token")) !== null) {
  //      setLogged(logged => logged = true)
  //    }
  // }, [logged])
  // useFetch to get companies, jobs
  // FetchData(setCompanies, setJobs)

  return (
    <div className="App">
      <Router>
        <LoggedInContext.Provider value={{ logged, setLogged }}>
          <Navigation />
        <StateContext.Provider value={{companies, jobs, setJobs, setCompanies}}>
        <Routes />
        </StateContext.Provider>
        </LoggedInContext.Provider>
    </Router>
    </div>

  );
}

export default App;
