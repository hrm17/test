import React from 'react';
import './dashboardarea.css';
import {withRouter} from 'react-router-dom'
import {HomeComponent} from '../homecomponent/homeComponent';
import {SessionComponent} from '../sessionComponent/sessionComponent';
import {DownloadComponent} from '../downloadComponent/downloadComponent';

 const  Dashboardarea = props=>{
     const hash=props.location.hash;
     let Component;
    
     if(hash==='#session'){
         Component=SessionComponent;
     }else if(hash==='#downloads'){
        Component=DownloadComponent;
     }else{
         Component=HomeComponent
     }
return(

    <div class="dashboard-box-conatainer">
                      <Component></Component>
                        </div>
)
}
export default withRouter(Dashboardarea)