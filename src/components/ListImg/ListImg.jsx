import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import ModalImg from "./ModalImg";

const ListImg = () => {
    const matches = useMediaQuery("(min-width:811px)");
    const [imgModal,setImgModal]=  useState("")
    const [titleModal,setTitleModal]=  useState("")

    //Values for modal
    const [open, setOpen] = useState(false)
    const handleOpen = (imgModal,titlemodal) => {
        setImgModal(imgModal)
        setTitleModal(titlemodal)
        setOpen(true)
    }
    const handleClose = () => setOpen(false)

    return (
        <React.Fragment>
            <ModalImg handleClose={handleClose} open={open} imgModal={imgModal} titleModal={titleModal} />

            <Typography
                variant="h5"
                align="center"
                sx={{ display: { md: "none" } }}
            >
                Nuestros Diseños
            </Typography>
            <Typography
                variant="h3"
                align="center"
                sx={{ display: { xs: "none", md: "block" } }}
            >
                Nuestros Diseños
            </Typography>
            <ImageList
                sx={{ width: "100%", height: "100%" }}
                cols={matches ? 5 : 2}
            >
                {itemData.map((item) => (
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
                ))}
            </ImageList>
        </React.Fragment>
    );
};

export default ListImg;

const itemData = [
    {
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        title: "Breakfast",
        author: "@bkristastucchio",
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        title: "Burger",
        author: "@rollelflex_graphy726",
    },
    {
        img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
        title: "Camera",
        author: "@helloimnik",
    },
    {
        img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
        title: "Coffee",
        author: "@nolanissac",
        cols: 2,
    },
    {
        img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
        title: "Hats",
        author: "@hjrc33",
        cols: 2,
    },
    {
        img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
        title: "Honey",
        author: "@arwinneil",
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
        title: "Basketball",
        author: "@tjdragotta",
    },
    {
        img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
        title: "Fern",
        author: "@katie_wasserman",
    },
    {
        img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
        title: "Mushrooms",
        author: "@silverdalex",
        rows: 2,
        cols: 2,
    },
    {
        img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
        title: "Tomato basil",
        author: "@shelleypauls",
    },
    {
        img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
        title: "Sea star",
        author: "@peterlaster",
    },
    {
        img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
        title: "Bike",
        author: "@southside_customs",
        cols: 2,
    },
];
