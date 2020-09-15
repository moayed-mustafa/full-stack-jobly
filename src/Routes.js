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
import Profile from './routes/Profile'
// import {StateContext} from './custom-hooks/Context'


const Routes = () => {
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
                    <Route exact path="/profile">
                        <Profile />
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