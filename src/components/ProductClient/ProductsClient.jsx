import React, { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import Pagination from "@mui/material/Pagination";
import Grid from "@mui/material/Grid";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { getRequest } from "../../utils/api";

const CardProduct = () => {
    return (
        <Grid item xs={12} md={3} xl={2}>
            <Card style={{ margin: 5 }}>
                <Card.Img
                    style={{ padding: 10 }}
                    variant="top"
                    src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1849c689add%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1849c689add%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22106.63333511352539%22%20y%3D%2296.6%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Grid>
    );
};

export default function ProductClient() {
    const [lines, setLines] = useState([]);
    const [linesId, setLinesId] = useState({ linesid: [] });

    const [products, setProducts] = useState([]);
    useEffect(() => {
        getRequest("/products-client/listAll" , async (result) => {
            if (result.success) {
                setLines(result.data.lines)
                //setProduct(result.data.data);
                // console.log(result.data);
            }
        });
    }, [lines]);

    const handleChange = (e) => {
        console.log(e.target.checked);
        console.log(e.target.value);

        // setLines({
        //     ...lines,
        //     linesid: e.target.value,
        // });
    };

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item xs={12} md={3}>
                {/* filtros */}

                {
                    lines &&
                        lines.map((item, id) => (
                            <Checkbox
                                onChange={handleChange}
                                inputProps={{ "aria-label": "controlled" }}
                                name="linesid"
                                value={item.id}
                                key={`${item}${id}`}
                                label={item.name}
                            />
                        ))
                }
            </Grid>

            <Grid item xs={12} md={9}>
                {/* cuerpo */}

                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        item
                        xs={10}
                        sx={{ height: "90vh !important" }}
                    >
                        {/* contenido */}

                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                    </Grid>
                    <Grid item xs={2} sx={{ height: "10vh !important" }}>
                        {/* paginación */}
                        <Pagination count={10} color="secondary" />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
