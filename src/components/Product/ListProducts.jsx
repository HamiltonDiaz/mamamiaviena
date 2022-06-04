import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from './Product';
import products from '../../product-data';

const ListProducts = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                {products.map(product => (
                    <Grid item xs={12} sm={3} lg={2} key={product.id}>
                        <Product product={product}/>
                    </Grid>
                ))}

            </Grid>
        </Box>
    );
}

export default ListProducts