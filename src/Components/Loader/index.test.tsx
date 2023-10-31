import { render, screen } from "@testing-library/react";
import LoaderInButton from "./AuthLoader";
test("renders LoaderInButton component", () => {
  render(<LoaderInButton isLoading={true} loaderColor="#fff" />);
  const loaderBtn = screen.queryByTestId("loaderBtn");
  expect(loaderBtn).not.toBeNull();
});
