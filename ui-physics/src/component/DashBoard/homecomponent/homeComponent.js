import React from 'react';

import {Hoc} from '../../../hoc/hoc';
import {DashBoxComponent} from './dashBoxComponent/dashBoxComponent'
export const HomeComponent = props=>{
return(
  <Hoc>
      <DashBoxComponent title="All Interactive Session" icon="file-download"></DashBoxComponent>
      <DashBoxComponent title="Practice Question" icon="file-download"></DashBoxComponent>
      <DashBoxComponent title="Downloads" icon="file-download"></DashBoxComponent>
      <DashBoxComponent title="Ask Questions" icon="file-download"></DashBoxComponent>
                                
</Hoc>
                       
)
}