import React from "react";
import { Link, Typography } from "@mui/material";

function Footer() {
  return (
    <Typography
      variant="body2"
      align="center"
      p={1}
      mt={2}
      bottom="15px"
      sx={{ color: "beige" }}
    >
      {"Copyright © "}
      <Link color="inherit">Hoai Anh</Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Footer;
