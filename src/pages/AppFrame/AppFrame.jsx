import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Grid from "@mui/material/Grid"
import Toolbar from "@mui/material/Toolbar"
import IconButton from '@mui/material/IconButton'
import Link from "@mui/material/Link"
///mport { Link as LinkRouter} from "react-router-dom"
import Typography from '@mui/material/Typography'
import { IconContext } from 'react-icons/lib'


const AppFrame = ({children}) => {
    //children -> es una palabra reservada NO la puedo usar como propiedad propia
    // es propia del lenguaje
    return (
        <Grid
            container
            justifyContent="center">
            <AppBar position="static">
                <Toolbar variant='dense'>
                    <IconButton color='inherit' aria-label='menu'>
                        <Link 
                            // component={LinkRouter}
                            to="/main"
                            color="inherit">
                            <IconContext.Provider value={{ size: '2em' }}>
                                {/* <WiDaySunny /> */}
                            </IconContext.Provider>
                        </Link>
                    </IconButton>
                    <Typography variant='h6' color="inherit" >
                        ClimaApp
                    </Typography>
                </Toolbar>
            </AppBar>

            <Grid item
                xs={12}
                sm={11}
                md={10}
                lg={8}>
                {children}
            </Grid>

        </Grid>

    )
}

AppFrame.propTypes = {
    children: PropTypes.node.isRequired, //node hace referencia a cualquier elemento de react que sea valido
}

export default AppFrame