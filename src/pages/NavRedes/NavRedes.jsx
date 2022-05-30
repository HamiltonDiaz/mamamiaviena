import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
}));



const NavRedes = (props) => {
    const classes= useStyles()
    return (
        <>
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <Typography variant="h6">
                        holaaaaaaaaaaaa
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
        </>
    );
};

export default NavRedes;
