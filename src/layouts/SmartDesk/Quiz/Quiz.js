/**
=========================================================
* Material Dashboard 2 PRO React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// formik components
import { Formik, Form } from "formik";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

import Questions from './Questions'

import validations from "./schemas/validations";
import form from "./schemas/form";
import initialValues from "./schemas/initialValues";

function getSteps() {
    return ["Question", "Question", "Question", "Question", "Question"];
}

function getStepContent(stepIndex, formData) {
    switch (stepIndex) {
        case 0:
            return <Questions />;
        case 1:
            return <Questions />;
        case 2:
            return <Questions />;
        case 3:
            return <Questions />;
        case 4:
            return <Questions />;
        default:
            return null;
    }
}

function TestForm() {
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();
    const { formId, formField } = form;
    const currentValidation = validations[activeStep];
    const isLastStep = activeStep === steps.length - 1;

    const sleep = (ms) =>
        new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    const handleBack = () => setActiveStep(activeStep - 1);

    const submitForm = async (values, actions) => {
        await sleep(1000);

        // eslint-disable-next-line no-alert
        alert(JSON.stringify(values, null, 2));

        actions.setSubmitting(false);
        actions.resetForm();

        setActiveStep(0);
    };

    const handleSubmit = (values, actions) => {
        if (isLastStep) {
            submitForm(values, actions);
        } else {
            setActiveStep(activeStep + 1);
            actions.setTouched({});
            actions.setSubmitting(false);
        }
    };

    return (

        <MDBox mb={20} mt={0} height="40vh" width="100%">
            <Grid container justifyContent="center" alignItems="center" sx={{ height: "100%", mt:4 ,width:'100%'}}>
                <Grid item xs={12} lg={8}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={currentValidation}
                        onSubmit={handleSubmit}
                    >
                        {({ values, errors, touched, isSubmitting }) => (
                            <Form id={formId} autoComplete="off">
                                <Card sx={{ height: "100%" }}>
                                    <MDBox mx={2} mt={-3}>
                                        <Stepper activeStep={activeStep} alternativeLabel>
                                            {steps.map((label) => (
                                                <Step key={label}>
                                                    <StepLabel>{label}</StepLabel>
                                                </Step>
                                            ))}
                                        </Stepper>
                                    </MDBox>
                                    <MDBox p={3}>
                                        <MDBox>
                                            {getStepContent(activeStep)}
                                            <MDBox mt={2} width="100%" display="flex" justifyContent="space-between">
                                                {activeStep === 0 ? (
                                                    <MDBox />
                                                ) : (
                                                    <MDButton variant="gradient" color="light" onClick={handleBack}>
                                                        back
                                                    </MDButton>
                                                )}
                                                <MDButton
                                                    disabled={isSubmitting}
                                                    type="submit"
                                                    variant="gradient"
                                                    color="dark"
                                                >
                                                    {isLastStep ? "send" : "next"}
                                                </MDButton>
                                            </MDBox>
                                        </MDBox>
                                    </MDBox>
                                </Card>
                            </Form>
                        )}
                    </Formik>
                </Grid>
            </Grid>
        </MDBox>

    );
}

export default TestForm;
