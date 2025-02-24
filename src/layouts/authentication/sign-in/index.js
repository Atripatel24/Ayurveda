import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import BasicLayout from "layouts/authentication/components/BasicLayout";
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import Swal from "sweetalert2";

function Basic() {
  // State for email and password
  const [user, setUser] = useState({});
  const navidate = useNavigate();

  let userHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    // let user = { email, password };
    console.log("User Data:", user);
    if (user.email == "admin" && user.password == "admin") {
      navidate("/dashboard");
    } else {
      Swal.fire({
        title: "error !",
        text: "Invalid Credentials",
        icon: "error",
      });
    }
  };

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          sx={{ backgroundColor: "#4F894F" }}
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={handleSubmit}>
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Email"
                fullWidth
                // value={email}
                name="email"
                onChange={userHandler}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Password"
                fullWidth
                // value={password}
                name="password"
                onChange={userHandler}
              />
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton type="submit" sx={{ backgroundColor: "#4F894F" }} color="info" fullWidth>
                Sign In
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
