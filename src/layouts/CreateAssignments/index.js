import React from 'react'
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import CreateAssignmentForm from './CreateAssignmentForm';


const index = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <CreateAssignmentForm/>
    </DashboardLayout>
  )
}

export default index