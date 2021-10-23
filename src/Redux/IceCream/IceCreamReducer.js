
import { BUY_ICE_CREAM ,SELL_ICE } from "./IceCreamType";


 const iceState = {
    numOfIce : 20,
    count : 0
}
const IceReducer =(state = iceState , action )=>{
 switch (action.type) {
     case BUY_ICE_CREAM:
       return {
           ...state,
           numOfIce : state.numOfIce -1,
           count : state.count +1
       }
       case SELL_ICE:
           return{
               numOfIce : state.numOfIce +1,
               count : state.count -1
           }
 
     default:
       return  state;
 }
}

export default IceReducer;