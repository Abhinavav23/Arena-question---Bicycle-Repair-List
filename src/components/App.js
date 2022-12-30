import React, {Component, useState} from "react";
import '../styles/App.css';
import { BicycleForm } from "./BicycleForm";
import { BicycleList } from "./BicycleList";

const App = () => {
  return (
      <div id="main">
          <h1>Bicycle Repair App</h1>
         <BicycleForm/>
         <BicycleList/>
      </div>
  )
}


export default App;
