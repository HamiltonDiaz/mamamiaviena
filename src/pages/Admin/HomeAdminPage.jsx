import React from 'react'
import HomeAdmin from '../../components/HomeAdmin/HomeAdmin'
import DrawerMenu from '../DrawerMenu/DrawerMenu'


const HomeAdminPage = () => {
  return (
    <DrawerMenu titlePage="Inicio">
        <HomeAdmin/>
    </DrawerMenu>
  )
}

export default HomeAdminPage