export interface Questions {
  questions: QuestionQuiz[];
}

export interface QuestionQuiz {
  id: number;
  question: string;
  answers: Answer[];
}

export interface Answer {
  id: number;
  text: string;
  isAnswer?: boolean;
  code?: boolean;
}
