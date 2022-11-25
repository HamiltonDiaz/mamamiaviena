import React from "react";
import {
    Typography,
    Button,
    Grid,
    Paper,    
} from "@mui/material";
import { routeImg } from "../../utils/Functions";
import { productClient } from "../../utils/Routes";

const CardProduct = ({
    id,
    title,
    price,
    image,
    description,
    line,
    subline,
}) => {
    return (
        <Paper
            elevation={5}
            sx={{
                width: 200,
                height: 315,
                // backgroundColor: "purple",
                margin: 1,
            }}
        >
            <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                wrap="nowrap"
            >
                <Grid item sx={{ width: 200, height: 170 }}>
                    <img
                        src={routeImg(image)}
                        width={200}
                        height={170}
                        alt={`img-product-${title}`}
                    />
                </Grid>
                <Grid item sx={{ width: 200, padding: 1 }}>
                    <Typography variant="subtitle2" align="left" noWrap>
                        <b>{title}</b>
                    </Typography>
                    <Typography variant="body2" align="left" noWrap>
                        {`Descripción: ${description}`}
                    </Typography>
                    <Typography variant="body2" align="left">
                        {`Precio: ${price}`}
                    </Typography>
                    <Typography variant="caption">
                        {`${line}/${subline}`}
                    </Typography>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        target="_blank"
                        href={`${productClient}/${id}`}
                        color="primary"
                    >
                        Ver
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default CardProduct;
