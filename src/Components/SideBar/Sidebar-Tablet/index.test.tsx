import { screen, render, fireEvent } from "@testing-library/react";
import SidebarTablet from ".";
import { MemoryRouter } from "react-router-dom";
import ContextMockWrapper from "../../../jestMock";

describe("SidebarTablet Component", () => {
  const toggleSidebar = jest.fn();
  let SidebarTabletTrue: JSX.Element;
  let SidebarTabletFalse: JSX.Element;

  beforeEach(() => {
    SidebarTabletTrue = (
      <MemoryRouter initialEntries={["/react_ts_todo/categorie/w"]}>
        <ContextMockWrapper>
          <SidebarTablet isSidebarOpen={true} toggleSidebar={toggleSidebar} />
        </ContextMockWrapper>
      </MemoryRouter>
    );
    SidebarTabletFalse = (
      <MemoryRouter initialEntries={["/react_ts_todo/categorie/w"]}>
        <ContextMockWrapper>
          <SidebarTablet isSidebarOpen={false} toggleSidebar={toggleSidebar} />
        </ContextMockWrapper>
      </MemoryRouter>
    );
  });
  test("Renders SidebarTablet when isSidebarOpen is true", () => {
    render(SidebarTabletTrue);
    screen.getByTestId("sidebar");
  });

  test("Does not render SidebarTablet when isSidebarOpen is false", () => {
    render(SidebarTabletFalse);
    const sidebar = screen.queryByTestId("sidebar");
    expect(sidebar).toBeNull();
  });

  test("Calls toggleSidebar when Backdrop is clicked", () => {
    render(SidebarTabletTrue);
    fireEvent.click(screen.getByTestId("sidebar"));
    expect(toggleSidebar).toHaveBeenCalledTimes(1);
  });
  test("Does not call toggleSidebar when Backdrop is clicked and isSidebarOpen is false", () => {
    render(SidebarTabletFalse);
    const backdrop = screen.queryByTestId("sidebar");
    if (backdrop) {
      fireEvent.click(backdrop);
    }
    expect(toggleSidebar).not.toHaveBeenCalled();
  });
});
