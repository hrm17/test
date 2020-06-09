import React from 'react';
import {withRouter} from 'react-router-dom'
import './activityarea.css';
import {ActivityComponent} from './activityComponent/activityComponent'
 const  Activityarea = props=>{
    console.log(props,'acti')
return(
    <div class="activity-area">
    <ActivityComponent title="Topic Covered"></ActivityComponent>
    <ActivityComponent title="Recent Activities"></ActivityComponent>
   {props.location.hash ==='' ?<ActivityComponent title="Performance"></ActivityComponent>:null}
    
    </div>
)
}
export default withRouter(Activityarea)