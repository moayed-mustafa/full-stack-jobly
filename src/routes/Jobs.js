import React, {useContext} from 'react'
import {StateContext, LoggedInContext} from '../custom-hooks/Context'



function Jobs() {
    let { jobs } = useContext(StateContext)
    let { logged, setLogged } = useContext(LoggedInContext)




    return (
        logged?
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

                            <button className="apply">Apply</button>
                        </div>
                    </li>

                ))}
            </ul>


        </div> : <h1>You must log in first</h1>
    )

}

export default Jobs






