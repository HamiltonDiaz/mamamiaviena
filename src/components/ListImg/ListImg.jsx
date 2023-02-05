import React, { useState, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "@mui/material/Container";
import ModalImg from "./ModalImg";
import { getRequest } from "../../utils/api";
import { routeImg } from "../../utils/Functions";


const ListImg = () => {
    const matches = useMediaQuery("(min-width:811px)");
    const [imgModal, setImgModal] = useState("")
    const [titleModal, setTitleModal] = useState("")

    const [dataDesing, setDatadesing] = useState([])
    useEffect(() => {
        getRequest("/products-client/desing/alldesings", async (result) => {
            if (result.success) {
                //console.log(result.data);
                setDatadesing(result.data);
            }
        });

    }, []);



    //Values for modal
    const [open, setOpen] = useState(false)
    const handleOpen = (imgModal, titlemodal) => {
        setImgModal(imgModal)
        setTitleModal(titlemodal)
        setOpen(true)
    }
    const handleClose = () => setOpen(false)

    return (
        <Container>
            <ModalImg handleClose={handleClose} open={open} imgModal={imgModal} titleModal={titleModal} handleOpen={handleOpen} />

            <Typography
                variant="h5"
                align="center"
                sx={{
                    display: { md: "none" },
                    color: "#F2AD9F !important"
                }}
            >
                Nuestros Diseños
            </Typography>
            <Typography
                variant="h3"
                align="center"
                sx={{
                    display: { xs: "none", md: "block" },
                    color: "#F2AD9F !important",
                }}
            >
                Nuestros Diseños
            </Typography>
            <ImageList
                sx={{ width: "100%", height: "100%" }}
                cols={matches ? 5 : 2}
            >
                {/* {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img src={item.img} alt={item.title} loading="lazy" />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={item.author}
                            actionIcon={
                                <IconButton
                                    // sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                                    sx={{ color: "rgba(242, 105, 104, 0.8)" }}
                                    aria-label={`info about ${item.title}`}
                                    onClick={()=>handleOpen(item.img,item.title)}
                                >
                                    <ImageSearchIcon fontSize="medium" />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))} */}

                {
                    dataDesing &&
                    dataDesing.map((item) => (
                        <ImageListItem key={item.image} sx={{width:"85% !important", borderColor:"#F2AD9F !important", border:1, borderStyle:"dashed" }}>
                            <img src={routeImg(item.image)} alt={item.name} loading="lazy"  />
                            <ImageListItemBar
                                title={item.name}
                                //subtitle={item.author}
                                actionIcon={
                                    <IconButton
                                        sx={{ color: "rgba(169, 207, 85)" }}
                                        //sx={{ color: "rgba(242, 173, 159, 0.9)" }}
                                        aria-label={`info about ${item.title}`}
                                        onClick={() => handleOpen(item.image, item.name, item.descrip)}
                                    >
                                        <ImageSearchIcon fontSize="large" />
                                    </IconButton>
                                }
                            >


                            </ImageListItemBar>
                        </ImageListItem>
                    )

                    )
                }
            </ImageList>
        </Container>
    );
};

export default ListImg;