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

const CoruoselProduct = ({ data }) => {
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
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 0,
                            },
                        }}
                        centeredSlides={true}
                        autoplay={{
                            delay: 4000,
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
                                <Product
                                    product={item}
                                />
                            </SwiperSlide>
                        ))}


                    </Swiper>
                </Grid>
            </Grid>
        </Container>
    );
};
export default CoruoselProduct;
