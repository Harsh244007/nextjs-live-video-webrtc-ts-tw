"use client"
import IconButton from "@mui/joy/IconButton";
import { useColorScheme } from "@mui/joy/styles";
import {
  LightModeRounded as LightModeRoundedIcon,
  DarkModeRounded as DarkModeRoundedIcon,
} from "@mui/icons-material";
import { memo, useRef, useState } from "react";
import CssBaseline from "@mui/joy/CssBaseline";
import { Box } from "@mui/joy";

const ThemeToggle = () => {
  const { mode, setMode, systemMode } = useColorScheme();
  const ThemeTransitionRef = useRef<HTMLDivElement>(null);
  const [disabledToggle, setDisableToggle] = useState(false);
  const handleThemeToggle = () => {
    setDisableToggle(() => true);
    if (mode !== "system") {
      if (mode === "dark") {
        ThemeTransitionRef.current?.classList?.add("stopThemeTransition");
        ThemeTransitionRef.current?.classList?.remove("startThemeTransition");
      } else {
        ThemeTransitionRef.current?.classList?.add("startThemeTransition");
        ThemeTransitionRef.current?.classList?.remove("stopThemeTransition");
      }
      if (mode === "light") {
        setTimeout(() => {
          setMode("dark");
        }, 1500);
      } else {
        setMode("light");
      }
    } else if (systemMode === "light") {
      setTimeout(() => {
        setMode("dark");
      }, 1500);
      ThemeTransitionRef.current?.classList.add("startThemeTransition");
    } else if (systemMode === "dark") {
      setMode("light");
      ThemeTransitionRef.current?.classList.add("stopThemeTransition");
    }
    setTimeout(() => setDisableToggle(() => false), 1500);
  };
  return (
    <>
      <CssBaseline />
      <IconButton
        id="toggle-mode"
        size="lg"
        variant="soft"
        disabled={disabledToggle}
        className={`${disabledToggle ? "cursor-not-allowed" : "cursor-pointer"} border border-solid border-gray-200`}
        color="neutral"
        onClick={handleThemeToggle}
        sx={{
          position: "fixed",
          zIndex: 999,
          top: "1rem",
          right: "1rem",
          borderRadius: "50%",
          boxShadow: "sm",
        }}
      >
        {mode === "light" ? (
          <DarkModeRoundedIcon />
        ) : systemMode === "dark" && mode === "system" ? (
          <DarkModeRoundedIcon />
        ) : (
          <LightModeRoundedIcon />
        )}
      </IconButton>
      <Box
        className="headerThemeTransition"
        ref={ThemeTransitionRef}
        sx={{
          position: "fixed",
          zIndex: -1,
          top: "1rem",
          right: "1rem",
          borderRadius: "50%",
        }}
      />
    </>
  );
};
export default memo(ThemeToggle);
