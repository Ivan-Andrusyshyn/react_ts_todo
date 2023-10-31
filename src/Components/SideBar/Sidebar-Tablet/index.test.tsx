import { screen, render, fireEvent } from "@testing-library/react";
import SidebarTablet from ".";

describe("SidebarTablet Component", () => {
  const toggleSidebar = jest.fn();

  test("Renders SidebarTablet when isSidebarOpen is true", () => {
    render(
      <SidebarTablet isSidebarOpen={true} toggleSidebar={toggleSidebar} />
    );
    const sidebar = screen.getByTestId("sidebar");
    expect(sidebar).toBeInTheDocument();
  });

  test("Does not render SidebarTablet when isSidebarOpen is false", () => {
    render(
      <SidebarTablet isSidebarOpen={false} toggleSidebar={toggleSidebar} />
    );
    const sidebar = screen.queryByTestId("sidebar");
    expect(sidebar).toBeNull();
  });

  test("Calls toggleSidebar when Backdrop is clicked", () => {
    render(
      <SidebarTablet isSidebarOpen={true} toggleSidebar={toggleSidebar} />
    );
    fireEvent.click(screen.getByTestId("sidebar"));
    expect(toggleSidebar).toHaveBeenCalledTimes(1);
  });
  test("Does not call toggleSidebar when Backdrop is clicked and isSidebarOpen is false", () => {
    render(
      <SidebarTablet isSidebarOpen={false} toggleSidebar={toggleSidebar} />
    );
    const backdrop = screen.queryByTestId("sidebar");
    if (backdrop) {
      fireEvent.click(backdrop);
    }
    expect(toggleSidebar).not.toHaveBeenCalled();
  });
});
