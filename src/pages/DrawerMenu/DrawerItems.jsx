import React, { useState } from "react";
import {
    List,
    Collapse,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Link as RouterLink } from "react-router-dom";

const DrawerItems = () => {
    const [openList, setOpenList] = useState(false);
    const hadleOpenList = () => {
        setOpenList(!openList);
    };
    return (
        <List>
            <RouterLink
                to="/admin/home"
                style={{
                    textDecoration: "none",
                    color: "inherit",
                }}
            >
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Inicio"} />
                    </ListItemButton>
                </ListItem>
            </RouterLink>
            <RouterLink
                to="/admin/users"
                style={{
                    textDecoration: "none",
                    color: "inherit",
                }}
            >
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <GroupIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Usuarios"} />
                    </ListItemButton>
                </ListItem>
            </RouterLink>

            <ListItemButton onClick={hadleOpenList}>
                <ListItemIcon>
                    <Inventory2Icon />
                </ListItemIcon>
                <ListItemText primary="Productos" />
                {openList ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openList} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <RouterLink
                        to="/admin/lines"
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                        }}
                    >
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <FormatListBulletedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Lineas" />
                        </ListItemButton>
                    </RouterLink>
                    <RouterLink
                        to="/admin/products"
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                        }}
                    >
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <ShoppingBagIcon />
                            </ListItemIcon>
                            <ListItemText primary="Productos" />
                        </ListItemButton>
                    </RouterLink>
                </List>
            </Collapse>
        </List>
    );
};

export default DrawerItems;
