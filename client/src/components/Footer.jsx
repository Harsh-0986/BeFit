import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box mt={"40px"} bgcolor={"fff2f4"}>
      <Stack gap={"40px"} alignItems={"center"} px={"40px"} pt={"24px"}>
        <Typography variant={"h5"} pb={"40px"} mt={"40px"}>
          Made with ❤️ by{" "}
          <a href={"https://about.harshshah.codes"}>Harsh Shah</a>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
