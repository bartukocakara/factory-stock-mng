import React from 'react'
import { Sidebar } from 'flowbite-react'
import { FaBeer } from 'react-icons/fa';
import { Link } from 'react-router-dom'
const SidebarLayout = () => {
  return (
    <div className="w-fit bg-gray-50">
        <Sidebar aria-label="Sidebar with multi-level dropdown example">
            <Sidebar.Items>
            <Sidebar.ItemGroup>

                <Link to="dashboard">
                    Dashboard
                </Link>
                <Sidebar.Collapse
                icon={FaBeer }
                label="E-commerce"
                >
                <Link to="products">
                    Products
                </Link>
                </Sidebar.Collapse>
            </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    </div>
  )
}

export default SidebarLayout