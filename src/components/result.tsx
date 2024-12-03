import React from "react";
//mui
import { Stack, Tooltip, Typography, IconButton } from "@mui/material";
import { ContentCopy } from "@mui/icons-material";
//component
import BoxComponent from "./box";
//toast
import { toast } from "react-hot-toast";

interface PropsType {
  result: string;
}

const Result: React.FC<PropsType> = ({ result }) => {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(result);
    toast.dismiss(result);
    toast.success("Copied!", {
      id: result,
    });
  };

  return (
    <BoxComponent>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Typography variant="h6" sx={{ minWidth: "86.1%", overflowX: "auto" }}>
          PTx1f5DaFX
        </Typography>
        <Tooltip title="Copy" placement="top" sx={{ width: "8.9%" }}>
          <IconButton onClick={() => handleCopy()}>
            <ContentCopy />
          </IconButton>
        </Tooltip>
      </Stack>
    </BoxComponent>
  );
};

export default Result;
