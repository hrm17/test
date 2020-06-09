import React from 'react';
import './dashboxComponent.css';
import {Hoc} from '../../../../hoc/hoc'
export const  DashBoxComponent = props=>{
return(
    <Hoc>
     <div class="dashboard-box">
        <i class={`fas fa-${props.icon}`}></i>
        <p>{props.title}</p>
                                    
    </div>
    </Hoc>
)
}