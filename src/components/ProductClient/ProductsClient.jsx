import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom"
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
import AccordionProduct from "./AccordionProduct";
import { productClient } from "../../utils/Routes";

const ProductClient = () => {
    let { prlineid } = useParams()
    const routeProduct = useLocation();
    const navigate = useNavigate();
    const [lines, setLines] = useState([]);
    const [sublines, setSublines] = useState([])
    const [checkedState, setCheckedState] = useState(null);
    const [filterProduct, setFilterproduct] = useState(false)
    const [selectPage, setSelectpage] = useState(1);
    const [totalPage, setTotalpage] = useState();
    const [sublinesId, setSubinesid] = useState([0]);
    const [products, setProducts] = useState([]);


    useEffect(() => {
        //console.log(filterProduct)
        let ruta = "/products-client/listall/" + sublinesId + "?page=" + selectPage;
        //console.log(ruta)
        if (prlineid && filterProduct==false) {            
            ruta = "/products-client/listall/" + prlineid + "?page=" + selectPage;
        }

        let updatedCheckedState= new Array();
        getRequest(ruta, async (result) => {
            if (result.success) {
                // console.log("Lines: ", result.data.lines)
                //console.log("SubLines: ", result.data.sublines)
                setLines(result.data.lines);
                setProducts(result.data.products.data);
                setSublines(result.data.sublines)
                result.data.sublines.map((item, index) => {
                    if (item.id == prlineid && filterProduct==false) {
                        updatedCheckedState.push(true)
                        setSubinesid([...sublinesId, parseInt(prlineid)]);
                    } else {
                        updatedCheckedState.push(false)
                    }
                });
                setSelectpage(result.data.products.current_page); //pagina actual
                setTotalpage(result.data.products.last_page); //total de paginas
             
                
            }
        });  
        setCheckedState(updatedCheckedState)
    }, [selectPage]);

    const handleChange = (e,position) => {
        setFilterproduct(true)
        
        //Marcar/desmarca check
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState)
        //Valida si ya esta agregado en el filtro
        const findLineId = sublinesId.filter((item) => item == e.target.value)        
        if (findLineId.length==0){
            //No esta en el array y se agrega
            if (e.target.checked==true){
                setSubinesid([...sublinesId, parseInt(e.target.value)]);
            }
        }else{
            //Si esta en el array y se elimina
            if (e.target.checked==false){
                let newLines= sublinesId.filter((item) => item != e.target.value)
                setSubinesid(newLines);
            }
        }
    };

    const handleChangePage = (event, value) => {
        setSelectpage(value);
    };
    
    const handleFilter = () => {

        const valChecks=checkedState.filter((item)=>item===true)
        if (valChecks.length==0 && routeProduct.pathname!=productClient ) {
            navigate(productClient)
        }

        //console.log(filterProduct)
        if (filterProduct){
            let ruta = "/products-client/listall/" + sublinesId + "?page=" + selectPage;
            getRequest(ruta, async (result) => {
                if (result.success) {
                    setSelectpage(result.data.products.current_page); //pagina actual
                    setTotalpage(result.data.products.last_page); //total de paginas
                    setProducts(result.data.products.data);
                }
            });
        }
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
                            <AccordionProduct 
                            key={`${item}${id}`} 
                            sublines={sublines}
                            line={item} 
                            handleChange={handleChange} 
                            selecteditem={checkedState}/>
                        ))}
                    
                    <Button
                        sx={{marginTop:1}}
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