import React from 'react'
import {useParams} from 'react-router-dom'



// todo: this component do not show company detalis, rather it shows jobs
//  todo: that are associated with said company
/*
    * this will mean taking out the name/handle from the url parameter string
    * calling a function in API.js to get all jobs associated with the company.
    * show them bad boys.
*/
function Company() {
    let {company} = useParams()
    return (
        <div>{company}</div>
    )

}

export default Company