import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buycake,sellCake } from "../Redux/cake/CakeActions";
const HooksCakeContainer =()=>{
  const numofcakes = useSelector( state => state.cake.numofcakes )
  const dispatch = useDispatch()
  return (
      <div>
          <h1>hooks num of cakes - { numofcakes} </h1>
          <button onClick = {()=> dispatch(buycake()) } > buy CakeTypes</button>
          <button onClick = {()=> dispatch(sellCake()) } > sell CakeTypes</button>
      </div>
  )
}
export default HooksCakeContainer;