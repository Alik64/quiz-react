import ModalRules from "../components/Modals/ModalRules";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AppContextProvider } from "../context/appContext";

describe("<ModalRules/>", () => {
  const modalRulesToogle = false;
  beforeEach(() => {
    render(
      <AppContextProvider>
        <ModalRules />
      </AppContextProvider>
    );
  });

  test("toggle button test", () => {
    const toggleBtn = screen.getByTestId("toggle-btn");
    expect(toggleBtn).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.queryByTestId("toggle-elem")).toBeNull();
  });
});
