import React, {useState, useContext} from 'react';
import './App.css';
import './styles/nav.css'
import './styles/home.css'
import './styles/companies.css'
import './styles/jobs.css'


import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'
import Navigation from './SiteNavigation/Nav'
import FetchData from './custom-hooks/useFetch'
import {StateContext} from './custom-hooks/Context'



function App() {

  // inititate state
  const [companies, setCompanies] = useState()
  const [jobs, setJobs] = useState()
  // useFetch to get companies, jobs
  FetchData(setCompanies, setJobs)

  return (
    <div className="App">
      <Router>
        <Navigation />
        <StateContext.Provider value={{companies, jobs}}>
        <Routes />
        </StateContext.Provider>
    </Router>
    </div>

  );
}

export default App;
