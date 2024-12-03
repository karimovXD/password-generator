import { useState } from "react";
//mui
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { green, grey } from "@mui/material/colors";
//pages
import Home from "./pages/home";
//toast
import { Toaster } from "react-hot-toast";

function App() {
  const changedMode = localStorage.getItem("mode") === "false";

  const [mode, setMode] = useState<boolean>(changedMode);

  const theme = createTheme({
    palette: {
      mode: mode ? "dark" : "light",
      primary: {
        light: green[300],
        main: green[400],
        dark: green[600],
        contrastText: mode ? "#fff" : "#040404",
      },
      secondary: {
        light: mode ? grey[800] : grey[50],
        main: mode ? "#000" : "#f3f3f3",
        dark: mode ? grey[900] : grey[200],
        contrastText: "#fff",
      },
      text: {
        primary: mode ? "#fff" : "#000",
        secondary: mode ? green[500] : green[400],
      },
      background: {
        default: mode ? "#040404" : "#fff",
        paper: mode ? "#424242" : "#ffffff",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Toaster position="top-center" reverseOrder={false} gutter={10} />
        <Home mode={mode} setMode={setMode} />
      </ThemeProvider>
    </>
  );
}

export default App;
