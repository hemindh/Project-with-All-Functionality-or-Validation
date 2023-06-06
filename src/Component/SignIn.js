import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import '../App.css'


const defaultTheme = createTheme();


export default function SignIn() {
  const intialValue = { email: "", password: "" };
  const [formValues, setFormValues] = useState(intialValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  
  const submitForm = () => {
    console.log(formValues);
    navigate('/Dashboard')
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };


  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is Required*";
    } else if (!regex.test(values.email)) {
      errors.email = "Please Enter the valid email format*";
    }
    if (!values.password) {
      errors.password = "password is Required*";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters*";
    }
    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submitForm();
    }
  }, [formErrors]);

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        {/* //Success Message for Sign In  */}
        {/* {Object.keys(formErrors).length === 0 && isSubmitting && (
          <Typography className="success-msg">Signed in successfully</Typography>
        )} */}
        <Container component="main" maxWidth="xs" className="hh">
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          />

          <Avatar
            sx={{ m: 1, bgcolor: "secondary.main", margin: "auto"}}
          ></Avatar>
          <Typography component="h1" variant="h5" sx={{ color:"#044963", fontWeight:"bold"}}>
            Sign in
          </Typography>
          <Box
            onSubmit={handleSubmit}
            component="form"
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              fullWidth
              label="Email Address"
              required
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              autoFocus
              value={formValues.email}
              onChange={handleChange}
              className={formErrors.email && "input-error"}
            />
            {formErrors.email && (
              <Typography className="error" sx={{color:"red" , float:"left"}}>
                {formErrors.email}
              </Typography>
            )}




            <TextField
              margin="normal"
              fullWidth
              type="password"
              name="password"
              label="Password"
              required
              autoComplete="current-password"
              id="password"
              value={formValues.password}
              onChange={handleChange}
              className={formErrors.password && "input-error"}
            />
            {formErrors.password && (
              <Typography className="error" sx={{color:"red" , float:"left"}}>
                {formErrors.password}
              </Typography>
            )}




            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
