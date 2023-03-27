import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { details, photoArray } from "../Data";
import { User_data } from "../Context";
const About = () => {
  const { dpImage, setDpImage } = React.useContext(User_data);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Box>
        <Typography variant="h2" color="white" fontWeight="bold" mb={2}>
          About this Villa
        </Typography>
        <Typography color="white" variant="h5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
      </Box>
      {/* End Of About */}

      <Box>
        <Typography variant="h2" color="white" fontWeight="bold" mb={2}>
          Property Details
        </Typography>
        <Stack display="flex" direction="row">
          <Box sx={{ width: "50%" }}>
            {details.map((det, index) => {
              return (
                <Typography
                  key={index}
                  color="white"
                  variant="h5"
                  mb={2}
                  display="list-item"
                >
                  {det}
                </Typography>
              );
            })}
          </Box>
          {/* end of details */}
          <Box
            id="Photo Preview"
            sx={{
              height: "800px",
              width: "50%",
              overflow: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            {photoArray.map((photo, index) => {
              return (
                <Box
                  key={photo}
                  sx={{
                    width: 350,
                    height: 350,
                    img: {
                      width: "100%",
                      height: "100%",
                      transition: "0.35s",
                      "&:hover": {
                        cursor: "pointer",
                        transform: "scale(0.9)",
                        transition: "0.35s",
                      },
                    },
                    "&:active": {
                      transform: "scale(0.98)",
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
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default About;
