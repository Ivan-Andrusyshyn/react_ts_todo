import React from "react";
import { render, screen } from "@testing-library/react";
import EditModal from ".";
import ContextMockWrapper from "../../../../jestMock";

describe("AddModal all", () => {
  let editModalComponent: JSX.Element;
  beforeEach(() => {
    editModalComponent = (
      <ContextMockWrapper>
        <EditModal />
      </ContextMockWrapper>
    );
  });
  test("should render DeleteModal", () => {
    render(editModalComponent);
    screen.getByTestId("edit_btn");
    screen.getByTestId("cancel_btn");
  });
});
