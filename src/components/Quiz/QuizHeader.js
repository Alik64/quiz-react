import React from "react";
import {
  Box,
  Stack,
  Button,
  Modal,
  Typography,
  Link,
  Container,
} from "@mui/material";

import logo from "../../assets/images/reactlogo.png";

export const QuizHeader = ({ title, score, errors }) => {
  return (
    <Container maxWidth="lg">
      <div className="quiz_header_content">
        <div className="quiz_info">
          <img className="quiz_logo" src={logo} alt="logo" />
          <h1>{title}</h1>
        </div>
        <div className="quiz_score">
          <h3 className={errors >= 3 ? "danger" : null}>Score: {score}</h3>
          <h3 className={errors >= 3 ? "danger" : null}>Errors: {errors}</h3>
        </div>
      </div>
    </Container>
  );
};
