import React from 'react'
import { Outlet  } from "react-router-dom";
import NavbarLayout from '../components/supervisor/Navbar'
import SidebarLayout from '../components/supervisor/Sidebar'

const SupervisorLayout = () => {

  return (
    <>
      <NavbarLayout />
      <div class="grid grid-rows-4 grid-flow-col gap-4">
          <div class="row-span-2">          
              <SidebarLayout />
          </div>
          <div class="row-span-3 col-span-6">
              <Outlet />
          </div>
      </div>
    </>
  )
}

export default SupervisorLayout