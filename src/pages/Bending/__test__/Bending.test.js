import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import Bending from "../Bending";

describe("Biegung", () => {
  it("render Biegung component", () => {
    render(
      <BrowserRouter>
        <Bending />
      </BrowserRouter>
    );
    // screen.debug();
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
