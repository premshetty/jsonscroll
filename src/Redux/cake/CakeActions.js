//action
import  { BUY_CAKE, SELL_CAKE} from './CakeTypes'
export const buycake = (number) =>{
    console.log( 'action' + number);
    return {
         type : BUY_CAKE,
         payload:number
    }
}

export const sellCake =(number)=>{
    return {
        type : SELL_CAKE,
        payload : number
    }
} 