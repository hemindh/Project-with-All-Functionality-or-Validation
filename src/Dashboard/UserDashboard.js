import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {

  const navigate = useNavigate();

  const handleFormClick = () => {
    navigate('/HookForm')
  }
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            sx={{ fontWeight: "bold", padding: "20px" }}
          >
            🎯DashboardTheme
          </Typography>
        </Toolbar>
      </AppBar>

      <Box>
        <Typography variant="h2" className="welcome">
          Welocome
        </Typography>
      </Box>

      <Box>
        <Typography variant="h5" className="welcomeOne">
          To React , MUI and React-Hook-Form Demo !!!
        </Typography>
      </Box>


      <Box className="btn">
        <Button variant="contained" className="c" onClick={handleFormClick}>
          Click !
        </Button>
      </Box>
    </>
  );
};

export default UserDashboard;
