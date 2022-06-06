import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import ChekoutCard from "../components/Checkout/CheckOutCard";
import products from "../product-data";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: "2rem",
        marginRight:25,
        marginLeft:25
    },
}));

const CheckOutPage = () => {
    const classes = useStyles();
    const FormRow = () => {
        return (
            <React.Fragment>
                {products.map((item, index) => (
                    <>
                        <Grid item sm={7}>
                            <ChekoutCard />
                        </Grid>
                        <Grid item sm={1}>
                            <TextField
                                id="standard-number"
                                label=""
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    min:0
                                }}
                                variant="outlined"
                                
                            />
                        </Grid>
                        <Grid item sm={4}>
                            <Typography variant="h5" align="right">
                                Subtotal
                            </Typography>
                        </Grid>
                    </>
                ))}
            </React.Fragment>
        );
    };

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography align="center" gutterBottom variant="h4">
                        Carrito de Compras
                    </Typography>
                </Grid>

                {/* Encabezados */}
                <Grid container item xs={12} sx={{ margin: 2 }}>
                    <Grid item sm={7}>
                        <Typography variant="h5" align="center">
                            Producto
                        </Typography>
                    </Grid>
                    <Grid item sm={1}>
                        <Typography variant="h5" align="center">
                            Cantidad
                        </Typography>
                    </Grid>
                    <Grid item sm={4}>
                        <Typography variant="h5" align="center">
                            Subtotal
                        </Typography>
                    </Grid>
                </Grid>

                <Grid
                    item
                    xs={12}
                    container
                    spacing={2}
                    direction="row"
                    justifyContent="space-between"
                >
                    <FormRow />
                </Grid>

                <Grid item container xs={12}>
                    <Grid item xs={12} sm={8}></Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography align="center" gutterBottom variant="h4">
                            Total
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default CheckOutPage;
