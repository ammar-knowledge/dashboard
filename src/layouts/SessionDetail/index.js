import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DetailView from "layouts/SessionDetail/components/DetailView";

function Overview() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <DetailView/>
    </DashboardLayout>
  );
}

export default Overview;
