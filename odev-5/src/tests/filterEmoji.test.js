import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("Emoji list must be rendered while filtering", () => {
  render(<App />);
  const inputText = screen.getByText("1234");
  expect(inputText).toBeInTheDocument("1234");
});