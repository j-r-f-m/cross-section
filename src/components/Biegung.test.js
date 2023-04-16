import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import Biegung from "./Biegung";

describe("Biegung", () => {
  it("render Biegung component", () => {
    render(
      <BrowserRouter>
        <Biegung />
      </BrowserRouter>
    );
    // screen.debug();
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
