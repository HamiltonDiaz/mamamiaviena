import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import img1 from "../../assets/picture/sois_toi_meme.jpeg"
//../../assets/picture/sois_toi_meme.jpe

const Desing = ({ urlImg }) => {
    return (
        <Card style={{ width: "10rem" }}>
            <Card.Img  src={process.env.PUBLIC_URL + urlImg} />
            <Card.ImgOverlay>
                <Card.Body>
                    <Button
                        variant="info"
                        className="position-absolute bottom-0 start-50 translate-middle-x mb-2"
                        style={{ color: "white" }}
                    >
                        Ver
                    </Button>
                </Card.Body>
            </Card.ImgOverlay>
        </Card>
    );
};

export default Desing;
