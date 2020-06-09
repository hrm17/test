import React from 'react';


import {Header} from './header/header';
import {Section} from './section/section';
import {Hoc} from '../../hoc/hoc';
import {Footer} from '../footer/footer';


export const Home=(props)=> {
  return (
    <Hoc>
    <Header></Header>
    <Section></Section>
    <Footer></Footer>
    </Hoc>
  );
}

export default Home;