import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import Workspace from './pages/workspace/Workspace';

function AppRouter() {
    return (
        <div>
            <Switch>
                <Route path="/workspace/:channelID">
                    <Workspace />
                </Route>
                <Route path="/login">
                    <h2>Login page</h2>
                </Route>
                <Route path="/">
                    <Workspace />
                </Route>
            </Switch>
        </div>
    )
}

export default AppRouter
