import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Slide, Fade, Grow } from "@mui/material";
import Slider from "react-slick";
var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

const Dp = ({ styles, data, loading }) => {
  return (
    <Fade in={loading} mountOnEnter unmountOnExit timeout={2000}>
      <Box sx={{ ...styles }}>
        <Slider {...settings}>
          {data.map((photo, index) => {
            return (
              <Box key={index}>
                <img src={photo} alt={`photoarray${index}`} />
              </Box>
            );
          })}
        </Slider>
      </Box>
    </Fade>
  );
};

export default Dp;
