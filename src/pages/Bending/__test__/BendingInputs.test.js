import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { MathJax } from "better-react-mathjax";

import BendingInputs from "../BendingInputs";

describe("Biegung", () => {
  it("render Biegung component", () => {
    render(<BendingInputs />);

    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
