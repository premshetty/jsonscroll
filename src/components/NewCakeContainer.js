import React, { useState } from 'react'
import { connect } from 'react-redux';
import { buycake, sellCake } from '../Redux/cake/CakeActions';


const NewCakeContainer = (props) => {
    const [number, setNumber] = useState(1)
    let cake = ''
    console.log(props.numofcakes);
    props.numofcakes === 0
        ? cake =
        <div>
            <p>no more cakes available</p>
            <button onClick={props.sellCake} > sell cake </button>
        </div>
        : cake = <div>
            <h1> number of cakes  available in the shop - {props.numofcakes}  </h1>
            <input type='text' onChange={(event) => setNumber(event.target.value)} />
            <button onClick={() => props.buycake(number)} > buy {number} cake </button>
            <button onClick={() => props.sellCake(number)}
                onChange={(event) => setNumber(event.target.value)} >
                sell {number}cake </button>
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
        buycake: (number) => dispatch(buycake(number)),
        sellCake: (number) => dispatch(sellCake(number))
    }
}
export default connect(mapStoreToProps, mapDispatchToProps)(NewCakeContainer);