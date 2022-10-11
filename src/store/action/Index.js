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
export const setSingleProduct = (data)=>{
    return {
        type:ActionTypes.SET_SINGLE_PRODUCT,
        payload : data
        
    }
}