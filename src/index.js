import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { compose, createStore } from 'redux';


class Demo extends Component{
  render(){
    return (
      <h1>class Demo </h1>
    )
  }
}
const demo =(name)=>{
   
 
  return (
    
    <div>
      <h1>{name} </h1>
    <Demo2  name = 'prem'/>
    <h1> f2 demo </h1>
    </div>
  )
}
function Demo2(props){
  return (
    <div>
     
    <h1>{props.name } </h1>
    <h1> fr demo 2</h1>
    </div>
  )
}
const demo3 = new function(){
  return  (
    <h1> fr demo 3</h1>
  )
}
ReactDOM.render(
  
  <React.StrictMode>
    {/* <App /> */}
    { demo('prem') }
    {/* {demo2() } */}
    {demo3 }
    <Demo />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const outerfunction =()=>{
  let outer = "outer funct "
    let outer2 = "outer funct2 "
  const innerfunction =()=>{
    const innermostfunction =()=>{
      return outer2;
    }
    console.log(innermostfunction() )
    return outer;
  
  }

  console.log(innerfunction())
 
}
 outerfunction();