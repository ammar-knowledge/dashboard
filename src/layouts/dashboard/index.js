import { useState, useEffect } from "react";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { useNavigate } from 'react-router-dom'
import { GetLocal } from "utils/localStorage";
import ProfileOverview from './components/ProfileOverview'
import DashboardTabs from './components/DashboardTabs'
import FilterDrawer from 'examples/FilterDrawer'
function Dashboard() {

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role,setRole] = useState('instructor')
  const [filterableContent,setFilterableContetn] = useState([{name:"Grades",type:"slider",data:[3, 8]},{name:"Courses",type:'select',data:['Physics',"Chemistry","Maths"]},{name:"Sessions",type:'select',data:['Physics 101',"Chemistry 101","Algebra",'DLD','Data Structures','Algorithms']},{name:"Status",type:"radio",data:['Active',"Draft"]},{name:'Subjects',type:'checkbox',data:['Physics',"Chemistry","Maths"]}])

  const checkUserToken = () => {
    // const tokenData = GetLocal('user-token')
    // const accessToken = tokenData?.access_token || null
    // if (!accessToken || accessToken === null) {
    //   setIsLoggedIn(false)
    //   return navigate('/authentication/sign-in')
    // } else {
    //   setIsLoggedIn(true)
    // }
  }

  useEffect(() => {
    checkUserToken()
  }, [])
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <FilterDrawer role={role} content={filterableContent}/>
      <MDBox py={3}>
      <div>
        <DashboardTabs/>
      </div>
       
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
