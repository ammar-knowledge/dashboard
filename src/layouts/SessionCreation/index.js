import React, {useState} from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import SessionEditor from "./SessionEditor";
function Content() {
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SessionEditor />
        </DashboardLayout>
    );
}
export default Content

