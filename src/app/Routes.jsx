import React from 'react'
import {Route, Redirect, IndexRoute} from 'react-router'

import Layout from './pages/layout/Layout.jsx'
import Dashboard from './pages/dashboard/Dashboard.jsx'

const Routes = (
    <Route>
        <Route path="/" component={Layout}>
            <Redirect from="/" to="/dashboard"/>
            <IndexRoute component={Dashboard}/>
            <Route path="dashboard" component={Dashboard}/>
        </Route>
    </Route>);


export default Routes