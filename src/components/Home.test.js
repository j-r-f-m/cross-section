import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Home from "./Home";

describe("Home", () => {
  it("render Home component", () => {
    render(<Home />);
    // screen.debug();
    expect(screen.getByRole("list")).toBeInTheDocument();
  });
});
