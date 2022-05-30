import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { BotonPrimario } from "../../utils/ButtonsCustom";
import { convertNumber } from "../../utils/Functions";

const img1 = "/picture/sois_toi_meme.jpeg";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        //maxHeight: 400,
        padding: 5,
    },
    // img: {
    //     maxHeight: 200,
    //     height: "auto",
    // },
    // contenido: {
    //     padding: 0,
    //     marginBottom: 0,
    //     maxHeight: 100,
    // },
    btnvermas: {
        alignContent: "center",
        justifyContent: "center",
        margin: 0,
    },
}));

const Product = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.img}
                component="img"
                image={img1}
                alt="img camiseta"
            />

            <CardContent className={classes.contenido}>
                <Typography variant="h5" color="text.secondary">
                    Camiseta "Sois toi-même"
                </Typography>
                <Typography variant="h6" color="textSecondary">
                    {convertNumber(50000)}
                </Typography>
                <CardActions className={classes.btnvermas}>
                    <BotonPrimario variant="outlined" size="small">
                        Ver más
                    </BotonPrimario>
                </CardActions>
            </CardContent>
        </Card>
    );
};

Product.propTypes = {};

export default Product;
