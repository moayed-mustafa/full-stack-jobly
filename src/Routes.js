import React from 'react'
import {Switch, Route } from 'react-router-dom'
import Companies from './routes/Companies'
import Company from './routes/Company'
import Jobs from './routes/Jobs'
import Login from './routes/Login'
import Logout from './routes/Logout'
// import Login from './Login'
// import EditUser from './EditUser'
import Home from './routes/Home'
// import {StateContext} from './custom-hooks/Context'


const Routes = () => {
    // game plan for passing state to my routes components:
    // - I donn't want to initiate state on Routes, to keep things simple and one-dimensional.
    // to solve this I will need a context
    // I'll set the state on the App component
    //  I'll then wrap the routes component with context
    // finally I'll unpack it on this component and pass it as props to whatever component that is being used

    //  let {companies, jobs} = useContext(StateContext)

    return (

                <Switch>
                    <Route exact path="/">
                        <Home/>
                </Route>

                    <Route exact path="/companies">
                        <Companies/>
                    </Route>


                    <Route exact path="/companies/:company">
                        <Company/>
                    </Route>

                    <Route exact path="/jobs/">
                        <Jobs/>
                    </Route>
                    <Route exact path="/login">
                        <Login/>
                    </Route>
                    <Route exact path="/logout">
                <Logout />
                    </Route>

                    {/* <Route exact path="/jobs/:job">
                        <Job/>
                    </Route> */}


                    {/* <Route exact path="/users/:username">
                        <EditUser/>
                    </Route> */}

                </Switch>


    )

}

export default Routes