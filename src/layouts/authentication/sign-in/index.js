import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import BasicLayout from "layouts/authentication/components/BasicLayout";
import bgImage from "assets/images/AuthBackground.png";
import { Grid, Stack } from "@mui/material";
import FirebaseSocial from "../components/FirebaseSocial";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axiosHttp from "utils/axios";
import { useNavigate } from 'react-router-dom';
import { SaveLocal } from "utils/localStorage";
import { Snackbar, SnackbarContent } from "@mui/material";
import { GetLocal } from "utils/localStorage";

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [signInError, setSignInError] = useState()
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
    message: "",
    error: false
  });
  const { vertical, horizontal, open, message, error } = state
  const openSnakBar = (newState, message) => {
    setState({ ...newState, open: true, message: message, error: error });
  };
  const handleClose = () => {
    setState({ ...state, open: false });
  };

  useEffect(() => {
    // const token = GetLocal('user-token')
    // console.log(token)
    // if(token && token !== undefined){
    //   navigate('/dashboard')
    // }
  }, [])


  const handleNavigation = () => {
    if (!signInError) {
      openSnakBar({ vertical: 'top', horizontal: 'right' }, "Logged in Suuccessfully", false)
    } else if (signInError) {
      openSnakBar({ vertical: 'top', horizontal: 'right' }, "Error While Logging in", true)
    }

  }
  const handleLogin = () => {
    const payload = {
      email: email,
      password: password
    }

    axiosHttp.post('/api/user/sign_in', payload).then((res) => {
      if (res.data.token) {
        openSnakBar({ vertical: 'top', horizontal: 'right' }, "Logged in Suuccessfully", false)
        const userData = res.data.user
        const tokenData = res.data.token
        SaveLocal('user-data', userData)
        SaveLocal('user-token', tokenData)
        handleNavigation()
        navigate('/dashboard')
      }else{
        openSnakBar({ vertical: 'top', horizontal: 'right' }, "Error While Logging in", true)
      }
      setSignInError(false)
    }).catch((err) => {
      openSnakBar({ vertical: 'top', horizontal: 'right' }, "Error While Logging in", true)
      setSignInError(true)
    })
  }



  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        style={{
          backgroundColor: error ? '#EB5757' : '#EB5757',
          textColor: "#fff"
        }}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
        key={vertical + horizontal}
      >
        <SnackbarContent
          style={{
            backgroundColor: error ? '#EB5757' : '#EB5757',
            textColor: "#fff"
          }}
          message={<span id="client-snackbar">{message}</span>}
        />
      </Snackbar>
      <BasicLayout image={bgImage}>
        <Card sx={{ width: "400px", marginLeft: 6, marginTop: 5 }}>
          <MDBox pt={0} pb={0} px={3}>
            <MDBox component="form" role="form">
              <Stack sx={{ marginBottom: 2 }} direction="row" alignItems={"center"} justifyContent={"space-between"}>
                <MDTypography variant="h4" fontWeight="medium" color="Black" mt={1}>
                  Sign in
                </MDTypography>
              </Stack>
              <MDBox mb={2}>
                <MDInput type="email" value={email} label="Email" fullWidth onChange={(event) => setEmail(event.target.value)} />
              </MDBox>
              <MDBox mb={2}>
                <MDInput type="password" label="Password" value={password} fullWidth onChange={(event) => setPassword(event.target.value)} />
              </MDBox>
              <MDBox display="flex" alignItems="center" justifyContent="space-between" ml={-1}>
                <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                <MDTypography
                  variant="button"
                  fontWeight="regular"
                  color="text"
                  onClick={handleSetRememberMe}
                  sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                >
                  &nbsp;&nbsp;Remember me
                </MDTypography>
              </MDBox>
              <Grid container justifyContent={"center"}>
                <MDBox sx={{ width: 150 }} mt={4} mb={1}>
                  <Button disableElevation size="large" variant="contained" onClick={handleLogin} style={{ backgroundColor: '#21C0A0', paddingLeft: 40, paddingRight: 40, color: "#fff" }}>
                    Continue
                  </Button>
                </MDBox>
              </Grid >
              <Grid container justifyContent={"center"}>
                <MDTypography
                  component={Link}
                  to="/authentication/reset-password"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Forgot Password
                </MDTypography>
              </Grid>
              <MDBox mt={3} mb={1} textAlign="center">
                <MDTypography variant="button" color="text">
                  Don&apos;t have an account?{" "}
                  <MDTypography
                    component={Link}
                    to="/authentication/sign-up"
                    variant="button"
                    color="info"
                    fontWeight="medium"
                    textGradient
                  >
                    Sign up
                  </MDTypography>
                </MDTypography>
              </MDBox>
              <FirebaseSocial />
            </MDBox>
            <div style={{ marginTop: 20 }}>
              <MDBox mb={2} lineHeight={1}>
                <MDTypography variant="button" color="text" fontWeight="light">
                  By signing in, you agree to our Terms of Service and Privacy Policy
                  Copyright © 2023 Upbrainery. All rights reserved
                </MDTypography>
              </MDBox>
            </div>
          </MDBox>
        </Card>`
      </BasicLayout>
    </>
  );
}

export default Basic;
