import { Box, Stack, IconButton } from "@mui/material";
import { ArrowForward, ArrowBack, Close } from "@mui/icons-material";
import React from "react";
import { photoArray } from "../Data";
import { User_data } from "../Context";
const DisplayImage = () => {
  const { dpImage, setDpImage } = React.useContext(User_data);
  return (
    <Box
      sx={{
        // backgroundColor: "rgba(232 235 243,0.5)",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9,
        pt: 10,
        pb: 10,
        display: dpImage === "OFF" && "none",
      }}
    >
      <IconButton
        sx={{
          position: "absolute",
          top: 50,
          right: "25%",
          backgroundColor: "white",
          "&:hover": {
            backgroundColor: "white",
          },
          "&:active": {
            transform: "scale(0.9)",
          },
        }}
        onClick={() => setDpImage("OFF")}
      >
        <Close fontSize="large" />
      </IconButton>

      <Stack
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        spacing={3}
        height="100%"
      >
        <Box
          id="Main Dp"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            objectFit: "cover",
            img: { height: "650px", width: "850px" },
            gap: 2,
          }}
        >
          <IconButton
            sx={{
              backgroundColor: "white",
              "&:hover": { backgroundColor: "white" },
              "&:active": {
                transform: "scale(0.9)",
              },
            }}
          >
            <ArrowBack fontSize="large" />
          </IconButton>
          {dpImage !== "OFF" && (
            <img src={photoArray[dpImage]} alt={photoArray[dpImage]} />
          )}
          <IconButton
            sx={{
              backgroundColor: "white",
              "&:hover": { backgroundColor: "white" },
              "&:active": {
                transform: "scale(0.9)",
              },
            }}
          >
            <ArrowForward fontSize="large" />
          </IconButton>
        </Box>
        {/* End of Main DP */}
        <Stack
          display="flex"
          direction="row"
          spacing={2}
          sx={{ overflowX: "auto", height: "100%" }}
        >
          {photoArray.map((photo, index) => {
            return (
              <Box
                key={index}
                sx={{
                  height: 150,
                  width: 250,
                  img: {
                    height: "auto",
                    width: 250,
                    cursor: "pointer",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  },
                }}
              >
                <img
                  src={photo}
                  alt={photo}
                  onClick={() => setDpImage(index)}
                />
              </Box>
            );
          })}
        </Stack>
      </Stack>
    </Box>
  );
};

export default DisplayImage;
