import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import {
    FormControlLabel,
    FormGroup,
    Typography,
    Button,
    Pagination,
    Grid,
    Checkbox,
} from "@mui/material";
import CardProduct from "./CardProduct"
import { getRequest } from "../../utils/api";

const ProductClient = () => {
    let { prlineid } = useParams()
    const [lines, setLines] = useState([]);
    const [checkedState, setCheckedState] = useState(null);


    const [selectPage, setSelectpage] = useState(1);
    const [totalPage, setTotalpage] = useState();
    const [linesId, setLinesId] = useState([0]);
    const [products, setProducts] = useState([]);


    useEffect(() => {

        let ruta = "/products-client/listall/" + linesId + "?page=" + selectPage;
        if (prlineid && linesId != [0]) {
            setLinesId([...linesId, prlineid]);
            ruta = "/products-client/listall/" + prlineid + "?page=" + selectPage;
        }

        let updatedCheckedState= new Array();
        getRequest(ruta, async (result) => {
            if (result.success) {
                setLines(result.data.lines);
                result.data.lines.map((item, index) =>
                    item.id == prlineid ? updatedCheckedState.push(true) : updatedCheckedState.push(false)
                );

                setSelectpage(result.data.products.current_page); //pagina actual
                setTotalpage(result.data.products.last_page); //total de paginas
                setProducts(result.data.products.data);
                //console.log("Data:", result.data.lines);
            }
        });

  
        setCheckedState(updatedCheckedState)


    }, [selectPage]);

    const handleChange = (e,position) => {
        const findLineId = linesId.filter((item) => item == e.target.value)
        
        
        //console.log("Anterior:",checkedState)
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        //console.log("Actual:",updatedCheckedState)

        setCheckedState(updatedCheckedState)

        console.log("Filter: ", findLineId)
        //console.log(e.target.value)
        //console.log(e.target.checked)


        //falta EVITAR AGREGAR duplicados PENDIENTE!!!!!!!!
        if (findLineId==[]){
            console.log("entro")
            setLinesId([...linesId, parseInt(e.target.value)]);
        }
        console.log("LIneas: ", linesId)

    };

    const handleChangePage = (event, value) => {
        setSelectpage(value);
    };
    const handleFilter = () => {
        alert(linesId)
        setSelectpage(1);
        //console.log(linesFilter);
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
                                        onChange={(e)=>handleChange(e, id)}
                                        inputProps={{
                                            "aria-label": "controlled",
                                        }}
                                        name="linesid"
                                        value={item.id}
                                        checked={checkedState[id]}                                    
                                    />
                                }
                                label={item.name}
                            />
                        ))}
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={()=>handleFilter()}
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
                                    id={item.id}
                                    title={item.name}
                                    price={item.price}
                                    image={item.image}
                                    line={item.nameline}
                                    subline={item.namesubline}
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
                            onChange={handleChangePage}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ProductClient