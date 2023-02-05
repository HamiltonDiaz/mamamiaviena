import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { BotonPrimario } from "../../utils/ButtonsCustom";
import { convertNumber , routeImg} from "../../utils/Functions";
import useMediaQuery from "@mui/material/useMediaQuery";




const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth:350,
        //maxHeight:365,
        padding: 5,
    },
    img: {
        maxHeight: 200,
        minWidth:180,
        // objectFit: {lg:"fill !important", xs:"scale-down !important"},
        objectFit:"fill !important",
        
    },
    contenido: {
        paddingBottom: "0 !important",
    },
    btnvermas: {
        alignContent: "center",
        justifyContent: "center",
        marginBottom: 5,
    },
}));

const Desing = ({ data }) => {
    const classes = useStyles();
    const matches = useMediaQuery("(min-width:800px)");

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.img}
                component="img"
                image={routeImg(data.image)}
                alt={"img" + data.name}
            />

            <CardContent className={classes.contenido} >

                <Typography variant="subtitle2">
                    {data.name}
               </Typography>

                <CardActions className={classes.btnvermas}>
                    <BotonPrimario variant="outlined" size={matches? "small" : "large"} target="_blank" href={""} >
                        Ver más
                    </BotonPrimario>
                </CardActions>
            </CardContent>
        </Card>    
    );
};

export default Desing;
