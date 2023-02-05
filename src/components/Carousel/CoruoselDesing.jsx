import React from "react";
import Product from "../Product/Product";
import Grid from "@mui/material/Grid";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Container } from "@mui/material";
import Desing from "../Product/Desing";

const CoruoselDesing = ({ data }) => {
    const itemFinal={
        id:1000000,
        name:"Ver Todos",
        image: "vermas.jpeg"
    }

    return (
        <Container>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                alignContent="center"
            >
                <Grid item xs={12} lg={12}>
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 6,
                                spaceBetween: 5,
                            },
                        }}
                        centeredSlides={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {data.map((item) => (
                            <SwiperSlide key={item.id}>
                                <Desing
                                    data={item}
                                />
                            </SwiperSlide>
                        ))}

                        <SwiperSlide key={"itemfinal"}>
                            <Desing
                                data={itemFinal}
                            />
                        </SwiperSlide>


                    </Swiper>
                </Grid>
            </Grid>
        </Container>
    );
};
export default CoruoselDesing;
