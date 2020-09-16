import React, {useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { StateContext} from '../custom-hooks/Context'
import { FetchData } from '../custom-hooks/useFetch'
import { isLogged } from '../custom-hooks/useAuth'
import SearchFrom from '../forms/SearchFrom'







function Companies() {
    let { companies,setJobs, setCompanies }  = useContext(StateContext)
    // let { logged, setLogged } = useContext(LoggedInContext)

    let logged = isLogged()
    // console.log(logged)
    // todo: this is not making any difference, mainly, my app still crashes
    useEffect(() => {
        if (logged) FetchData(setCompanies, setJobs);

      }, [setCompanies, setJobs])


    return (

        logged ?
            <>
        <SearchFrom/>
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


                </div >
                </>

            : <h1>you need to log in first </h1>

    )

}

export default Companies