import React from "react";
import DrawerMenu from "../DrawerMenu/DrawerMenu";
import SublineAdmin from "../../components/SublineAdmin/SublineAdmin"

const SubLineAdminPage = () => {
    return (
        <DrawerMenu titlePage="SubLineas">
            <SublineAdmin />
        </DrawerMenu>
    );
};

export default SubLineAdminPage;
