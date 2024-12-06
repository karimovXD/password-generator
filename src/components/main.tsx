import React from "react";
//mui
import { Stack, Box, Button } from "@mui/material";
//components
import BoxComponent from "./box";
import Result from "./result";
import PasswordForm from "./form/password-form";
//type
import { radioType } from "../type/radio-type";
//service
import { PasswordService } from "../service/password";
import { toast } from "react-hot-toast";

const Main: React.FC = () => {
  const [result, setResult] = React.useState<string>("");
  const [sliderValue, setSliderValue] = React.useState<number>(25);
  const [radioValue, setRadioValue] = React.useState<radioType>("small");
  const [excludeNumbers, setExcludeNumbers] = React.useState<boolean>(false);
  const [excludeSpecialChars, setExcludeSpecialChars] =
    React.useState<boolean>(false);

  const handleChangeSlider = React.useCallback(
    (event: Event, newValue: number | number[]): void => {
      console.log(event.target);
      setSliderValue(newValue as number);
    },
    []
  );

  const handleChangeRadio = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      setRadioValue(event.target.value as radioType);
    },
    []
  );

  const handleChangeCheckbox = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      const { name, checked } = event.target;
      if (name === "excludeNumbers") {
        setExcludeNumbers(checked); // Toggle excludeNumbers
      } else if (name === "excludeSpecialChars") {
        setExcludeSpecialChars(checked); // Toggle excludeSpecialChars
      }
    },
    [excludeNumbers, excludeSpecialChars]
  );

  const handleGenerate = async () => {
    try {
      const { random_password } = await PasswordService.generatePassword(
        sliderValue,
        excludeNumbers,
        excludeSpecialChars
      );
      setResult(random_password);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Error";
      toast.error(errorMessage);
    }
  };

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
          <BoxComponent>
            <Result
              result={result}
              textType={radioValue}
              setResult={setResult}
            />
          </BoxComponent>
          <BoxComponent>
            <PasswordForm
              excludeNumbers={excludeNumbers}
              excludeSpecialChars={excludeSpecialChars}
              handleChangeCheckbox={handleChangeCheckbox}
              handleChangeRadio={handleChangeRadio}
              handleChangeSlider={handleChangeSlider}
            />
          </BoxComponent>
          <BoxComponent>
            <Button
              variant="outlined"
              sx={{ width: "100%" }}
              onClick={handleGenerate}
              //disabled={}
            >
              Click
            </Button>
          </BoxComponent>
        </Box>
      </Box>
    </Stack>
  );
};

export default Main;
