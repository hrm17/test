import React from 'react';
import {Route,withRouter,Switch} from 'react-router-dom';
import {Hoc} from '../hoc/hoc'
import {Home} from '../component/Home/Home';
import Dashboard from '../component/DashBoard/dashboard';
import SignupComponent from '../component/signupComponent/signupComponent';

import {ErrorComponent} from '../component/error/error';


export const Main=props=>{
    return(
        <Hoc>
            <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/dashBoard" exact component={withRouter(Dashboard)}></Route>
            <Route path="/signup" exact component={SignupComponent}></Route>

            <Route path="/" component={ErrorComponent}></Route>;
            }
            </Switch>
       
       


        </Hoc>
    )
}