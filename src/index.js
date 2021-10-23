import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { compose, createStore } from 'redux';


ReactDOM.render(
  
  <React.StrictMode>
    <App />
   
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const outerfunction =()=>{
//   let outer = "outer funct "
//     let outer2 = "outer funct2 "
//   const innerfunction =()=>{
//     const innermostfunction =()=>{
//       return outer2;
//     }
//     console.log(innermostfunction() )
//     return outer;
  
//   }

//   console.log(innerfunction())
 
// }
//  outerfunction();