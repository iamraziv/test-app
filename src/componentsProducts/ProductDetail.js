import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProductAction, removeSelectedProductAction} from '../redux/actions/productAction';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

const ProductDetail = () =>{
    debugger;
    const product = useSelector((state) => state.product);
    //const product = ProductDetail.product;
    console.log('Product Details', product)
 
    const { productId } = useParams();
    console.log(productId);
    const dispatch = useDispatch();
    //----------------Basic Redux--------------------
    // const FetchProductDetail = async () =>{
    //     const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
    //      .catch((err)=>{
    //          console.log('Error', err);
    //      })   
    //      console.log('Response Data', response.data)
    //      dispatch(selectedProductAction(response.data))
    // }
    useEffect(()=>{
        debugger;
            if(productId && productId!=''){
                dispatch(selectedProductAction(productId))
            }
            else{
                dispatch(removeSelectedProductAction())
            }
                
               
                return ()=>{
                            dispatch(removeSelectedProductAction())
                        }
            },[productId])
    return(
        <>
            <h2>Product Detail</h2>
                {
                    
                    Object.keys(product.product).length === 0 ? 
                    <div>Loading...</div>
                    :
                    
                    <Box >
                    <Grid container style={{ flex: 1, flexDirection:'column', justifyContent:'space-around', alignItems:'center' }}>
                     
                      <Card sx={{ maxWidth: 600 }}>
                        <CardMedia
                            component="img"
                            height="220"
                            image={product.product.image}
                            alt={product.product.title}
                        />
                        <CardContent>
                            <Typography variant="h5" component="div" color="text.secondary">
                            {product.product.title}
                            </Typography>
                            <Typography variant="h5" component="div">${product.product.price}</Typography>
                            <Typography component="p">{product.product.category}</Typography>
                            <Typography component="p">{product.product.description}</Typography>
                        </CardContent>
                      </Card>    
                        {/* <Item>
                            <img style={{height : 500, width : '100%'}} src={product.image} alt={product.title} />
                            <h2>{product.title}</h2>
                            <h4>{product.category}</h4>
                            <h5>{product.description}</h5>
                        </Item> */}

                    </Grid>
                    </Box>
                    
                }

        </>
      
    )
}

export default ProductDetail;
