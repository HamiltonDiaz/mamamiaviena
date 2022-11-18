import React from "react";
import AppFrame from "./AppFrame";
import { Grid, Link } from "@mui/material";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import Typography from "@mui/material/Typography";
import { routeFacebook } from "../utils/Routes";
import { routeInstagram } from "../utils/Routes";

const IframeInstagram = () => {
    return (
        <div>
            <iframe
                src="https://snapwidget.com/embed/1016766"
                // class="snapwidget-widget"
                allowTransparency="true"
                frameBorder="0"
                scrolling="yes"
                style={{
                    width: "100%",
                    height: "600px",
                    border: "none",
                    margin:5
                }}
            ></iframe>
        </div>
    );
};



const WallPage = () => {
    return (
        <AppFrame>
            {/* <Wall/> */}
            <Grid
                container
                spacing={1}
                direction="row"
                justify="center"
                alignItems="center"
                alignContent="center"
            >
                <Grid
                    item
                    xs={12}
                    md={4}
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={2}
                    sx={{ height: { xs: "300px", md: "500px" } }}
                >
                    {/* siguenos */}

                    <Grid item>
                        <Typography variant="h5" color="initial">
                            Síguenos
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Link target="_blank" href={routeInstagram}>
                            <img
                                width={80}
                                src={instagram}
                                alt="image-instagram"
                            />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link target="_blank" href={routeFacebook}>
                            <img
                                width={80}
                                src={facebook}
                                alt="image-facebook"
                            />
                        </Link>
                    </Grid>
                    {/* fin siguenos */}
                </Grid>

                <Grid item xs={12} md={8} >
                    {/* publicaciones instagram */}
                    <IframeInstagram />
                </Grid>
            </Grid>
        </AppFrame>
    );
};

export default WallPage;
