import React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

import imgNueva from "../../assets/picture/sois_toi_meme.jpeg";
import ItemWall from "./ItemWall"

// const useStyles = makeStyles((theme) => ({
//     "& .swiper": {
//         width: "100%",
//         height: "100%",
//         marginLeft: "auto",
//         marginRight: "auto",
//     },

//     "& .swiper-slide": {
//         width: "100%",
//         height: "100%",
//     },
//     "& .swiper-slide img": {
//         width: "50%",
//         height: "50%",
//     },
//     mySwiper:{

//     }
// }));

const CarouselWall = () => {
    // const classes = useStyles();
    return (
        <Grid container spacing={2}>
            <>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <ItemWall/>
                        Slide 1
                    </SwiperSlide>
                    <SwiperSlide>
                        <ItemWall/>
                        Slide 2
                    </SwiperSlide>
                    <SwiperSlide>
                        <ItemWall/>
                        Slide 3
                    </SwiperSlide>
                    <SwiperSlide>
                        <ItemWall/>
                        Slide 4
                    </SwiperSlide>
                    <SwiperSlide>
                        <ItemWall/>
                        Slide 5
                    </SwiperSlide>
                    <SwiperSlide>
                        <ItemWall/>
                        Slide 6
                    </SwiperSlide>
                    <SwiperSlide>
                        <ItemWall/>
                        Slide 7
                    </SwiperSlide>
                    <SwiperSlide>
                        <ItemWall/>
                        Slide 8
                    </SwiperSlide>
                    <SwiperSlide>
                        <ItemWall/>
                        Slide 9
                    </SwiperSlide>
                </Swiper>
            </>
        </Grid>
    );
};

export default CarouselWall;
