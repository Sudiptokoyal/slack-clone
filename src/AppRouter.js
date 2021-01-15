import React, {lazy} from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import Workspace from './pages/workspace/Workspace';
import Login from './pages/login/Login';


function AppRouter() {

    return (               
        <Switch>
            <Route path="/ws" >
                <Workspace />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/">
                <Login />
            </Route>
        </Switch>
    )
}

export default AppRouter
