import { render, screen } from "@testing-library/react";
import SidebarItem from ".";
test("renders AddButton component", () => {
  render(<SidebarItem isActive={false} name={""} icon={""} />);
  screen.getByTestId("SidebarItem");
});
