import React from "react";
import { Grid, Link } from "@mui/material";
import imgFacebook from "../../assets/facebook.png";
import imgInstagram from "../../assets/instagram.png";
import {routeFacebook} from "../../utils/Routes"
import {routeInstagram} from "../../utils/Routes"

const NavRedes = () => {
    return (
        
            <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="stretch"
                sx={{  height:"25px", marginTop:"1px"}}
            >
                <Grid item  sx={{marginX:"5px"}} >
                    <Link target="_blank" href={routeFacebook}>
                        <img width={35} src={imgFacebook} alt="image-facebook" />
                    </Link>
                </Grid>
                <Grid item sx={{marginX:"5px"}}>
                    <Link target="_blank" href={routeInstagram}>
                        <img width={35} src={imgInstagram} alt="image-instagram" />
                    </Link>
                </Grid>
            </Grid>
        
    );
};

export default NavRedes;
