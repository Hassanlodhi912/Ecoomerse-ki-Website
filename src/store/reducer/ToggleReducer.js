import { ActionTypes } from "../constant/Action-Types";
const initialState = 
    [
        {
            darkMode: false
        },
      
    ]

export const ToggleReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_TOGGLE:
            return {
                darkMode: !state.darkMode
            }
        default:
            return state;
    }

}