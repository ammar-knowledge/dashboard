import React, {useEffect, useState} from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import SmartDesk from "./SmartDesk";
import {setMiniSidenav,useMaterialUIController} from "context";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function Content() {
    const [controller, dispatch] = useMaterialUIController();
    useEffect(() => {
        setMiniSidenav(dispatch, true);
    },[])
    return (
        <DashboardLayout>
            <DashboardNavbar/>
            <SmartDesk />
        </DashboardLayout>
    );
}
export default Content

