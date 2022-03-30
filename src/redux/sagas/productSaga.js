import productStoreApi from "../api/productStoreApi";
import { ActionTypes } from "../constants/action-types";
import { call, put, takeLatest, all } from 'redux-saga/effects';

//const apiUrl = "https://fakestoreapi.com/products"
//-------------Redux Saga-------------
export function getApi(id) {
  return productStoreApi 
    .get(`/products/${id}`)
    .then(response => {
      console.log("Response data:", response.data);
      return response.data;
    })
    .catch(error => {
      console.log(
        "Error"
      );
      return error;
    });
}


// const getApi = async(id)=> {
//   debugger;
//   const apiUrl =  `https://fakestoreapi.com/products/${id}`
//   return await fetch(apiUrl,{
//     method: 'GET',
//     headers: {
//       'Content-Type': 'appllication/json'
//     }
//   })
//   .then((response)=>response.json())
//     .catch((error) => {
//       console.log("Error",error);
// })
// }

function* fetchProduct(action){
  debugger;
  try{
      debugger;
    const product = yield call(getApi,action.payload.id);
    console.log("Product Saga", product);
    yield put({
      type: ActionTypes.SELECTED_PRODUCT_SUCCESS,
      payload: product
    })
  }
  catch(err){
    yield put({
      type: ActionTypes.SELECTED_PRODUCT_FAIL,
      message: err.message
    })
  }
}

function* watchFetchProduct() {
    yield takeLatest(ActionTypes.SELECTED_PRODUCT, fetchProduct)
}

export default watchFetchProduct;

// export function getData(input_id) {
//     return axios
//       .get(global.baseURL,{ID:input_id})
//       .then(response => {
//         console.log("Response data:", response.data);
//         return response.data;
//       })
//       .catch(error => {
//         console.log(
//           "123-------------Network error to be solved--------------------"
//         );
//         return error;
//       });
//  }