import React from "react";
import AppFrame from "./AppFrame";
import { Grid, Link, ImageList, ImageListItem, Box } from "@mui/material";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import Typography from "@mui/material/Typography";
import { routeFacebook } from "../utils/Routes";
import { routeInstagram } from "../utils/Routes";

const itemData = [
    {
        img: require("../assets/wallPage/MFInstagram1.jpeg"),
        title: '',
    },
    {
        img: require("../assets/wallPage/MFInstagram2.jpeg"),
        title: '',
    },
    {
        img: require("../assets/wallPage/MFInstagram3.jpeg"),
        title: '',
    },
    {
        img: require("../assets/wallPage/MFInstagram4.jpeg"),
        title: 'Coffee',
    },
    {
        img: require("../assets/wallPage/MFInstagram5.jpeg"),
        title: '',
    },
    {
        img: require("../assets/wallPage/MFInstagram6.jpeg"),
        title: '',
    },
    {
        img: require("../assets/wallPage/MFInstagram7.jpeg"),
        title: '',
    },
    {
        img: require("../assets/wallPage/MFInstagram8.jpeg"),
        title: '',
    },
    {
        img: require("../assets/wallPage/MFInstagram9.jpeg"),
        title: '',
    },
    {
        img: require("../assets/wallPage/MFInstagram10.jpeg"),
        title: '',
    },
    {
        img: require("../assets/wallPage/MFInstagram11.jpeg"),
        title: '',
    },
    {
        img: require("../assets/wallPage/MFInstagram12.jpeg"),
        title: '',
    },
];



const WallPage = () => {


    const srcset = (image, size, rows = 1, cols = 1) => {
        return {
            src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
            srcSet: `${image}?w=${size * cols}&h=${size * rows
                }&fit=crop&auto=format&dpr=2 2x`,
        };
    }


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
                    <Box sx={{ width: "auto", height:{xs:450, xl:700}, overflowY: 'scroll' }}>
                        <ImageList variant="masonry" cols={3} gap={8}>
                            {itemData.map((item) => (
                                <ImageListItem key={item.img}>
                                    <img
                                        src={`${item.img}?w=248&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>
                </Grid>
            </Grid>
        </AppFrame>
    );
};

export default WallPage;
