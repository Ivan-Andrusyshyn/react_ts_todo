import { render, screen, fireEvent } from "@testing-library/react";
import CategorieMain from ".";
import { mockCategoryListProps } from "../../../jestMock/mockValue";
import ContextMockWrapper from "../../../jestMock";
import { JSX } from "react/jsx-runtime";
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
  });
});
