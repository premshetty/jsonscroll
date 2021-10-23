import { BUY_CAKE, SELL_CAKE } from "./CakeTypes";

const initialstate = {
  count: 0,
  numofcakes: 10
}
const Cakereducer = (state = initialstate, action) => {

  console.log('cekeredycer '  + state.numofcakes);

  switch (action.type) {
    case BUY_CAKE:
      console.log( 'payload' + action.payload);
      return {
       
        ...state,
        numofcakes: state.numofcakes - action.payload,
        count: state.count + 1,

      }
    case SELL_CAKE:
      return {
        numofcakes: state.numofcakes + action.payload,
        count: state.count - 1
      }
    default:
      return state;
  }


}

export default Cakereducer;