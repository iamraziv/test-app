
import {ActionTypes} from "../constants/action-types"

const initialState = {
    product:{}
}

export const selectedProductReducer = (state=initialState, action) => {
    debugger;
    switch (action.type) {
        case ActionTypes.SELECTED_PRODUCT:
           // let productId = action.payload;
            return {...state, loading:true}
        case ActionTypes.SELECTED_PRODUCT_SUCCESS:
            let product = action.payload;
            return {
                ...state, 
                loading:false,
                product
            }
        case ActionTypes.SELECTED_PRODUCT_FAIL:
           return {...state, loading:false}

        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {
                ...state,
                product:{}
            }    
        default:
            return state
    }
}