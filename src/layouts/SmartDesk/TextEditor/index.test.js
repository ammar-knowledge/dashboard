import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Editor from "./Editor";

test("Editor renders without errors", () => {
  render(<Editor />);
  const editorElement = screen.getByRole("textbox");
  expect(editorElement).toBeInTheDocument();
});

test("Editor updates value on change", () => {
  render(<Editor />);
  const editorElement = screen.getByRole("textbox");
  fireEvent.change(editorElement, { target: { value: "New value" } });
  expect(editorElement.value).toBe("New value");
});