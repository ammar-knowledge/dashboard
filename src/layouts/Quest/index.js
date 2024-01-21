import React from 'react'
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Quest from './Quest'
const index = () => {
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <Quest />
        </DashboardLayout>
    )
}

export default index