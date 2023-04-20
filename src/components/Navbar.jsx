import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const styles = {
  logo: {
    width: "48px",
    height: "48px",
    margin: "0 20px",
  },
  exerciseLink: {
    textDecoration: "none",
    color: "#3A1212",
  },
  homeLink: {
    textDecoration: "none",
    color: "#3A1212",
    borderBottom: "3px solid #FF2625",
  },
};

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-around"}
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img src={Logo} alt="Logo" style={styles.logo} />
      </Link>
      <Stack
        direction="row"
        gap={"40px"}
        fontSize={"24px"}
        alignItems={"flex-end"}
      >
        <Link to="/" style={styles.homeLink}>
          Home
        </Link>
        <a href="#exercises" style={styles.exerciseLink}>
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
