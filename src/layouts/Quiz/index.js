import React from 'react'
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Quiz from './Quiz';
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

const index = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar/>
      <Quiz/>
    </DashboardLayout>
  )
}

export default index