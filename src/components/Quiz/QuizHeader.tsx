import React from "react";
import PropTypes from "prop-types";
import { Toolbar, Stack, Typography, Container } from "@mui/material";

import logo from "../../assets/images/reactlogo.png";
const style = {
  height: "110px",
  position: "fixed",
  zIndex: "2",
  top: "0",
  left: "0",
  right: "0",
  background: "#fff",
  pt: "1rem",
};

type QuizHeaderPropsType = {
  title: string;
  score: number;
  errors: number;
};
export const QuizHeader = ({ title, score, errors }: QuizHeaderPropsType) => {
  return (
    <Container maxWidth="md" sx={style}>
      <Toolbar>
        <img src={logo} alt={"react-logo"} className="quiz_logo" />
        <Typography
          variant="h4"
          component="h2"
          sx={{ flexGrow: 1 }}
          className="quiz_title"
        >
          {title}
        </Typography>

        <Stack spacing={1}>
          <Typography variant="h6" color={errors >= 3 ? "red" : "inherit"}>
            Score: {score}
          </Typography>
          <Typography variant="h6" color={errors >= 3 ? "red" : "inherit"}>
            Errors: {errors}
          </Typography>
        </Stack>
      </Toolbar>
    </Container>
  );
};

QuizHeader.propTypes = {
  score: PropTypes.number,
  errors: PropTypes.number,
  title: PropTypes.string,
};
