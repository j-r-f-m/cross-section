import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Sidebar from "../Side";

describe("Sidebar", () => {
  it("render Side component", () => {
    render(<Sidebar />);
    // screen.debug();
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
