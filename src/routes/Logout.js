import React, {useContext} from 'react'
import { LoggedInContext } from '../custom-hooks/Context'
import {useHistory} from 'react-router-dom'


function Logout() {

    let { logged, setLogged } = useContext(LoggedInContext)

    window.localStorage.removeItem("_token")
    // setLogged(logged => logged = false)

    const history = useHistory()
    history.push('/')


    return (
        <div className="logout">
            <h1>Logging out</h1>

        </div>
    )
}

export default Logout