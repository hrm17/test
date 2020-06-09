import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

import {Main} from './containers/mainComponent'




function App() {
  return (
    <BrowserRouter>
   <Main></Main>
    </BrowserRouter>
  );
}

export default App;
