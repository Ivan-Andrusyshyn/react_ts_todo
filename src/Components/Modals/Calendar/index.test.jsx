import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Calendar from ".";

describe("Calendar Component", () => {
  const setSelectedDate = jest.fn();
  let CalendarTask;
  beforeEach(() => {
    CalendarTask = <Calendar setSelectedDate={() => {}} />;
  });
  test("should render the calendar component", () => {
    render(CalendarTask);
    screen.getByTestId("calendar-container");
  });
});
