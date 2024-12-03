import React from "react";
//mui
import { Box, FormGroup, FormLabel } from "@mui/material";
//component
import CheckboxControlLabel from "./checkbox-control-label";

interface PropsType {
  excludeNumbers: boolean;
  excludeSpecialChars: boolean;
  handleChangeCheckbox: React.ChangeEventHandler<HTMLInputElement>;
}

const CheckboxComponent: React.FC<PropsType> = ({
  excludeNumbers,
  excludeSpecialChars,
  handleChangeCheckbox,
}) => {
  const checkboxOptions = [
    {
      exclude: excludeNumbers,
      label: "Exclude numbers",
      name: "excludeNumbers",
      handleChangeCheckbox: handleChangeCheckbox,
    },
    {
      exclude: excludeSpecialChars,
      label: "Exclude special chars",
      name: "excludeSpecialChars",
      handleChangeCheckbox: handleChangeCheckbox,
    },
  ];
  return (
    <Box>
      <FormLabel id="checkbox-group">Password complication</FormLabel>
      <FormGroup onChange={handleChangeCheckbox}>
        {checkboxOptions?.map((item, i: number) => (
          <CheckboxControlLabel
            key={i}
            exclude={item.exclude}
            label={item.label}
            name={item.name}
            handleChangeCheckbox={item.handleChangeCheckbox}
          />
        ))}
      </FormGroup>
    </Box>
  );
};

export default CheckboxComponent;
