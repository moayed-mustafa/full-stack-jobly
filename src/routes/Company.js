import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {FetchJobsByHandle} from '../custom-hooks/useFetch'


function Company() {
    let { company } = useParams()
    let [data, setData] = useState()
     FetchJobsByHandle(company, setData)

    return (
    <>
            {data === undefined ? <h1>Loading</h1> :
                <div className="company">
                    <h1 className="company-name">{data.name}</h1>
                    <p className="company-description">{data.description}</p>
                    <ul className="company-jobs-list">
                        {data.jobs.map((job) => (
                            <li className="details-list" key={job.id} >
                                <div className="card" >
                                    <span > <h3 className='title'>{`Title: ${job.title}`}</h3> </span>
                                    <span className="salary">{`Salary: ${job.salary}`}</span>
                                    <span className="equity">{`Equity: ${job.equity}`}</span>
                                    <button className="apply">Apply</button>
                                </div>
                            </li>

                        ))}
                    </ul>

                </div>
            }
            </>
    )

}

export default Company