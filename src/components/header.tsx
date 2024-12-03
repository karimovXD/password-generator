import React from "react";
//mui
import {
  AppBar,
  Box,
  Typography,
  IconButton,
  Button,
  Link,
  Stack,
} from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";

interface PropsType {
  mode: boolean;
  setMode: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
}

const Header: React.FC<PropsType> = ({ title, mode, setMode }) => {
  const handleChangeTheme = () => {
    setMode((mode) => !mode);
    localStorage.setItem("mode", JSON.stringify(mode));
  };

  return (
    <AppBar
      sx={{
        backgroundColor: "secondary.main",
        boxShadow: "none",
        borderBottom: "0.5px solid #828282",
      }}
      position="static"
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: { xs: 1.5, md: 2 },
          margin: "auto",
          width: {
            xs: "100%",
            xl: "1536px",
          },
        }}
      >
        <Box>
          <Typography variant="h5">{title}</Typography>
        </Box>
        <Box>
          <IconButton
            onClick={handleChangeTheme}
            sx={{ borderRadius: 2 }}
            disableRipple={true}
          >
            {mode ? <LightMode /> : <DarkMode />}
          </IconButton>
          <Link href="https://github.com/karimovXD?tab=repositories">
            <Button variant={"contained"} disableRipple>
              follow me
            </Button>
          </Link>
        </Box>
      </Stack>
    </AppBar>
  );
};

export default Header;
