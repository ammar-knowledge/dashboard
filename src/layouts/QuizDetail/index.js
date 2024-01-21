import React ,{useEffect} from 'react'
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DetailPage from './DetailPage';
import { setMiniSidenav, useMaterialUIController } from "context";

const index = () => {
  const [controller, dispatch] = useMaterialUIController();
  useEffect(() => {
    setMiniSidenav(dispatch, true);
  }, [])
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <DetailPage />
    </DashboardLayout>
  )
}

export default index