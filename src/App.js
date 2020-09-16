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
  //  * got rid of the logged state

  // inititate state
  const [companies, setCompanies] = useState()
  const [jobs, setJobs] = useState()
  // const [logged, setLogged] = useState(false)


  // useEffect(() => {
  //   if (JSON.parse(window.localStorage.getItem("_token")) !== null) {
  //     setLogged(true)
  //  }
  //  else {
  //    setLogged(false)
  //  }

  // })
  // get the data and update the state
  // if(logged)FetchData(setCompanies, setJobs);

  return (
    <div className="App">
      <Router>
        {/* <LoggedInContext.Provider value={{ logged, setLogged }}> */}
        <StateContext.Provider value={{companies, jobs, setJobs, setCompanies}}>
          <Navigation />
        <Routes />
        </StateContext.Provider>
        {/* </LoggedInContext.Provider> */}
    </Router>
    </div>

  );
}

export default App;
