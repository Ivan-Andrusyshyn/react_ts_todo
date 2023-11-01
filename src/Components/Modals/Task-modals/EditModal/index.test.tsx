import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { TaskListContext } from "../../../../Contexts/taskListContext";
import EditModal from ".";
import { DeleteContext } from "../../../../Contexts/delete_edit_Context";
import {
  DeleteContextMock,
  TaskListContextMock,
} from "../../../../jestMock/mockValue";

describe("AddModal all", () => {
  let editModalComponent: JSX.Element;
  beforeEach(() => {
    editModalComponent = (
      <DeleteContext.Provider value={DeleteContextMock}>
        <TaskListContext.Provider value={TaskListContextMock}>
          <EditModal />
        </TaskListContext.Provider>
      </DeleteContext.Provider>
    );
  });
  test("should render DeleteModal", () => {
    render(editModalComponent);
    screen.getByTestId("edit_btn");
    screen.getByTestId("cancel_btn");
  });
});
