export interface Questions {
  questions: QuestionQuiz[];
}

export interface QuestionQuiz {
  id: number;
  code?: CodeLine[];
  question: string;
  answers: Answer[];
}
export interface CodeLine {
  line: number;
  text: string;
}
export interface Answer {
  id: number;
  text: string;
  isAnswer?: boolean;
  code?: boolean;
}
