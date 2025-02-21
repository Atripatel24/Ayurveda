import { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function AddProduct() {
  const [product, setProduct] = useState({});

  const productHandler = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data:", product);
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
                label="Product Name"
                variant="standard"
                fullWidth
                name="product_name"
                onChange={productHandler}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Product Description"
                variant="standard"
                fullWidth
                name="product_desc"
                onChange={productHandler}
              />
            </MDBox>
            <MDBox mb={2}>
              <FormControl variant="standard" fullWidth>
                <InputLabel>Disease Name</InputLabel>
                <Select name="disease_name" onChange={productHandler}>
                  <MenuItem value="Diabetes">Diabetes</MenuItem>
                  <MenuItem value="Hypertension">Hypertension</MenuItem>
                  <MenuItem value="Asthma">Asthma</MenuItem>
                  <MenuItem value="Cancer">Cancer</MenuItem>
                </Select>
              </FormControl>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" type="submit">
                Add
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </DashboardLayout>
  );
}

export default AddProduct;
