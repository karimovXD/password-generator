import React from "react";
//mui
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
} from "@mui/material";
import { RadioEnum } from "../types/passwordType";

type radioType = "small" | "capital" | "all";

const RadioForm: React.FC = () => {
  const [sliderValue, setSliderValue] = React.useState<number>(25);
  const [radioValue, setRadioValue] = React.useState<radioType>("small");
  const [excludeNumbers, setExcludeNumbers] = React.useState<boolean>(false);
  const [excludeSpecialChars, setExcludeSpecialChars] =
    React.useState<boolean>(false);

  const handleChangeSlider = (
    event: Event,
    newValue: number | number[]
  ): void => {
    setSliderValue(newValue as number);
  };

  const handleChangeRadio = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setRadioValue(event.target.value as radioType);
  };

  const handleChangeCheckbox = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, checked } = event.target;
    if (name === "excludeNumbers") {
      setExcludeNumbers(checked); // Toggle excludeNumbers
    } else if (name === "excludeSpecialChars") {
      setExcludeSpecialChars(checked); // Toggle excludeSpecialChars
    }
  };

  const handleGetAllValue = () => {
    console.log(sliderValue, radioValue, excludeNumbers, excludeSpecialChars);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <FormControl sx={{ width: "100%", gap: { xs: 1.5, md: 2 } }}>
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
          <Box>
            <FormLabel id="radio-group">Password type</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="small"
              name="radio-buttons-group"
              onChange={handleChangeRadio}
            >
              <FormControlLabel
                value="capital"
                control={<Radio />}
                label="Capital letters"
              />
              <FormControlLabel
                value="small"
                control={<Radio />}
                label="Small letters"
              />
              <FormControlLabel
                value="all"
                control={<Radio />}
                label="Use all"
              />
            </RadioGroup>
          </Box>
          <Box>
            <FormLabel id="checkbox-group">Password complication</FormLabel>
            <FormGroup onChange={handleChangeCheckbox}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={excludeNumbers}
                    onChange={handleChangeCheckbox}
                    name="excludeNumbers"
                  />
                }
                label="Exclude numbers"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={excludeSpecialChars}
                    onChange={handleChangeCheckbox}
                    name="excludeSpecialChars"
                  />
                }
                label="Exclude special chars"
              />
            </FormGroup>
          </Box>
        </FormControl>
      </Box>
    </>
  );
};

export default RadioForm;
