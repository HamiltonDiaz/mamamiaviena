import React from "react";
import DrawerMenu from "../DrawerMenu/DrawerMenu";
import ProductAdmin from "../../components/ProductAdmin/ProductAdmin"

const ProductAdminPage = () => {
    return (
        <DrawerMenu titlePage="Productos">
            <ProductAdmin />
        </DrawerMenu>
    );
};

export default ProductAdminPage;
