import React from 'react'
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Sessions from './Sessions'
const index = () => {
  return (
    <DashboardLayout>
        <DashboardNavbar/>
        <Sessions/>
    </DashboardLayout>
  )
}

export default index