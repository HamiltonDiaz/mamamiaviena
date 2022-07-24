import React from "react";
import DrawerMenu from "../DrawerMenu/DrawerMenu";
import LineAdmin from "../../components/LineAdmin/LineAdmin"

const LineAdminPage = () => {
    return (
        <DrawerMenu titlePage="Lineas">
            <LineAdmin />
        </DrawerMenu>
    );
};

export default LineAdminPage;
