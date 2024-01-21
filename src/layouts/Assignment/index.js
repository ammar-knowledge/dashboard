import React from 'react'
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Assignment from './Assignment';
const index = () => {
  return (
    <DashboardLayout>
        <DashboardNavbar/>
        <Assignment/>
    </DashboardLayout>

)
}

export default index