import React from "react";
//mui
import { FormControlLabel, Radio } from "@mui/material";

interface PropsType {
  value: string;
  label: string;
}
const RadioControlLabelComponent: React.FC<PropsType> = ({ value, label }) => (
  <FormControlLabel value={value} control={<Radio />} label={label}/>
);
export default React.memo(RadioControlLabelComponent);
