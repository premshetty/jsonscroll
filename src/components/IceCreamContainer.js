import React from 'react'
import { connect } from 'react-redux';
import {buyIce,sellIce} from '../Redux/IceCream/IceCreamAction';
 const iceContainer = (props) => {
    let cake = ''
    props.numOfIce === 0 
        ? cake =
        <div>
            <p>no more ice cream available</p>
            <button onClick={props.sellIce} > sell ice </button>
        </div>
        : cake = <div>
            <h1> number of ice  available in the shop - {props.numOfIce}  </h1>
            <button onClick={props.buyIce} > buy ice </button>
            <button onClick={props.sellIce} > sell ice </button>
            <h3> cart - {props.count} </h3>
        </div>
    return cake;
}


const mapStoreToProps = state => {
    return {
        numOfIce: state.Ice.numOfIce,
        count: state.Ice.count
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyIce: () => dispatch(buyIce()),
        sellIce : ()=>dispatch(sellIce())
      
    }
}
export default connect(mapStoreToProps, mapDispatchToProps)(iceContainer);
