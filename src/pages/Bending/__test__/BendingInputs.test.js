import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import { MathJaxContext } from "better-react-mathjax";

import BendingInputs from "../BendingInputs";

describe("Biegung", () => {
  it("render Biegung component", () => {
    render(
      <MathJaxContext>
        <BendingInputs />
      </MathJaxContext>
    );

    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
