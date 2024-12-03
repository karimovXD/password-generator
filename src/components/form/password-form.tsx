import React from "react";
//mui
import { Box, FormControl } from "@mui/material";
//components
import SliderComponent from "./slider";
import RadioComponent from "./radio/radio";
import CheckboxComponent from "./checkbox/checkbox";

interface PropsType {
  handleChangeSlider: (event: Event, newValue: number | number[]) => void;
  handleChangeRadio: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeCheckbox: (event: React.ChangeEvent<HTMLInputElement>) => void;
  excludeNumbers: boolean;
  excludeSpecialChars: boolean;
}

const PasswordForm: React.FC<PropsType> = ({
  handleChangeSlider,
  handleChangeRadio,
  handleChangeCheckbox,
  excludeNumbers,
  excludeSpecialChars,
}) => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <FormControl sx={{ width: "100%", gap: { xs: 1.5, md: 2 } }}>
          <SliderComponent handleChangeSlider={handleChangeSlider} />
          <RadioComponent handleChangeRadio={handleChangeRadio} />
          <CheckboxComponent
            excludeNumbers={excludeNumbers}
            excludeSpecialChars={excludeSpecialChars}
            handleChangeCheckbox={handleChangeCheckbox}
          />
        </FormControl>
      </Box>
    </>
  );
};

export default PasswordForm;
