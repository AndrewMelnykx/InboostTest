import React from "react";
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import Header from "../components/header/index";

test("renders the header component with correct text", () => {
  render(<Header />);
  const headerElement = screen.getByText(/Inboost test task/i);
  expect(headerElement).toBeInTheDocument();
});
