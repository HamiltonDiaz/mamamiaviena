import React, { useState, useEffect } from "react";
import {
    FormControlLabel,
    FormGroup,
    Typography,
    Button,
    Pagination,
    Grid,
    Checkbox,
    Paper,
} from "@mui/material";
import { getRequest } from "../../utils/api";
import { routeImg } from "../../utils/Functions";

const CardProduct = ({ title, price, image, description }) => {
    return (
        <Paper
            sx={{
                width: 200,
                height: 300,
                backgroundColor: "purple",
                margin:1
            }}
        >
            <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                wrap="nowrap"
            >
                <Grid item sx={{ width: 200, height: 200 }} >
                    <img
                        src={routeImg(image)}
                        width={200}
                        height={200}
                        alt={`img-product-${title}`}
                    />
                </Grid>
                <Grid item sx={{ width: 200, padding:1 }} >
                    <Typography variant="subtitle2" align="left" noWrap>
                        <b>{title}</b>
                    </Typography>
                    <Typography variant="body2" align="left" noWrap>
                        {`Descripción: ${description}`}
                    </Typography>
                    <Typography variant="body2" align="left">
                        {`Precio: ${price}`}
                    </Typography>

                </Grid>
            </Grid>
        </Paper>
    );
};

export default function ProductClient() {
    const [lines, setLines] = useState([]);
    const [selectPage, setSelectpage] = useState(1);
    const [totalPage, setTotalpage] = useState();

    const [linesId, setLinesId] = useState([0]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        let ruta =
            "/products-client/listall/" + linesId + "?page=" + selectPage;
        getRequest(ruta, async (result) => {
            if (result.success) {
                setLines(result.data.lines);
                setSelectpage(result.data.products.current_page); //pagina actual
                setTotalpage(result.data.products.last_page); //total de paginas
                setProducts(result.data.products.data);
                console.log("Data:", result.data.products.data);
            }
        });
    }, [selectPage]);

    const handleChange = (e) => {
        setLinesId([...linesId, parseInt(e.target.value)]);
    };

    const handleChagePage = (event, value) => {
        setSelectpage(value);
    };
    const handleFilter = (linesFilter) => {
        console.log(linesFilter);
    };

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
        >
            <Grid item xs={12} md={3} sx={{ padding: 2 }}>
                {/* filtros */}
                <Typography variant="h6">Filtros</Typography>
                <FormGroup>
                    {lines &&
                        lines.map((item, id) => (
                            <FormControlLabel
                                key={`${item}${id}`}
                                control={
                                    <Checkbox
                                        onChange={handleChange}
                                        inputProps={{
                                            "aria-label": "controlled",
                                        }}
                                        name="linesid"
                                        value={item.id}
                                    />
                                }
                                label={item.name}
                            />
                        ))}
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => handleFilter(linesId)}
                    >
                        Filtrar
                    </Button>
                </FormGroup>
            </Grid>

            <Grid item xs={12} md={9} sx={{ padding: 2 }}>
                {/* cuerpo */}
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    {/* contenido */}
                    <Grid
                        container
                        item
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        xs={10}
                        sx={{ margin: 1 }}
                    >
                        {products &&
                            products.map((item, id) => (
                                <CardProduct
                                    key={`card${item}${id}`}
                                    title={item.name}
                                    price={item.price}
                                    image={item.image}
                                    description={item.descrip}
                                />
                            ))}
                    </Grid>
                    {/* paginación */}
                    <Grid item xs={2}>                        
                        <Pagination
                            count={totalPage}
                            page={selectPage}
                            color="secondary"
                            onChange={handleChagePage}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
