/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";

function ProfileInfoCard({ title, description, info, social, action, shadow }) {
    const labels = [];
    const values = [];
    const { socialMediaColors } = colors;
    const { size } = typography;

    Object.keys(info).forEach((el) => {
        if (el.match(/[A-Z\s]+/)) {
            const uppercaseLetter = Array.from(el).find((i) => i.match(/[A-Z]+/));
            const newElement = el.replace(uppercaseLetter, ` ${uppercaseLetter.toLowerCase()}`);

            labels.push(newElement);
        } else {
            labels.push(el);
        }
    });

    // Push the object values into the values array
    Object.values(info).forEach((el) => values.push(el));

    // Render the card info items
    const renderItems = labels.map((label, key) => (
        <MDBox key={label} display="flex"  pr={2}>
            <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
                {label}: &nbsp;
            </MDTypography>
            <MDTypography variant="button" fontWeight="regular" color="text">
                &nbsp;{values[key]}
            </MDTypography>
        </MDBox>
    ));

    // Render the card social media icons

    return (
        <Card sx={{ height: "100%", boxShadow: !shadow && "none",alignItems:'start',height:'100%' }}>
            <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={2}>
                <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                    {title}
                </MDTypography>
            </MDBox>
            <MDBox>
                <MDBox  lineHeight={1}>
                    <MDTypography variant="button" color="text" fontWeight="light">
                        {description}
                    </MDTypography>
                </MDBox>
                <MDBox opacity={0.3}>
                    <Divider />
                </MDBox>
                <MDBox>
                    {renderItems}
                </MDBox>
            </MDBox>
        </Card>
    );
}

// Setting default props for the ProfileInfoCard
ProfileInfoCard.defaultProps = {
    shadow: true,
};

// Typechecking props for the ProfileInfoCard
ProfileInfoCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    info: PropTypes.objectOf(PropTypes.string).isRequired,
    social: PropTypes.arrayOf(PropTypes.object).isRequired,
    action: PropTypes.shape({
        route: PropTypes.string.isRequired,
        tooltip: PropTypes.string.isRequired,
    }).isRequired,
    shadow: PropTypes.bool,
};

export default ProfileInfoCard;
