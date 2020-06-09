import React from 'react';
import './error.css'

import {Hoc } from '../../hoc/hoc'
export const  ErrorComponent = props=>{
return(
   <Hoc>
       <div class='error'>
           <h1> Page Not Found</h1>
       </div>
   </Hoc>
)
}