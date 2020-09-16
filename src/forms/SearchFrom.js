import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getCompany,FetchJobsByHandle } from '../custom-hooks/useFetch'
import { StateContext} from '../custom-hooks/Context'

function SearchForm() {

    const [data, setData] = useState({ term: "" })
    const location = useLocation()

    let { companies ,setCompanies }  = useContext(StateContext)

    function updateTerm(e) {
        e.persist()
        setData(data => ({
            ...data,
            [e.target.name]: e.target.value
        }))
    }

    async function submitForm(e) {
        e.preventDefault()
        console.log(data)
        console.log(location.pathname)
        // location.pathname === "/companies"?
        // send request to the companies mapper
            // :
            // send a request to the jobs mapper
        if (location.pathname === "/companies") {
            let handle = data.term //data.term[0].toUpperCase() + data.term.slice(1)
            console.log(handle, typeof(handle))
            // let result = await getCompany(handle)
            let result = await FetchJobsByHandle(handle, setCompanies)
            //  * now the  question is: how am I going to show those new results on the view?
            console.log(result)
        }
    }


    return (
        <div className="form-div">
            <form  onSubmit={submitForm} className="form-data">
                        <input id="term"
                            type="text"
                            placeholder="Enter search term"
                            name="term"
                            value={data.term}
                            onChange={updateTerm}>
                        </input>
                    <button className="search">Search</button>
            </form>

        </div>
    )

}

export default SearchForm