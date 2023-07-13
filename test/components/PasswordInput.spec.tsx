import "@testing-library/jest-dom";
import { test } from "vitest";
import { render, screen } from "@testing-library/react";
import { PasswordInput } from "../../src/components/PasswordInput";

test("simple render", () => {
  render(<PasswordInput inputProps={{}} />);

  expect(screen.getByTestId("password")).toBeInTheDocument();
});
