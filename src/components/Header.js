import React, { useState } from 'react'
import { Box, AppBar, Toolbar, Button, Typography} from '@mui/material'
import { Link } from 'react-router-dom'


const Header = () => {
   
  return ( 
    <>
      <AppBar position='sticky'>
        <Toolbar>
          <Typography variant='h4'>
            AMBULA TASK
          </Typography>
            
          <Box display={'flex'} marginLeft='auto'>
            
            <Button sx={{ margin: 1, color: 'white' }} LinkComponent={Link} to="/">Home</Button>
            <Button sx={{ margin: 1, color: 'white' }} LinkComponent={Link} to="/About">About Us</Button>
            <Button sx={{ margin: 1, color: 'white' }} LinkComponent={Link} to="/Contact">Contact Us</Button>
            <Button sx={{ margin: 1, color: 'white' }} LinkComponent={Link} to="/Todolist">TodoList</Button>
            <Button sx={{ margin: 1, color: 'white' }} LinkComponent={Link} to="/Weatherapi">weather-api</Button>
            <Button sx={{ margin: 1, color: 'white' }} LinkComponent={Link} to="/Shopping">Shopping-cart</Button>
         
          </Box>
        </Toolbar>
      </AppBar>
    </> 
  )
} 

export default Header
