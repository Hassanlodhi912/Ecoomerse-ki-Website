import { ActionTypes } from "../constant/Action-Types";
export const setToggle = ()=>{
    return{
        type:ActionTypes.SET_TOGGLE
    }
}
export const setProducts = (products)=>{
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload : products
        
    }
}