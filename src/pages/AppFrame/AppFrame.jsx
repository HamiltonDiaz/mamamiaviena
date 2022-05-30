import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Zoom from "@mui/material/Zoom";

import Tooltip from '@mui/material/Tooltip';
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";

const useStyles = makeStyles((theme) => ({

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


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const AppFrame = (props) => {
    const { children } = props;
    const classes = useStyles();

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  

    return (
        <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...props}   >
            <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}  >
                  <Typography textAlign="center" sx={{color:"inherit"}} >{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'inherit', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
            </ElevationScroll>
            <Toolbar id="irinicio" />

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