import React from 'react'
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Activities from './Activities';
const index = () => {
  return (
    <DashboardLayout>
        <DashboardNavbar/>
        <Activities/>
    </DashboardLayout>
  )
}

export default index