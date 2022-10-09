import { ActionTypes } from "../constant/Action-Types";
const initialState =

{
    darkMode: false,
    Products: [],
    featureProducts: [],
};



export const ToggleReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_TOGGLE:
            return {
                darkMode: !state.darkMode
            }
        case ActionTypes.SET_PRODUCTS:
            const featureData = action.payload.filter((curElem) => {
                return   curElem.featured === true
            })
            return {
                ...state,
                featureProducts: featureData,
            };
        default:
            return state;
    }

}
