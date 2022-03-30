import styled from 'styled-components';
import './App.css';
import Header from './Header';
import Box from './Box';
import Detail from './Detail';
import {Route, Switch} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <div>
      <Header />
      </div>
      <div>
      </div>
      <Route exact path="/" component={Box} />
      <Route exact path="/Detail" component={Detail} />
    </div>
    
  );
}


export default App;
