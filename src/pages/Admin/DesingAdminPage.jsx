import React from "react";
import DrawerMenu from "../DrawerMenu/DrawerMenu";

import DesingAdmin from "../../components/DesingAdmin/DesingAdmin";

const DesingAdminPage = () => {
    return (
        <DrawerMenu titlePage="Diseños">
            <DesingAdmin />
        </DrawerMenu>
    );
};

export default DesingAdminPage;
