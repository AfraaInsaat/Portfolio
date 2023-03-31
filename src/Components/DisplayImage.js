import { Box, Stack, IconButton, Fade } from "@mui/material";
import { ArrowForward, ArrowBack, Close } from "@mui/icons-material";
import React from "react";
import { photoArray } from "../Data";
import { User_data } from "../Context";
const DisplayImage = () => {
  const { dpImage, setDpImage } = React.useContext(User_data);

  return (
    <Fade
      in={dpImage === "OFF" ? false : true}
      timeout={350}
      unmountOnExit
      mountOnEnter
    >
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
          // display: dpImage === "OFF" && "none",
        }}
      >
        <IconButton
          sx={{
            position: "absolute",
            top: { xs: 40, sm: 25 },
            right: { xs: "5%", sm: "25%" },
            backgroundColor: "white",
            padding: { xs: "3px", sm: 1 },
            svg: { fontSize: { xs: "0.95rem", sm: "1.5rem" }, color: "black" },
            "&:hover": {
              backgroundColor: "white",
              transform: "scale(0.9)",
            },
            "&:active": {
              transform: "scale(0.9)",
            },
          }}
          onClick={() => setDpImage("OFF")}
        >
          <Close
          // fontSize="large"
          />
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
              img: {
                height: {
                  xs: "300px",
                  sm: "550px",
                },
                width: {
                  xs: "300px",
                  sm: "850px",
                },
              },
              gap: 1,
            }}
          >
            <IconButton
              sx={{
                backgroundColor: "white",
                // fontSize: "1rem",
                padding: { xs: "3px", sm: 1 },
                svg: {
                  fontSize: { xs: "0.95rem", sm: "1.5rem" },
                  color: "black",
                },
                "&:hover": { backgroundColor: "white" },
                "&:active": {
                  transform: "scale(0.9)",
                },
              }}
              onClick={() => {
                if (dpImage !== 0) {
                  setDpImage((prevValue) => prevValue - 1);
                }
                return dpImage;
              }}
            >
              <ArrowBack
              //  fontSize="large"
              />
            </IconButton>
            {dpImage !== "OFF" && (
              <img src={photoArray[dpImage]} alt={photoArray[dpImage]} />
            )}
            <IconButton
              sx={{
                backgroundColor: "white",
                // fontSize: "1rem",
                padding: { xs: "3px", sm: 1 },
                svg: {
                  fontSize: { xs: "0.95rem", sm: "1.5rem" },
                  color: "black",
                },
                "&:hover": { backgroundColor: "white" },
                "&:active": {
                  transform: "scale(0.9)",
                },
              }}
              onClick={() => {
                if (dpImage < photoArray.length - 1) {
                  setDpImage((prevValue) => prevValue + 1);
                }
                return dpImage;
              }}
            >
              <ArrowForward fontSize="large" />
            </IconButton>
          </Box>
          {/* End of Main DP */}
          <Box sx={{ display: { sm: "none" }, height: "25%" }}></Box>
          <Stack
            display="flex"
            direction="row"
            spacing={2}
            sx={{ overflowX: "auto" }}
          >
            {photoArray.map((photo, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    height: { xs: 175, sm: 200 },
                    width: { xs: 200, sm: 250 },
                    img: {
                      height: "100%",
                      width: { xs: 200, sm: 250 },
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
    </Fade>
  );
};

export default DisplayImage;
