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
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Zoom from "@mui/material/Zoom";
import Fade from '@mui/material/Fade';
import HomeIcon from "@mui/icons-material/Home";
import HelpIcon from "@mui/icons-material/Help";
import PaletteIcon from "@mui/icons-material/Palette";
import StarRateIcon from "@mui/icons-material/StarRate";
import StoreIcon from "@mui/icons-material/Store";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";

const LogoHome = "/picture/LogoHome.png";

const useStyles = makeStyles((theme) => ({
    colorTexto:{
        color:"#a9cf55 !important",
        fontWeight:"bold !important",
        "&:hover": { color: "#FFFFFF !important", backgroundColor: "#a9cf55 !important"}
    },
    imgLogo:{
        maxWidth:150
    }
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
                sx={{ position: "fixed", bottom: 16, right: 16 }}
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
                    <div key={namebtn}>
                        <Button
                            
                            sx={{
                                color: "inherit",
                                fontWeight: "bold",
                                ":hover": { borderBottom: 5 },
                            }}
                            startIcon={icon}
                            id="fade-button"
                            aria-controls={open ? "fade-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onMouseOver={handleClick}                            
                        >
                            {namebtn}
                        </Button>
                        <Menu
                            id="fade-menu"
                            MenuListProps={{
                                "aria-labelledby": "fade-button",
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                            sx={{marginLeft:2}}
                            
                        >
                            <MenuItem onClick={handleClose} className={classes.colorTexto}>Nuestra historia</MenuItem>
                            <MenuItem onClick={handleClose} className={classes.colorTexto}>La creadora</MenuItem>
                        </Menu>
                    </div>
                );

                break;
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
                    ":hover": { borderBottom: 5 },
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
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    display: { xs: "none", md: "flex" },
                                    fontFamily: "monospace",
                                    fontWeight: 700,
                                    letterSpacing: ".3rem",
                                    color: "inherit",
                                    textDecoration: "none",
                                }}
                            >
                                <img src={LogoHome} className={classes.imgLogo} />
                            </Typography>

                            <Box
                                sx={{
                                    flexGrow: 1,
                                    display: { xs: "flex", md: "none" },
                                }}
                            >
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
                                                sx={{ color: "inherit" }}
                                            >
                                                {page}
                                            </Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>

                            {/* Toda la pantalla */}
                            <Box sx={{ flexGrow: 1 }}>
                                <Typography
                                    variant="h5"
                                    noWrap
                                    component="a"
                                    href=""
                                    sx={{
                                        mr: 2,
                                        display: { xs: "flex", md: "none" },
                                        flexGrow: 1,
                                        fontFamily: "monospace",
                                        fontWeight: 700,
                                        letterSpacing: ".3rem",
                                        color: "inherit",
                                        textDecoration: "none",
                                    }}
                                >
                                    <img src={LogoHome} className={classes.imgLogo} />
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    flexGrow: 0,
                                    display: { xs: "none", md: "flex" },
                                }}
                            >
                                {pages.map((page) => botonMenu(page))}
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </ElevationScroll>
            <Toolbar id="irinicio" />

            {/* contenido */}
            <Container>
                <Box sx={{ my: 2 }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Aperiam facere sunt quo, dignissimos cumque deserunt,
                    aliquid quam, officia illum iure eum possimus quae non id
                    amet necessitatibus sed. Quaerat, enim. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Natus assumenda quam
                    itaque minus animi delectus veniam facere, maiores, enim
                    iure velit. Quae pariatur voluptate aspernatur blanditiis
                    laboriosam vitae, sunt facere. Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Explicabo tenetur omnis
                    debitis. Expedita dignissimos ut nesciunt, aperiam eum enim
                    consequuntur minus consequatur nostrum a explicabo soluta
                    repellat, rerum facere consectetur! Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Sapiente est tempore
                    dolor, nam quia odit ipsa molestiae illo consectetur,
                    aspernatur provident minima beatae fugit nihil assumenda
                    velit qui recusandae illum? Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Ratione alias autem molestias,
                    doloremque repellendus quaerat tempore officiis dolore odio,
                    accusantium perferendis. Architecto recusandae error
                    suscipit autem enim quibusdam perferendis consequuntur.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis corporis sunt numquam, enim eveniet dolor
                    ducimus sapiente illum id suscipit, ex, magnam tenetur
                    cumque vel consequatur eaque. Unde, eligendi doloribus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates, laudantium suscipit perspiciatis ipsam
                    necessitatibus aspernatur dolorum commodi quam repellendus
                    laboriosam, deleniti nisi maxime, quis perferendis
                    cupiditate totam fugit facilis eveniet! Lorem, ipsum dolor
                    sit amet consectetur adipisicing elit. Ullam quaerat
                    accusamus debitis voluptatibus sed repudiandae alias quidem,
                    blanditiis nemo error mollitia iure necessitatibus animi
                    molestias modi ipsa expedita nisi tempora. Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit. Error, doloribus,
                    fugit assumenda officia odit sunt, quam eaque atque ad dicta
                    suscipit soluta recusandae ullam libero asperiores labore et
                    nam optio! Deserunt, id voluptatum ipsum aliquid repudiandae
                    iste vel fugit dolorem, tenetur voluptatibus rerum pariatur
                    explicabo soluta. Ex molestiae voluptas, reprehenderit,
                    quidem quod illo, praesentium libero accusantium unde labore
                    aspernatur amet? Recusandae, dolores placeat. Ullam libero
                    excepturi, optio adipisci sit temporibus et alias dolores
                    inventore neque. Architecto, debitis tenetur hic laborum
                    reprehenderit quidem quo at, a, ad mollitia ipsa
                    consequuntur labore. Pariatur ipsum ullam rerum quos
                    quisquam aut perspiciatis dolorum atque repellendus ratione
                    possimus, voluptatem tempore animi qui minima minus
                    distinctio ipsam! Quas voluptatibus libero laboriosam
                    veritatis molestiae. Dolorem, accusantium voluptatem! Vitae
                    deleniti in obcaecati maxime omnis, id dolores, perspiciatis
                    expedita dolorum esse odit commodi, quas quod nobis beatae.
                    Cum in quis fugit ipsa fuga delectus expedita saepe
                    consectetur officiis eligendi? Praesentium consectetur
                    architecto nesciunt consequatur, magni laboriosam laudantium
                    tempora, distinctio fugiat quis ipsa quod ad explicabo hic
                    officia iure corporis fugit autem cumque sequi, delectus
                    ducimus. Odio placeat quas suscipit?
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
