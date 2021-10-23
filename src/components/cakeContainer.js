import React from 'react'
import { connect } from 'react-redux';
import { buycake, sellCake } from '../Redux/cake/CakeActions';


const CakeContainer = (props) => {
    let cake = ''
    props.numofcakes === 0
        ? cake =
        <div>
            <p>no more cakes available</p>
            <button onClick={props.sellCake} > sell cake </button>
        </div>
        : cake = <div>
            <h1> number of cakes  available in the shop - {props.numofcakes}  </h1>
            <button onClick={props.buycake} > buy cake </button>
            <button onClick={props.sellCake} > sell cake </button>
            <h3> cart - {props.count} </h3>
        </div>
    return cake;
}


const mapStoreToProps = state => {
    return {
        numofcakes: state.cake.numofcakes,
        count: state.cake.count
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buycake: () => dispatch(buycake()),
        sellCake: () =>  dispatch(sellCake()) 
    }
}
export default connect(mapStoreToProps, mapDispatchToProps)(CakeContainer);