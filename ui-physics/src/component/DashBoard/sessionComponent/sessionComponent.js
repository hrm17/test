import React from 'react';
import './sessionComponent.css';
import {Hoc } from '../../../hoc/hoc'
export const  SessionComponent = props=>{
return(
   <Hoc>
       <div class="session">
           <p>Session Component</p>
       </div>
   </Hoc>
)
}