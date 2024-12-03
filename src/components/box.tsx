import React from "react";
//mui
import { Box } from "@mui/material";

interface PropsType {
  children: React.ReactNode;
}

const BoxComponent: React.FC<PropsType> = ({ children }) => {
  return (
    <Box
      component="div"
      sx={{
        width: { xs: "100%", sm: "500px" },
        height: "auto",
        backgroundColor: "secondary.dark",
        padding: 2,
        borderRadius: 1,
      }}
    >
      {children}
    </Box>
  );
};

export default BoxComponent;
