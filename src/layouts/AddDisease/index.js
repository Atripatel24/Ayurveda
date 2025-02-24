import { useState } from "react";
import Card from "@mui/material/Card";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function AddDisease() {
  const [disease, setDisease] = useState({});

  const diseaseHandler = (e) => {
    setDisease({ ...disease, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data:", disease);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={handleSubmit}>
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Disease Name"
                variant="standard"
                fullWidth
                name="disease_name"
                onChange={diseaseHandler}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Disease Description"
                variant="standard"
                fullWidth
                name="disease_desc"
                onChange={diseaseHandler}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="number"
                label="Minimum Weight (KG)"
                variant="standard"
                fullWidth
                name="min_weight"
                onChange={diseaseHandler}
              />
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton color="info" type="submit" sx={{ backgroundColor: "#4F894F" }}>
                Add
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </DashboardLayout>
  );
}

export default AddDisease;
