import React from 'react';
import './activityComponent.css';
import {Hoc} from '../../../../hoc/hoc'
export const  ActivityComponent = props=>{
return(
    <Hoc>
    <div class="activityBox">
    <p class="heading">{props.title}</p>                                  
    </div>
    </Hoc>
)
}