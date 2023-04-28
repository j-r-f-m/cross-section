import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Landing from "../Landing";

describe("Home", () => {
  it("render Home component", () => {
    render(<Landing />);
    // screen.debug();
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
