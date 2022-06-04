import React from 'react'
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import { Grid } from '@mui/material';
import ChekoutCard from '../components/Checkout/ChekoutCard';
import Product from '../components/Product/Product';
import products from '../product-data';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: "2rem",
    },
    classProduct:{
        
    },

}));


const CheckOutPage = () => {
    const classes = useStyles();
    const FormRow = () => {
        return (
            <React.Fragment>
                {
                    products.map((item, index) => (
                        <Grid item xs={12} sm={8} md={9} lg={4} key={item.id}>
                            <Product product={item} className={classes.classProduct} />
                        </Grid>
                    ))
                }
            </React.Fragment>
        )
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} >
                    <Typography align='center' gutterBottom variant='h4'>
                        Carrito de Compras
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={9} container spacing={2} >
                    <FormRow />
                </Grid>
                <Grid item xs={12} sm={3} >
                    <Typography align='center' gutterBottom variant='h4'>
                        Total
                    </Typography>
                </Grid>

            </Grid>

        </div>
    )
}


export default CheckOutPage