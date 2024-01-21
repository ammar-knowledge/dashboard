import React from 'react'
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import CreateQuizForm from './CreateQuizForm';


const index = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <CreateQuizForm/>
    </DashboardLayout>
  )
}

export default index