import React, { useContext, useEffect, useState, useCallback } from 'react'
import {useHistory} from 'react-router-dom'
import { StateContext, LoggedInContext } from '../custom-hooks/Context'
import { applyForJob } from '../custom-hooks/useFetch'
import { FetchData } from '../custom-hooks/useFetch'
import { isLogged } from '../custom-hooks/useAuth'
import SearchFrom from '../forms/SearchFrom'






function Jobs() {
    // * maybe it's better to pass down jobs as a prop instead of all this hustling!
    //  * to have the applied jobs reflect their new state on click
    //  * create a new state that holds the current users's jobs
    //  * add the new job to the state onClick which will cause a re-render
    //  * same goes for jobs on the companies/company route

    console.log("rendering jobs")
    let { jobs,setJobs, setCompanies  } = useContext(StateContext)

    // let { logged, setLogged } = useContext(LoggedInContext)

    function ApplyForJob(e) {
        console.log(e.target.id)
        applyForJob(e.target.id)

    }

    const logged = isLogged()
     // todo: this is not making any difference, mainly, my app still crashes
    // if (logged) FetchData(setCompanies, setJobs);
    useEffect(() => {
        if (logged) FetchData(setCompanies, setJobs);

      }, [setCompanies, setJobs])





    return (
        logged ?
            <div>
            <SearchFrom/>
        <div className="jobs">
            <ul className="jobs-list">
                {jobs.map((job) => (
                    <li className="details-list" key={job.id}>
                        <div className="card">
                            <span> <h3>{`Title: ${job.title}`}</h3> </span>
                            <span> <p>{`Company: ${job.company_handle}`}</p> </span>
                            <span> <p>{`Salary: ${job.salary}`}</p> </span>
                            <span> <p>{`Equity: ${job.equity}`}</p> </span>
                                <div className="details">{job.description}</div>
                            <i className="fas fa-user-tie fa-3x"></i>

                            {job.state === "applied" ? <button id={job.id} className="apply" disabled >Applied</button> :
                                <button onClick={ApplyForJob} id={job.id} className="apply">Apply</button>}
                        </div>
                    </li>

                ))}
                    </ul>
        </div>

        </div> : <h1>You must log in first</h1>
    )

}

export default Jobs






