import { useState } from "react";
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
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axiosHttp from "utils/axios";
import {Snackbar} from "@mui/material";
function Basic() {
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('')
  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const ResetPasswordRequest = () => {
    const payload = {
      email: email,
    }
    console.log(payload)
    axiosHttp.post('v1/auth/forgetpassword', payload).then((res) => {
      console.log(res)
      openSnakBar({ vertical: 'top', horizontal: 'right' })
    }).catch((err) => {
      console.log(err)
    })
  }

  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const openSnakBar = (newState) => {
    setState({ ...newState, open: true });
  };
  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <BasicLayout image={bgImage}>
      <Box sx={{ width: 500 }}>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          style={{
            backgroundColor: '#21C0A0',
            textColor: "#fff"
          }}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Password Reset Email Send to your Email"
          key={vertical + horizontal}
        />
      </Box>
      <Card sx={{ width: "400px", marginLeft: 6, marginTop: 5 }}>
        <MDBox pt={3} pb={3} px={3}>
          <MDBox component="form" role="form">
            <Stack sx={{ marginBottom: 2 }} direction="column" alignItems={"start"} justifyContent={"space-between"}>
              <MDTypography variant="h4" fontWeight="medium" color="Black" mt={1}>
                Reset Password
              </MDTypography>
              <div style={{ marginTop: 10 }}>
                <MDBox mb={2} lineHeight={1}>
                  <MDTypography variant="button" color="text" fontWeight="light">
                    Enter your email address and we will send you
                    instructions to reset your password
                  </MDTypography>
                </MDBox>
              </div>
            </Stack>
            <MDBox mb={2}>
              <MDInput type="email" label="Email" fullWidth onChange={(event) => setEmail(event.target.value)} />
            </MDBox>
            <Grid container justifyContent={"center"}>
              <MDBox sx={{ width: 150 }} mt={4} mb={1}>
                <Button disableElevation size="large" onClick={ResetPasswordRequest} variant="contained" style={{ backgroundColor: '#21C0A0', paddingLeft: 40, paddingRight: 40, color: "#fff" }}>
                  Continue
                </Button>
              </MDBox>
            </Grid >
            <Grid container justifyContent={"center"} mt={4}>
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
            </Grid>
          </MDBox>
        </MDBox>
      </Card>`
    </BasicLayout>
  );
}

export default Basic;
