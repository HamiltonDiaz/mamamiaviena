import React from "react";
import DrawerMenu from "../../pages/DrawerMenu/DrawerMenu";
import { Grid, Paper, Typography } from "@mui/material";
import UserImg from "../../assets/Users.png";
import ProductImg from "../../assets/Products.png";
import LineImg from "../../assets/Lines.png";
import SublineImg from "../../assets/Sublines.png";
import DiseniosImg from "../../assets/Disenios.png";
import { Link as RouterLink } from "react-router-dom";
import { adminDesing, adminLines, adminSublines, adminProducts} from "../../utils/Routes"

const HomeAdmin = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{overflowY:'scroll'}}
        >
            <Grid item container xs={12} sm={4} lg={2} justifyContent="center">
                <RouterLink
                    to="/admin/users"
                    style={{
                        textDecoration: "none",
                        color: "inherit",
                    }}
                >
                    <Paper variant="outlined">
                        <Grid item sx={{ padding: 2 }}>
                            <img src={UserImg} alt="imagen-usuarios" />
                            <Typography variant="subtitle1" align="center">
                                Usuarios
                            </Typography>
                        </Grid>
                    </Paper>
                </RouterLink>
            </Grid>
            <Grid item container xs={12} sm={4} lg={2} justifyContent="center">
                <RouterLink
                    to={adminLines}
                    style={{
                        textDecoration: "none",
                        color: "inherit",
                    }}
                >
                    <Paper variant="outlined">
                        <Grid item sx={{ padding: 2 }}>
                            <img src={LineImg} alt="imagen-lineas" />
                            <Typography variant="subtitle1" align="center">
                                Lineas
                            </Typography>
                        </Grid>
                    </Paper>
                </RouterLink>
            </Grid>

            <Grid item container xs={12} sm={4} lg={2} justifyContent="center">
                <RouterLink
                    to={adminSublines}
                    style={{
                        textDecoration: "none",
                        color: "inherit",
                    }}
                >
                    <Paper variant="outlined">
                        <Grid item sx={{ padding: 2 }}>
                            <img src={SublineImg} alt="imagen-sublineas" />
                            <Typography variant="subtitle1" align="center">
                                SubLineas
                            </Typography>
                        </Grid>
                    </Paper>
                </RouterLink>
            </Grid>

            <Grid item container xs={12} sm={4} lg={2} justifyContent="center">
                <RouterLink
                    to={adminDesing}
                    style={{
                        textDecoration: "none",
                        color: "inherit",
                    }}
                >
                    <Paper variant="outlined">
                        <Grid item sx={{ padding: 2 }}>
                            <img src={DiseniosImg} alt="imagen-subdisenios" />
                            <Typography variant="subtitle1" align="center">
                                Diseños
                            </Typography>
                        </Grid>
                    </Paper>
                </RouterLink>
            </Grid>    

            <Grid item container xs={12} sm={4} lg={2} justifyContent="center">
                <RouterLink
                    to={adminProducts}
                    style={{
                        textDecoration: "none",
                        color: "inherit",
                    }}
                >
                    <Paper variant="outlined">
                        <Grid item sx={{ padding: 2 }}>
                            <img src={ProductImg} alt="imagen-productos" />
                            <Typography variant="subtitle1" align="center">
                                Productos
                            </Typography>
                        </Grid>
                    </Paper>
                </RouterLink>
            </Grid>
        </Grid>
    );
};

export default HomeAdmin;
