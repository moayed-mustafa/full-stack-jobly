import React, {useContext} from 'react'
// import { LoggedInContext } from '../custom-hooks/Context'
import { useHistory } from 'react-router-dom'
import {isLogged} from '../custom-hooks/useAuth'



function Logout() {

    // let { logged, setLogged } = useContext(LoggedInContext)

    // window.localStorage.removeItem("_token")
    let keysToRemove = ["_token", "user", "username"]
    keysToRemove.map(key=> window.localStorage.removeItem(key))
    // setLogged(logged => logged = false)


    const history = useHistory()
    history.push('/login')


    return (
        <div className="logout">
            <h1>Logging out</h1>

        </div>
    )
}

export default Logout