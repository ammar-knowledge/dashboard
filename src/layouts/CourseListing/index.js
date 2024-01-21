import React from 'react'
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Courses from './Courses';
const index = () => {
  return (
    <DashboardLayout>
        <DashboardNavbar/>
        <Courses/>
    </DashboardLayout>
  )
}

export default index