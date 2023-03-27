import { Box } from "@mui/material";
import React from "react";
import { ThreeDots } from "react-loader-spinner";
import Logo from "../Images/logo.png";
const LoadingScreen = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        img: {
          borderRadius: 12,
        },
      }}
    >
      <img src={Logo} alt="logo" />
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        // color="#b39016"
        color="black"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Box>
  );
};

export default LoadingScreen;
