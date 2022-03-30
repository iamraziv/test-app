import {ActionTypes} from "../constants/action-types"

const initialState = {
    products: [],
    loading: false,
    error: null,
    //product:{}
}

export const productReducer = (state=initialState, action) => {
    debugger;
    switch (action.type) {
          case ActionTypes.FETCH_PRODUCTS:
          return {
              ...state, 
              loading: true,
              //products:payload
            }
            case ActionTypes.FETCH_PRODUCTS_SUCCESS:
                let products = action.payload;
            return {
              ...state, 
              loading: false,
              products
            }
            case ActionTypes.FETCH_PRODUCTS_FAILS:
          return {
              ...state, 
              loading: false,
            }
        //   case ActionTypes.SET_PRODUCTS:
        //   return {...state, products:action.payload}
          default:
            return state
    }
}

// export const selectedProductReducer = (state=initialState, action) => {
//     debugger;
//     switch (action.type) {
//         case ActionTypes.SELECTED_PRODUCT:
//            // let productId = action.payload;
//             return {...state, loading:true}
//         case ActionTypes.SELECTED_PRODUCT_SUCCESS:
//             let product = action.payload;
//             return {
//                 ...state, 
//                 loading:false,
//                 product
//             }
//         case ActionTypes.SELECTED_PRODUCT_FAIL:
//            return {...state, loading:false}

//         case ActionTypes.REMOVE_SELECTED_PRODUCT:
//             return {
//                 ...state,
//                 product:{}
//             }    
//         default:
//             return state
//     }
// }