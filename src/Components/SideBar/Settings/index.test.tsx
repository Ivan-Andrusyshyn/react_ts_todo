import { screen, render, fireEvent } from "@testing-library/react";
import SettingsItem from ".";
import "@testing-library/jest-dom/extend-expect";

describe("SettingsItem Component", () => {
  test("Renders SettingsItem with initial state", () => {
    render(<SettingsItem isActive={false} icon="icon" name="Settings" />);
    screen.getByTestId("settingsWrapper");
  });

  test("Toggles the list when SettingsContainer is clicked", () => {
    render(<SettingsItem isActive={false} icon="icon" name="Settings" />);
    const settingsWrapper = screen.getByTestId("settingsWrapper");
    fireEvent.click(settingsWrapper);
    const listSettings = screen.getByTestId("listSettings");
    expect(listSettings).toHaveStyle({ maxHeight: "200px", opacity: "1" });
    fireEvent.click(settingsWrapper);
    expect(listSettings).toHaveStyle({ maxHeight: "0" });
  });
});
