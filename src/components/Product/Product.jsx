import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { BotonPrimario } from "../../utils/ButtonsCustom";
import { convertNumber } from "../../utils/Functions";
import useMediaQuery from '@mui/material/useMediaQuery';
import img1 from "../../assets/picture/sois_toi_meme.jpeg"

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "22rem",
        //maxHeight:365,
        padding: 5,

    },
    // img: {
    //     maxHeight: 200,
    //     height: "auto",
    // },
    contenido: {
        paddingBottom:"0 !important",
    },
    btnvermas: {
        alignContent: "center",
        justifyContent: "center",
        marginBottom:5    
    },
}));

const Product = ({ product }) => {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:800px)');

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.img}
                component="img"
                image={img1}
                alt="img camiseta"
            />

            <CardContent className={classes.contenido} >

                <Typography variant="subtitle2">
                    {product.name}
                </Typography>

                <Typography variant="subtitle2" color="textSecondary" >
                    {convertNumber(product.price)}
                </Typography>
                <CardActions className={classes.btnvermas}>
                    <BotonPrimario variant="outlined" size={matches? "small" : "large"} >
                        Ver más {product.id}
                    </BotonPrimario>
                </CardActions>
            </CardContent>
        </Card>
    );
};

Product.propTypes = {};

export default Product;
