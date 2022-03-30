import React,{ useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import axios from 'axios';
import { fetchProductsAction } from '../redux/actions/productAction';
import Product from './Product';

const ProductList = () => {
    debugger;
    const products = useSelector((state) => state.allProducts.products)
   // const loading = useSelector((state) => state.products.loading)
   // const error = useSelector((state) => state.products.error)
    console.log("Product List",products)
    const dispatch = useDispatch();
    // const FakeProducts = async () => {
    //     const response = await axios.get("https://fakestoreapi.com/products")
    //     .catch((err)=>{
    //         console.log('Error', err);
    //     })
    //     console.log('Response Data', response.data)
    //     console.log('Response', response)
    //     const pl = response.data
    //     dispatch(setProductsAction(pl))
    // };
    useEffect(()=>{
        dispatch(fetchProductsAction());
    }, [dispatch]);

    return(
        <div className="ui grid">
               <Product products={products}/>
        </div>
    )
}
export default ProductList;
