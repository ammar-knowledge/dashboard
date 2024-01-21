import React, {useState} from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import ContentEditor from "./ContentEditor";
function Content() {
    return (
        <DashboardLayout>
            <ContentEditor />
        </DashboardLayout>
    );
}
export default Content

