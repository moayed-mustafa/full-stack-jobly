import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import {StateContext, LoggedInContext} from '../custom-hooks/Context'





function Companies() {
    let { companies } = useContext(StateContext)
    let { logged } = useContext(LoggedInContext)
    console.log(logged)


    return (

        logged?
                < div className = "companies" >
        <ul className="companies-list">
            {companies.map((company) => (
                <Link to={`/companies/${company.handle}`} key={company.handle}>
                    <div className="card" >
                        <li className="details-list" >
                            <span > <h3 className='name'>{company.name}</h3> </span>
                            <div className="details">{company.description}</div>
                            <i className="fas fa-building fa-2x"></i>
                        </li>
                    </div>
                </Link>

            ))}
        </ul>


                </div >: <h1>you need to log in first </h1>

    )

}

export default Companies