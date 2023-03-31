import { Box, Typography } from "@mui/material";
import React from "react";

const ContactUs = () => {
  return (
    <Box>
      <Typography
        variant="h2"
        color="white"
        fontWeight="bold"
        mb={2}
        sx={{ fontSize: { xs: "2.75rem", sm: "3.75rem" } }}
      >
        Contact Us
      </Typography>
      <Typography
        color="white"
        variant="h5"
        sx={{ fontSize: { xs: "1rem", sm: "1.5rem" } }}
      >
        We have a multinational team of experts waiting for you. call us on +90
        535 518 49 04
      </Typography>
    </Box>
  );
};

export default ContactUs;
