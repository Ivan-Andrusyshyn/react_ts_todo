import { screen, render, fireEvent } from "@testing-library/react";
import BurgerMenu from ".";

describe("Testing Tablet Sidebar", () => {
  const setIsSidebarOpen = jest.fn();
  test("Renders BurgerMenu when isSidebarOpen is true", () => {
    render(
      <BurgerMenu isSidebarOpen={true} setIsSidebarOpen={setIsSidebarOpen} />
    );
    screen.getByTestId("burger_menu");
  });
  test("Clicking the BurgerMenu toggles the sidebar", () => {
    render(
      <BurgerMenu isSidebarOpen={true} setIsSidebarOpen={setIsSidebarOpen} />
    );
    const burgerMenu = screen.getByTestId("burger_menu");
    fireEvent.click(burgerMenu);
    expect(setIsSidebarOpen).toHaveBeenCalledWith(false);
  });
});
