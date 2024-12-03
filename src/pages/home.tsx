import React from "react";
import { Stack } from "@mui/material";
//pages
import Header from "../components/header";
import Main from "../components/main";

interface PropsType {
  mode: boolean;
  setMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home: React.FC<PropsType> = ({ mode, setMode }) => {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      <Header mode={mode} setMode={setMode} title={"Password Generator"} />
      <Main />
    </Stack>
  );
};

export default Home;
