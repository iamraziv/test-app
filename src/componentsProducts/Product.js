import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        marginLeft: 75,
        marginTop: 30
    },
    media: {
        height: 140,
    },
    root: {
        flex: 1,
        alignItems:'center',
        justifyContent:'space-around'
    },
    link:{
         textDecoration: 'none' 
    }
});
const Product = (props) => {
    // const products = useSelector(state => state.allProducts.products);
    const products = props.products;

    console.log('Product Page', products);
    debugger;
    const classes = useStyles();
    const renderList = products.map((product) => {
        console.log('Product', product)
        const { id, title, description, category, price, image } = product;
        return (
            <Grid className={classes.root} item xs={3} key={id}>
                <Card className={classes.card} className="col s10">
                    <Link to= {`/product/${id}`}>  
                    <CardMedia
                        style={{ height: 0, paddingTop: "56%" }}
                        className={classes.media}
                        image={image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h4">
                            {title}
                        </Typography>
                        <Typography component="p">${price}</Typography>
                        <Typography component="p">{category}</Typography>
                        <Typography component="p">{description}</Typography>
                    </CardContent>

                </Link>
                </Card>
            </Grid>
         

        );
    })
    return (
        <div >
            <Grid container spacing={12}>
                {renderList}
            </Grid>
        </div>
    );
    //    return (<>{renderList}</>)
}
//export default withStyles(useStyles)(Product);
export default Product;