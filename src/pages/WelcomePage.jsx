import React from "react";
import AppFrame from "./AppFrame";
import imgHome from "../assets/ImgHome2.png";
import imgHomeMovil from "../assets/ImgHome2Movil.png";
import Grid from "@mui/material/Grid";

const WelcomePage = () => {
    return (
        <AppFrame>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                alignContent="center"
                sx={{
                    display: { xs: "none", lg: "flex" },
                }}
            >
                <Grid item>
                    <img src={imgHome} alt="imagen Home" />
                </Grid>
            </Grid>

            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{
                    backgroundColor: "#F2AD9F !important",
                    display: { xs: "flex", lg: "none" },
                }}
            >
                <Grid item>
                    <img src={imgHomeMovil} alt="imagen Home" />
                </Grid>
            </Grid>
        </AppFrame>
    );
};

export default WelcomePage;
