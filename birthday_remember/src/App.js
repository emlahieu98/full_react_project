
import React , {useState} from 'react'
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
function App() { 
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home}></Route>
      <Route path="/profile/:name" component={Profile}></Route>
    </BrowserRouter>
  );
}

export default App;
