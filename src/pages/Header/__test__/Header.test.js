import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import Header from "../Header";

describe("Header", () => {
  it("render Header component", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    // screen.debug();
    expect(screen.getByRole("list")).toBeInTheDocument();
  });
});
