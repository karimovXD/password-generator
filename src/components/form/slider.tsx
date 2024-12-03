import React from "react";
//mui
import { Box, FormLabel, Slider } from "@mui/material";

interface PropsType {
  handleChangeSlider: (event: Event, newValue: number | number[]) => void;
}

const SliderComponent: React.FC<PropsType> = ({ handleChangeSlider }) => (
  <Box>
    <FormLabel id="slider">Character length</FormLabel>
    <Slider
      defaultValue={25}
      aria-label="default"
      valueLabelDisplay="auto"
      onChange={handleChangeSlider}
      min={10}
      max={40}
    />
  </Box>
);

export default SliderComponent;
