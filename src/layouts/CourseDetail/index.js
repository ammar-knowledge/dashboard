import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import CourseDetail from "layouts/CourseDetail/components/DetailView";

function Overview() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <CourseDetail/>
    </DashboardLayout>
  );
}

export default Overview;
