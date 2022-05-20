import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Quiz from "./Quiz";

describe("<Quiz/>", () => {
  test("shold return 4 buttons", () => {
    render(<Quiz />);
    const quiz_answerBtn = screen.findAllByTestId("quiz_answerBtn");
    expect(quiz_answerBtn).toBeInTheDocument();
  });
});
