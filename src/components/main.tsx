import React from "react";
import { Stack, Box, Button } from "@mui/material";
import BoxComponent from "./box";
import Result from "./result";
import RadioForm from "./radio-form";

const Main: React.FC = () => {
  const [result, setResult] = React.useState<string>("PTx1f5DaFX");
  const [formResult, setFormResult] = React.useState<{} | null>();

  return (
    <Stack
      sx={{
        width: { xs: "100%", xl: "1536px" },
        height: "100%",
        item: "start",
        margin: "auto",
        flex: 1,
        overflow: "auto",
      }}
    >
      <Box
        sx={{
          width: "100%",
          minHeight: "100%",
          overflow: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
            padding: { xs: 1.5, md: 2 },
            gap: {
              xs: 1.5,
              md: 2,
            },
          }}
        >
          <Result result={result} />
          <BoxComponent>
            <Stack>
              <RadioForm />
              <Box></Box>
            </Stack>
          </BoxComponent>
          <BoxComponent>
            <Button variant="outlined" sx={{ width: "100%" }}>
              Click
            </Button>
          </BoxComponent>
        </Box>
      </Box>
    </Stack>
  );
};

export default Main;
