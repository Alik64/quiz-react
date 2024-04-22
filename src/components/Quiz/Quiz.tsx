import { useContext, useMemo, useState } from "react";

import { AppContext } from "../../context/appContext";

import { QuizHeader } from "./QuizHeader";
import { QuizCard } from "./QuizCard/QuizCard";
import ModalRulesUI from "../Modals/ModalRulesUI";
import ModalResultUI from "../Modals/ModalResultUI";

import { Stack, Button, Container } from "@mui/material";
import { QuestionQuiz } from "../../interfaces";

type QuizPropsType = {
  newQuestions: QuestionQuiz[];
  title: string;
};
const Quiz = ({ newQuestions, title }: QuizPropsType) => {
  const { modalName, setModalName, err, score } = useContext(AppContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const isLastQuestion = currentQuestion === newQuestions.length - 1;
  return (
    <Container maxWidth="md">
      {modalName === "Rules" && <ModalRulesUI />}
      {modalName === "Results" && <ModalResultUI />}

      <QuizHeader title={title} score={score} errors={err} />

      <Stack spacing={2} mt={15}>
        {/* <QuizCard question={newQuestions[0]} key={newQuestions[0]?.id} /> */}
      </Stack>
      <Stack alignItems="center" p={5}>
        <Stack direction="row" alignItems="center" spacing={2} p={5}>
          {currentQuestion > 0 && (
            <Button
              variant="contained"
              size="large"
              sx={{ textTransform: "none" }}
              onClick={() => setCurrentQuestion((prev) => prev - 1)}
            >
              Previous
            </Button>
          )}
          {isLastQuestion ? (
            <Button
              variant="outlined"
              size="large"
              sx={{ textTransform: "none" }}
              onClick={() => setModalName("Results")}
            >
              Validate
            </Button>
          ) : (
            <Button
              variant="contained"
              size="large"
              sx={{ textTransform: "none" }}
              onClick={() => setCurrentQuestion((prev) => prev + 1)}
            >
              Next
            </Button>
          )}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Quiz;
