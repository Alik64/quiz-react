import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/reactlogo.png";

import { Container, Stack, Button, Typography } from "@mui/material";

const containerStyle = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

export const HomeUI = () => {
  return (
    <Container maxWidth="lg" sx={containerStyle}>
      <Stack
        sx={{ pt: 5 }}
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={5}
      >
        <Stack alignItems="center">
          <img src={logo} alt="react logo" className="home_logo" />
        </Stack>
        <Stack spacing={4} alignItems="center">
          <Typography variant="h4" component="h1" align="center">
            Welcome to the Ultimate React Quiz!
          </Typography>

          <Typography>Let's discover how good you are 🚀</Typography>

          <Link to="/quiz">
            <Button
              variant="contained"
              size="large"
              sx={{ textTransform: "none" }}
            >
              Let's go!
            </Button>
          </Link>
          <Typography pt={10}>
            Created with 💙 by{" "}
            <a
              style={{ color: "var(--darkBlue)" }}
              href="https://www.linkedin.com/in/albert-64/"
            >
              Albert
            </a>
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};
