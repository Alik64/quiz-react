import { lazy, Suspense, useContext, useState } from "react";
import { AppContext } from "../../context/appContext";
import { QuizHeader } from "./QuizHeader";
import { QuizCard } from "./QuizCard/QuizCard";
import { Stack, Button, Container } from "@mui/material";
import { QuestionQuiz } from "../../interfaces";

const ModalRulesUI = lazy(() => import("../Modals/ModalRulesUI"));
const ModalResultUI = lazy(() => import("../Modals/ModalResultUI"));
const Preloader = lazy(() => import("../Preloader/Preloader"));
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
      <Suspense fallback={<Preloader />}>
        {modalName === "Rules" && <ModalRulesUI />}
        {modalName === "Results" && <ModalResultUI />}
      </Suspense>

      <QuizHeader title={title} score={score} errors={err} />

      <Stack spacing={2} mt={15}>
        {newQuestions && newQuestions.length > 0 && (
          <QuizCard
            question={newQuestions[currentQuestion]}
            key={newQuestions[currentQuestion]?.id}
          />
        )}
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

          <Button
            variant="contained"
            size="large"
            color={isLastQuestion ? "success" : "primary"}
            sx={{ textTransform: "none" }}
            onClick={
              isLastQuestion
                ? () => setModalName("Results")
                : () => setCurrentQuestion((prev) => prev + 1)
            }
          >
            {isLastQuestion ? "Validate" : "Next"}
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Quiz;

