import React from 'react';
import {withRouter} from 'react-router-dom'
import './sidebar.css';
import {Link} from 'react-router-dom'
 const  Sidebar = props=>{
return(
    <div class="side-bar">
    <div class="list">
        <ul>
            <li><Link to="/dashboard">Home</Link></li>
            <li><Link to={{pathname:'/dashboard',hash:'#session'}}>Session</Link></li>
            <li><Link to={{pathname:'/dashboard',hash:'#downloads'}}>Downloads</Link></li>
            <li><Link to={{pathname:'/dashboard/setting'}}>Setting</Link></li>
            <li><Link to={{pathname:'/dashboard/about'}}>About</Link></li>

        </ul>

    </div>
</div>
)
}
export default withRouter(Sidebar)