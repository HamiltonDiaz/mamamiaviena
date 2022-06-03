import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Zoom from "@mui/material/Zoom";
import HomeIcon from "@mui/icons-material/Home";
import HelpIcon from "@mui/icons-material/Help";
import PaletteIcon from "@mui/icons-material/Palette";
import StarRateIcon from "@mui/icons-material/StarRate";
import StoreIcon from "@mui/icons-material/Store";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import LogoHome from "../../assets/LogoHome.png";
import { Badge, Grid } from "@mui/material";

const fuente = "Caveat"// "Indie Flower"


const useStyles = makeStyles((theme) => ({
    colorTexto: {
        color: "#a9cf55 !important",
        fontWeight: "bold !important",
        backgroundColor: "transparent !important",
        fontFamily: fuente + "!important",
        "&:hover": {
            color: "#FFFFFF !important",
            backgroundColor: "#a9cf55 !important",


        },
    },
    colorTextoQS: {
        color: "#a9cf55 !important",
        fontWeight: "bold !important",
        backgroundColor: "transparent !important",
        borderBottom: 1,
        fontFamily: fuente + "!important",
    },

    imgLogo: {
        maxWidth: 150,
    },
    imgLogoSX: {
        maxWidth: 100,
    },

}));

const ElevationScroll = (props) => {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });
    return React.cloneElement(children, {
        elevation: trigger ? 2 : 0,
        color: trigger ? "primary" : "transparent",
        sx: trigger
            ? { color: "#00000", backgroundColor: "#a9cf55" }
            : { color: "#a9cf55", fontWeight: "bold" },
    });
};

const ScrollTop = (props) => {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            "#irinicio"
        );
        if (anchor) {
            anchor.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    };

    return (
        <Zoom in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: "fixed", bottom: 90, right: 16 }}
            >
                {children}
            </Box>
        </Zoom>
    );
};

const pages = [
    "Inicio",
    "¿Quienes somos?",
    "Nuestros Diseños",
    "Muro de la fama",
    "Zona Outlet",
];

const AppFrame = (props) => {
    const { children } = props;
    const classes = useStyles();


    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const botonMenu = (namebtn) => {
        let icon = null;
        switch (namebtn) {
            case "Inicio":
                icon = <HomeIcon />;
                break;
            case "¿Quienes somos?":
                icon = <HelpIcon />;
                return (
                    <Button
                        key={namebtn}
                        sx={{
                            color: "inherit",
                            fontWeight: "bold",
                            // ":hover": { borderBottom: 5 },
                            fontFamily: fuente
                        }}
                        startIcon={icon}
                        id="demo-positioned-button"
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        onMouseOver={handleClick}
                    >
                        {namebtn}
                    </Button>
                );
            case "Nuestros Diseños":
                icon = <PaletteIcon />;
                break;
            case "Muro de la fama":
                icon = <StarRateIcon />;
                break;
            case "Zona Outlet":
                icon = <StoreIcon />;
                break;
            default:
                icon = <HomeIcon />;
                break;
        }
        return (
            <Button
                key={namebtn}
                sx={{
                    color: "inherit",
                    fontWeight: "bold",
                    ":hover": { borderBottom: 3 },
                    fontFamily: fuente
                }}
                startIcon={icon}
            >
                {namebtn}
            </Button>
        );
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            
                            {/* Menu movil */}
                            <Grid container sx={{ display: { xs: "flex", md: "none" } }} >
                                <Grid item xs={4} >
                                    <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleOpenNavMenu}
                                        color="inherit"
                                    >
                                        <MenuIcon />
                                    </IconButton>


                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorElNav}
                                        anchorOrigin={{
                                            vertical: "bottom",
                                            horizontal: "left",
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: "top",
                                            horizontal: "left",
                                        }}
                                        open={Boolean(anchorElNav)}
                                        onClose={handleCloseNavMenu}
                                        sx={{
                                            display: { xs: "block", md: "none" },
                                        }}
                                    >
                                        {pages.map((page) => (
                                            <MenuItem
                                                key={page}
                                                onClick={handleCloseNavMenu}
                                            >
                                                <Typography
                                                    textAlign="center"
                                                    sx={{ color: "primary", fontFamily: fuente, }}
                                                >
                                                    {page}
                                                </Typography>
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Grid>

                                <Grid item xs={6} >
                                    <Typography component="a" href="" align="center" >
                                        <img
                                            src={LogoHome}
                                            className={classes.imgLogoSX}
                                            alt="LogoHome"
                                        />
                                    </Typography>
                                </Grid>

                                <Grid item xs={2} >
                                    <IconButton color="inherit" aria-label="carrito" size="large" >
                                        <Badge badgeContent={0} color="error" sx={{ "& .MuiBadge-badge": { fontSize: 9, height: 15, minWidth: 10 }}} >
                                            <ShoppingCartIcon />
                                        </Badge>
                                    </IconButton>
                                </Grid>

                            </Grid>
                            {/* fin menu movil */}


                            {/* Toda la pantalla */}
                            <Box sx={{ flexGrow: 1 }}>

                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="a"
                                    href="/"
                                    sx={{
                                        mr: 2,
                                        display: { xs: "none", md: "flex" },
                                    }}
                                >
                                    <img
                                        src={LogoHome}
                                        className={classes.imgLogo}
                                        alt="LogoHome"
                                    />
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    flexGrow: 0,
                                    display: { xs: "none", md: "flex" },
                                }}
                            >
                                <div onClose={handleClose}>
                                    {pages.map((page) => botonMenu(page))}

                                    <IconButton color="inherit" aria-label="carrito" size="large">
                                        <Badge badgeContent={12} color="error" sx={{ "& .MuiBadge-badge": { fontSize: 9, height: 15, minWidth: 10 } }}>
                                            <ShoppingCartIcon />
                                        </Badge>
                                    </IconButton>
                                    <Menu
                                        id="demo-positioned-menu"
                                        aria-labelledby="demo-positioned-button"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        anchorOrigin={{
                                            vertical: "top",
                                            horizontal: "left",
                                        }}
                                        transformOrigin={{
                                            vertical: "top",
                                            horizontal: "left",
                                        }}
                                        sx={{
                                            marginLeft: 1,
                                            marginTop: -1,
                                        }}
                                    >
                                        <Box onMouseLeave={handleClose}>
                                            <MenuItem className={classes.colorTextoQS}>
                                                <HelpIcon />¿Quienes Somos?
                                            </MenuItem>
                                            <MenuItem className={classes.colorTexto}>
                                                Nuestra historia
                                            </MenuItem>
                                            <MenuItem className={classes.colorTexto}>
                                                La creadora
                                            </MenuItem>
                                        </Box>
                                    </Menu>
                                </div>
                            </Box>
                            {/* fin toda la pantalla */}

                        </Toolbar>
                    </Container>
                </AppBar>
            </ElevationScroll>
            <Toolbar id="irinicio" />

            {/* contenido */}
            <Container>
                <Box sx={{ my: 2 }}>
                    {children}
                </Box>
            </Container>

            {/* boton subir */}
            <ScrollTop {...props}>
                <Fab
                    sx={{ backgroundColor: "#a9cf55" }}
                    size="small"
                    aria-label="scroll back to top"
                >
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </React.Fragment>
    );
};

AppFrame.propTypes = {
    children: PropTypes.node.isRequired, //node hace referencia a cualquier elemento de react que sea valido
};
ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

export default AppFrame;