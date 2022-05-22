import ModalResult from "./ModalResult";
import { showYourSkill } from "./ModalResult";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AppContextProvider } from "../../context/appContext";
import { BrowserRouter } from "react-router-dom";

describe("<<ModalResult/>>", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <AppContextProvider>
          <ModalResult />
        </AppContextProvider>
      </BrowserRouter>
    );
  });
});

describe("showYourSkill()", () => {
  test("should NOT accept negative numbers", () => {
    expect(showYourSkill(-1)).toBe("Warning: RTFM right now!");
  });
  test("should only accept numbers between 0 and 15", () => {
    let number = 16;
    expect(showYourSkill(number)).toBe(
      `Warning:${number} is out of range, How could you get it?!?!?`
    );
  });
  test("should return Noob for 0", () => {
    expect(showYourSkill(0)).toBe("Noob");
  });

  test("should return Begginer for 4", () => {
    expect(showYourSkill(4)).toBe("Beginner");
  });
  test("should return Advanced for 8", () => {
    expect(showYourSkill(8)).toBe("Advanced");
  });
  test("should return Advanced for 8", () => {
    expect(showYourSkill(8)).toBe("Advanced");
  });
  test("should return Advanced for 10", () => {
    expect(showYourSkill(10)).toBe("Pro");
  });

  test("should return Master for 14", () => {
    expect(showYourSkill(14)).toBe("Master");
  });
  test("should return Pro for 15", () => {
    expect(showYourSkill(15)).toBe("Kill it man!");
  });
  test("should not accept String as argument", () => {
    let str = "Hello world";
    expect(showYourSkill(str)).toBe(
      `Warning: "${str}" is a String, should only use an integer!`
    );
  });
});
