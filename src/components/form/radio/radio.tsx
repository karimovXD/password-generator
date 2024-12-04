import React from "react";
//mui
import { Box, FormLabel, RadioGroup } from "@mui/material";
//component
import RadioControlLabelComponent from "./radio-control-label";

interface PropsType {
  handleChangeRadio: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioComponent: React.FC<PropsType> = ({ handleChangeRadio }) => {
  const radioOptions = React.useMemo(
    () => [
      {
        value: "capital",
        label: "Capital letter",
      },
      {
        value: "small",
        label: "Small letter",
      },
      {
        value: "All",
        label: "Use all",
      },
    ],
    []
  );

  return (
    <Box>
      <FormLabel id="radio-group">Password type</FormLabel>
      <RadioGroup
        aria-labelledby="radio-group"
        defaultValue="small"
        name="radio-buttons-group"
        onChange={handleChangeRadio}
      >
        {radioOptions?.map((item) => (
          <RadioControlLabelComponent
            key={item.value}
            value={item.value}
            label={item.label}
          />
        ))}
      </RadioGroup>
    </Box>
  );
};

export default RadioComponent;
