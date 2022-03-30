import productStoreApi from "../api/productStoreApi";
import { ActionTypes } from "../constants/action-types";
import { call, put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios'
const delay = (ms) => new Promise(res => setTimeout(res, ms))
//const apiUrl = "https://fakestoreapi.com/products"
//-------------Redux Saga-------------
export function getApi() {
    return productStoreApi 
      .get('/products')
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



// const getApi = async()=> {
//   debugger;
//   // const response = await productStoreApi.get('/products')
//   // const allproducts = response.data;
//   // return allproducts
//   return await fetch(apiUrl, {
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

function* fetchProducts(){
  try{
    const products = yield call(getApi);
    console.log("Product Saga", products);
    yield put({
      type: ActionTypes.FETCH_PRODUCTS_SUCCESS,
      payload: products
    })
  }
  catch(err){
    yield put({
      type: ActionTypes.FETCH_PRODUCTS_FAILS,
      message: err.message
    })
  }
}

function* watchFetchProducts() {
    yield takeLatest(ActionTypes.FETCH_PRODUCTS, fetchProducts)
}

export default watchFetchProducts;

















  //   try {
  //       const response = productStoreApi.call('/products');
  //       console.log("Product Saga", response)
  //       yield delay(1000)
  //       //console.log("Product Saga1", response)
  //       yield put({ 
  //           type: ActionTypes.FETCH_PRODUCTS, 
  //           payload: response.data 
  //       })
  //   } catch (error) {
  //     console.log("Error", error)
  //   }
  // }
  // export default function* watchFetchProducts() {
  //   yield takeLatest(ActionTypes.FETCH_PRODUCTS, fetchProducts)
  // }

//--------------End of Redux Saga----------

