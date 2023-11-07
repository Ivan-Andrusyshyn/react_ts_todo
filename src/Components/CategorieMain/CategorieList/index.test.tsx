import { render, screen, fireEvent } from "@testing-library/react";
import CategorieMain from ".";
import { mockCategoryListProps } from "../../../jestMock/mockValue";
import ContextMockWrapper from "../../../jestMock";
import { JSX } from "react/jsx-runtime";
const mockFilteredList = [
  {
    id: 1,
    title: "Test Task 1",
  },
  {
    id: 2,
    title: "Test Task 2",
  },
];
describe("CategorieMain Component", () => {
  let TestCategorie: JSX.Element;
  beforeEach(() => {
    TestCategorie = (
      <ContextMockWrapper>
        <CategorieMain {...mockCategoryListProps} />
      </ContextMockWrapper>
    );
  });

  test("should render the CategorieMain component", () => {
    render(TestCategorie);
    screen.getByTestId("categoryContainer");
    screen.getByTestId("header");
    screen.getByTestId("categoryPage_filter");
  });

  test("should render TaskItem components", () => {
    render(TestCategorie);
    for (const task of mockFilteredList) {
      screen.getByText(task.title);
    }
  });
});
