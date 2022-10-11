import { ActionTypes } from "../constant/Action-Types";

const initialState =

{
    darkMode: false,
    Products: [],
    featureProducts: [],
    singleProduct:{
        
    },
    
};

export const ToggleReducer = (state = initialState, action) => {

   
    switch (action.type) {
        case ActionTypes.SET_TOGGLE:
            return {
                darkMode: !state.darkMode
            }
        case ActionTypes.SET_PRODUCTS:
            const featureData = action.payload.filter((curElem) => {
                return curElem.featured === true
            })
            return {
                ...state,
                Products: action.payload,
                featureProducts: featureData,
            };
            case ActionTypes.SET_SINGLE_PRODUCT:
                return {
                    ...state,
                    singleProduct:action.payload
                }
        default:
            return state;
    }

}
