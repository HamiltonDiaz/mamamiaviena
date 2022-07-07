import React from "react";
import DrawerMenu from "../../pages/DrawerMenu/DrawerMenu";
import { Grid, Paper, Typography } from "@mui/material";
import UserImg from "../../assets/Users.png";
import ProductImg from "../../assets/Products.png";
import LineImg from "../../assets/Lines.png";

const HomeAdmin = () => {
    return (
        <DrawerMenu titlePage="Dashboard">
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <Grid
                    item
                    container
                    xs={12}
                    sm={4}
                    lg={2}
                    justifyContent="center"
                >
                    <Paper variant="outlined">
                        <Grid item sx={{ padding: 2 }}>
                            <img src={UserImg} alt="imagen-usuarios" />
                            <Typography variant="subtitle1" align="center">
                                Usuarios
                            </Typography>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid
                    item
                    container
                    xs={12}
                    sm={4}
                    lg={2}
                    justifyContent="center"
                >
                    <Paper variant="outlined">
                        <Grid item sx={{ padding: 2 }}>
                            <img src={LineImg} alt="imagen-lineas" />
                            <Typography variant="subtitle1" align="center">
                                Lineas
                            </Typography>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid
                    item
                    container
                    xs={12}
                    sm={4}
                    lg={2}
                    justifyContent="center"
                >
                    <Paper variant="outlined">
                        <Grid item sx={{ padding: 2 }}>
                            <img src={ProductImg} alt="imagen-productos" />
                            <Typography variant="subtitle1" align="center">
                                Productos
                            </Typography>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </DrawerMenu>
    );
};

export default HomeAdmin;
