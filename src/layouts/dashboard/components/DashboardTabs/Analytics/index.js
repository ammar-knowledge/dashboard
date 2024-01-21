import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import MDBox from "components/MDBox";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import { useNavigate } from 'react-router-dom'
import DefaultDoughnutChart from "examples/Charts/DoughnutCharts/DefaultDoughnutChart";
import PolarChart from "examples/Charts/PolarChart";
import RadarChart from "examples/Charts/RadarChart";
import PieChart from "examples/Charts/PieChart";
import BubbleChart from "examples/Charts/BubbleChart";
import MixedChart from "examples/Charts/MixedChart";
import VerticalBarChart from "examples/Charts/BarCharts/VerticalBarChart";
import HorizontalBarChart from "examples/Charts/BarCharts/HorizontalBarChart";
import verticalBarChartData from "layouts/dashboard/data/verticalBarChartData";
import defaultDoughnutChartData from "layouts/dashboard/data/defaultDoughnutChartData";
import bubbleChartData from "layouts/dashboard/data/bubbleChartData";
import horizontalBarChartData from "layouts/dashboard/data/horizontalBarChartData";
function Dashboard() {
    const { sales, tasks } = reportsLineChartData;
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

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
    })
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={3}>
                    <MDBox mb={1.5}>
                        <ComplexStatisticsCard
                            color="dark"
                            icon="weekend"
                            title="Bookings"
                            count={281}
                            percentage={{
                                color: "success",
                                amount: "+55%",
                                label: "than lask week",
                            }}
                        />
                    </MDBox>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <MDBox mb={1.5}>
                        <ComplexStatisticsCard
                            icon="leaderboard"
                            title="Today's Users"
                            count="2,300"
                            percentage={{
                                color: "success",
                                amount: "+3%",
                                label: "than last month",
                            }}
                        />
                    </MDBox>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <MDBox mb={1.5}>
                        <ComplexStatisticsCard
                            color="success"
                            icon="store"
                            title="Revenue"
                            count="34k"
                            percentage={{
                                color: "success",
                                amount: "+1%",
                                label: "than yesterday",
                            }}
                        />
                    </MDBox>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <MDBox mb={1.5}>
                        <ComplexStatisticsCard
                            color="primary"
                            icon="person_add"
                            title="Followers"
                            count="+91"
                            percentage={{
                                color: "success",
                                amount: "",
                                label: "Just updated",
                            }}
                        />
                    </MDBox>
                </Grid>
            </Grid>
            <MDBox mt={4.5}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={4}>
                        <MDBox mb={3}>
                            <ReportsBarChart
                                color="info"
                                title="website views"
                                description="Last Campaign Performance"
                                date="campaign sent 2 days ago"
                                chart={reportsBarChartData}
                            />
                        </MDBox>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <MDBox mb={3}>
                            <ReportsLineChart
                                color="success"
                                title="daily sales"
                                description={
                                    <>
                                        (<strong>+15%</strong>) increase in today sales.
                                    </>
                                }
                                date="updated 4 min ago"
                                chart={sales}
                            />
                        </MDBox>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <MDBox mb={3}>
                            <ReportsLineChart
                                color="dark"
                                title="completed tasks"
                                description="Last Campaign Performance"
                                date="just updated"
                                chart={tasks}
                            />
                        </MDBox>
                    </Grid>
                </Grid>
            </MDBox>
            <MDBox>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={12}>
                        <MDBox mb={3}>
                            <VerticalBarChart
                                icon={{ color: "info", component: "leaderboard" }}
                                title="Vertical Bar Chart"
                                description="Sales related to age average"
                                chart={verticalBarChartData}
                            />
                        </MDBox>
                    </Grid>
                </Grid>
            </MDBox>
            <MDBox>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={12}>
                        <MDBox mb={3}>
                            <DefaultDoughnutChart
                                icon={{ color: "info", component: "leaderboard" }}
                                title="Default Doughnut Chart"
                                description="Affiliates program"
                                chart={defaultDoughnutChartData}
                            />
                        </MDBox>
                    </Grid>
                </Grid>
            </MDBox>
            <MDBox>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={6}>
                        <MDBox mb={3}>
                            <BubbleChart
                                height={300}
                                icon={{ color: "info", component: "leaderboard" }}
                                title="Bubble Chart"
                                description="Users divided by regions"
                                chart={bubbleChartData}
                            />
                        </MDBox>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <HorizontalBarChart
                            icon={{ color: "info", component: "leaderboard" }}
                            title="Horizontal Bar Chart"
                            description="Sales related to age average"
                            chart={horizontalBarChartData}
                        />
                    </Grid>

                </Grid>
            </MDBox>
        </>
    );
}

export default Dashboard;
