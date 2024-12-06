import React from "react";
//mui
import { Stack, Tooltip, Typography, IconButton } from "@mui/material";
import { ContentCopy } from "@mui/icons-material";
//toast
import { toast } from "react-hot-toast";
//type
import { radioType } from "../type/radio-type";

interface PropsType {
  result: string;
  textType: radioType;
  setResult: React.Dispatch<React.SetStateAction<string>>;
}

const Result: React.FC<PropsType> = ({ result, textType, setResult }) => {
  const handleCopy = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(result);
      toast.success("Copied!", {
        id: "copy-toast",
      });
    } catch (error) {
      toast.error("Failed to copy");
    }
  }, [result]);

  const handleTextType = (text: radioType): string => {
    switch (text) {
      case "small":
        return setResult((result) => result.toLowerCase()), "lowercase";
      case "capital":
        return setResult((result) => result.toUpperCase()), "uppercase";
      case "all":
        return "none";
      default:
        return "none";
    }
  };

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          minWidth: "86%",
          overflowX: "auto",
          textTransform: handleTextType(textType),
        }}
      >
        {result}
      </Typography>
      <Tooltip title="Copy" placement="top" sx={{ width: "40px" }}>
        <IconButton
          onClick={() => handleCopy()}
          aria-label="Copy text to clipboard"
        >
          <ContentCopy />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default Result;
