import './App.css';
import Header from './Header';
import Box from './Box';
import Detail from './Detail';
import {Route} from "react-router-dom";
import React from 'react';
import { useDispatch } from 'react-redux';
import { loadWordFB } from './redux/modules/Word';



function App() {
const dispatch = useDispatch();

  return (
    <div className="App">
      <Header />
      <Route  path="/" exact component={Box} />
      <Route  path="/Detail" exact component={Detail} />
    </div>
    
  );
}


export default App;
