import React from 'react';
import './section.css';
import {withRouter} from 'react-router-dom'
import Sidebar from '../sidebar/sidebar';
import Dashboardarea from '../dashboardbox/dashboardarea';
import Activityarea from '../activitybox/activityarea';


import {Hoc} from '../../../hoc/hoc';

const Section =props=>{
console.log(props)
    return(<Hoc>
        <div class="dashboard-main-container">
            <div class="dashboard-sub-container">
               <Sidebar></Sidebar>
                <div class="main-header">
                       <Dashboardarea ></Dashboardarea>
                       <Activityarea></Activityarea>
                </div>
            </div>
        </div>

    </Hoc>)



}
export default withRouter(Section)