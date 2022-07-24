import React from "react";
import UserAdmin from "../../components/UserAdmin/UserAdmin";
import DrawerMenu from '../DrawerMenu/DrawerMenu'

const UserAdminPage = () => {
    return (
        <DrawerMenu titlePage="Usuarios">
            <UserAdmin/>
        </DrawerMenu>
    );
};

export default UserAdminPage;
