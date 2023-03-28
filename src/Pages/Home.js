import React from "react";
import ReactPlayer from "react-player";
import { Box } from "@mui/material";
import { photoArray } from "../Data";
import About from "../Components/About";
import DisplayImage from "../Components/DisplayImage";
const Home = () => {
  const [videoLoad, setVideoLoad] = React.useState(false);

  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  return (
    <Box
      pt={10}
      pb={10}
      sx={{ display: "flex", flexDirection: "column", gap: 10 }}
    >
      <Box
        id="Video Player"
        sx={{
          height: "600px",
          width: "100%",
          borderRadius: 12,
          overflow: "hidden",
        }}
      >
        <ReactPlayer
          onReady={() => setVideoLoad(true)}
          url="https://www.youtube.com/watch?v=2rzmnUSwfNk"
          width={"100%"}
          height={"100%"}
        />
      </Box>
      {/* End of Video Player */}

      <About />
      <DisplayImage />
    </Box>
  );
};

export default Home;
