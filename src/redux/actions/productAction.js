import  {ActionTypes}  from "../constants/action-types"
//import productStoreApi from "../api/productStoreApi";
//import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'


export const fetchProductsAction = (products) => {
    debugger;
    return {
        type: ActionTypes.FETCH_PRODUCTS,
        payload: products
    }
}

//-------------Redux Thunk------------------

// export const fetchProductsAction = () => async(dispatch)=>{
//         const response = await productStoreApi.get('/products');
//         dispatch({
//             type:ActionTypes.FETCH_PRODUCTS,
//             payload:response.data
//         })
// }

// export const fetchProductAction = (id) => async(dispatch)=>{
//     const response = await productStoreApi.get(`/products/${id}`);
//     dispatch({
//         type:ActionTypes.SELECTED_PRODUCT,
//         payload:response.data
//     })
// }
//-------------------End of Redux Thunk----------------------------
// export const setProductsAction = (products) => {

//     return {
//         type: ActionTypes.SET_PRODUCTS,
//         payload: products
//     }
// }
export const selectedProductAction = (id) => {
    debugger;
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: {id}
    }
}
export const removeSelectedProductAction = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
        payload: {}
    }
}