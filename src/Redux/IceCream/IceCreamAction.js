import { BUY_ICE_CREAM ,SELL_ICE} from "./IceCreamType";

 export const buyIce = ()=>{
    return  {
        type: BUY_ICE_CREAM
    }
}
 export const sellIce = ()=>{
    return{
        type : SELL_ICE
    }
}
