import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'


  
const UserDashboard = () => {
  return (
    <>
  
  <AppBar position="static">
  <Toolbar variant="dense">
    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
      {/* <MenuIcon /> */}
    </IconButton>
    <Box>

    </Box>
    <Typography variant="h6" color="inherit" component="div" sx={{fontWeight:"bold",padding:"20px"}}>
    🎯DashboardTheme
    </Typography>
  </Toolbar>
</AppBar>

    </>
  )
}

export default UserDashboard