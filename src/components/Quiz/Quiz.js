import React, { useContext, useMemo } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../../context/appContext";

import { QuizHeader } from "./QuizHeader";
import { QuizCard } from "./QuizCard/QuizCard";
import ModalRulesUI from "../Modals/ModalRulesUI";
import ModalResultUI from "../Modals/ModalResultUI";

import { Stack, Button, Container } from "@mui/material";

export default function Quiz({ newQuestions, title, loading }) {
  const { modalName, setModalName, err, score } = useContext(AppContext);
  return (
    <Container maxWidth="md">
      {modalName === "Rules" && <ModalRulesUI />}
      {modalName === "Results" && <ModalResultUI />}

      <QuizHeader title={title} score={score} errors={err} />

      <Stack spacing={2} mt={15}>
        {useMemo(
          () =>
            newQuestions &&
            newQuestions.map((question) => (
              <QuizCard question={question} key={question.id} />
            )),

          [newQuestions]
        )}
      </Stack>
      <Stack alignItems="center" p={5}>
        <Button
          variant="contained"
          size="large"
          sx={{ textTransform: "none" }}
          onClick={() => setModalName("Results")}
        >
          Validate
        </Button>
      </Stack>
    </Container>
  );
}

Quiz.propTypes = {
  newQuestions: PropTypes.array,
  title: PropTypes.string,
  loading: PropTypes.bool,
};
