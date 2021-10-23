import React from "react"
import { connect } from "react-redux"
import { buycake, sellCake } from '../Redux/cake/CakeActions';
const ItemContainer = (props)=>{
    console.log( props.newitem);
    return (
        <div>
            <h1>ITEM - {props.item } </h1>
            <button onClick={props.newitem} > buy more</button>
            
        </div>
    )
}

const mapStoreToProps = ( state , useprops) =>{
    const newpeops = useprops.cake ? state.cake.numofcakes : state.Ice.numOfIce;
    return {
        item : newpeops
    }
}

const mapDispatchToProps =( dispatch,ownprops) =>{
    const newprops = ownprops.cake ? dispatch(buycake() ) : dispatch ( sellCake())
 return {
     newitem : newprops
 }
}

export default connect( mapStoreToProps,mapDispatchToProps) (ItemContainer);


