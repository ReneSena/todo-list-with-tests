import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App()", () => {
  it("should render an App Component", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: "Todo" })).toBeInTheDocument();
  });
});
