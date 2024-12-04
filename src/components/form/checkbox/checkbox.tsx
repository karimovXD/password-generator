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
  const checkboxOptions = React.useMemo(
    () => [
      {
        exclude: excludeNumbers,
        label: "Exclude numbers",
        name: "excludeNumbers",
      },
      {
        exclude: excludeSpecialChars,
        label: "Exclude special chars",
        name: "excludeSpecialChars",
      },
    ],
    [handleChangeCheckbox]
  );

  const handleCheckboxChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      handleChangeCheckbox(event);
    },
    [handleChangeCheckbox] // стабилизируем обработчик
  );

  return (
    <Box>
      <FormLabel id="checkbox-group">Password complication</FormLabel>
      <FormGroup>
        {checkboxOptions?.map((item) => (
          <CheckboxControlLabel
            key={item.name}
            exclude={item.exclude}
            label={item.label}
            name={item.name}
            handleChangeCheckbox={handleCheckboxChange}
          />
        ))}
      </FormGroup>
    </Box>
  );
};

export default CheckboxComponent;
