import React from 'react';
import {withRouter} from 'react-router-dom'
import './dashboard.css'

import {Navbar} from '../navBar/navbar'
import {Hoc} from '../../hoc/hoc';
import Section from './section/section'
import {Footer} from '../footer/footer';


 const Dashboard=(props)=> {
  
  return (
    <Hoc>
    <div class="body">
   <Navbar auth={true}></Navbar>
   <Section path={props.location.pathname}></Section>
  
    <Footer></Footer>
    </div>
    </Hoc>
  );
}

export default withRouter(Dashboard)