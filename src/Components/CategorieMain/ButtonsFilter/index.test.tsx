import { render, screen, fireEvent } from "@testing-library/react";
import ButtonsFilter from ".";

describe("ButtonController Component", () => {
  const mockName = "Test Category";

  test("should render the ButtonController component", () => {
    render(<ButtonsFilter name={mockName} />);
    screen.getByTestId("categoryPage_filter");
    screen.getByTestId("filterBtnDoneTasks");
    screen.getByTestId("filterBtnAllTasks");
    screen.getByTestId("filterBtnNotDoneTasks");
  });

  test("should call handleDone when 'upBar' title is clicked", () => {
    render(<ButtonsFilter name={mockName} />);
    const title = screen.getByTestId("filterBtnDoneTasks");
    fireEvent.click(title);
  });

  test("should call handleAll when 'filterAll' tag is clicked", () => {
    render(<ButtonsFilter name={mockName} />);
    const allFilterTag = screen.getByTestId("filterBtnAllTasks");
    fireEvent.click(allFilterTag);
  });

  test("should call handleNotDone when 'filterNDone' tag is clicked", () => {
    render(<ButtonsFilter name={mockName} />);
    const notDoneFilterTag = screen.getByTestId("filterBtnNotDoneTasks");
    fireEvent.click(notDoneFilterTag);
  });
});
