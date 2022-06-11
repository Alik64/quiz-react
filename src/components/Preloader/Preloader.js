import { Stack, Typography } from "@mui/material";

import logo from "../../assets/images/reactlogo.png";

import "./Preloader.css";

const Preloader = () => {
  return (
    <Stack spacing={3} className="quiz_preloader">
      <img src={logo} alt={"react-logo"} className="quiz_logo" />
      <Typography
        variant="h5"
        sx={{ color: "#00d8ff" }}
        className="preloader_blink"
      >
        Loading...
      </Typography>
    </Stack>
  );
};

export default Preloader;
