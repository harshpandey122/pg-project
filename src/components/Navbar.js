import React from "react";
import "./navbar.css"
import { Box,Button } from "@mui/material";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <Box
      width={"100%"}
      p="1rem 6%"
      textAlign={"center"}
      sx={{ boxShadow: 3, mb: 2 }}
    >
    <header className="header">
      <nav className="navbar">
      <Button variant="contained"><NavLink to="/services">Services</NavLink></Button>
      <Button variant="contained"><NavLink to="/homepage">Home</NavLink></Button>
      </nav>
    </header>
    </Box>
  );
};

export default Navbar;
