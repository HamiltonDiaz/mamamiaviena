import React from "react";
import PropTypes from "prop-types";
import { Avatar, Grid, Typography } from "@mui/material";

import img from "../../assets/picture/sois_toi_meme.jpeg";

const CheckOutCard = ({ product }) => {
    return (
        <Grid container direction="row" justifyContent="flex-start" >
            <Grid item xs={3} sm={3}>
                <Avatar
                    alt="camiseta"
                    src={img}
                    sx={{ width: 70, height: 70 }}
                    variant="square"
                />
            </Grid>
            <Grid item xs={9} sm={9}>
                <Typography variant="p" >
                    <Typography variant="h5">{"camiseta nombre"}</Typography>
                    <Typography variant="h6">{" $50.000"}</Typography>
                </Typography>
            </Grid>
        </Grid>
    );
};

CheckOutCard.propTypes = {};

export default CheckOutCard;
