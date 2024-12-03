import React from "react";
//mui
import { Checkbox, FormControlLabel } from "@mui/material";

interface PropsType {
  exclude: boolean;
  handleChangeCheckbox: React.ChangeEventHandler<HTMLInputElement>;
  name: string;
  label: string;
}

const CheckboxControlLabel: React.FC<PropsType> = ({
  exclude,
  handleChangeCheckbox,
  name,
  label,
}) => (
  <FormControlLabel
    control={
      <Checkbox checked={exclude} onChange={handleChangeCheckbox} name={name} />
    }
    label={label}
  />
);

export default CheckboxControlLabel;