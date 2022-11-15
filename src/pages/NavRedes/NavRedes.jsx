import React from "react";
import { Grid, Link } from "@mui/material";

import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import { Box } from "@mui/system";

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
                    <Link target="_blank" href="https://www.facebook.com">
                        <img width={35} src={facebook} alt="image-facebook" />
                    </Link>
                </Grid>
                <Grid item sx={{marginX:"5px"}}>
                    <Link target="_blank" href="https://www.instagram.com">
                        <img width={35} src={instagram} alt="image-instagram" />
                    </Link>
                </Grid>
            </Grid>
        
    );
};

export default NavRedes;
