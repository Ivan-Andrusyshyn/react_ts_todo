import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./index";
import AuthContext from "../../Contexts/authContext";
import { AuthType } from "../../Contexts/typesContext/authType";
import { MemoryRouter } from "react-router-dom";
import { JSX } from "react/jsx-runtime";
const handleLogin: AuthType = {
  handleLogin: jest.fn((email, password) => Promise.resolve()),
  isLoading: false,
  isError: null,
  changeUserName: (newName) => {},
  userData: null,
  setUserData: (data) => {},
  signInWithGoogle: () => Promise.resolve(),
  signOut: () => Promise.resolve(),
  setIsError: (arg) => {},
  registration: (email, password, name) => Promise.resolve(),
  isLoadingGoogle: false,
};
describe("Login Component", () => {
  let loginComponent: JSX.Element;

  beforeEach(() => {
    loginComponent = (
      <MemoryRouter initialEntries={["/react_ts_todo/login"]}>
        <AuthContext.Provider value={handleLogin}>
          <Login />
        </AuthContext.Provider>
      </MemoryRouter>
    );
  });
  test("Renders Login component", () => {
    render(loginComponent);
    screen.getByTestId("loginPage");
  });

  test("Handles form submission with valid input", () => {
    render(loginComponent);
    const emailInput = screen.getByTestId("inputEmail");
    const passwordInput = screen.getByTestId("inputPassword");
    const submitButton = screen.getByTestId("btnLogin");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "Testpassword123" } });
    fireEvent.click(submitButton);

    expect(handleLogin.handleLogin).toHaveBeenCalledWith(
      "test@example.com",
      "Testpassword123"
    );
  });

  test("Shows an error message for empty input", () => {
    render(loginComponent);
    const submitButton = screen.getByTestId("btnLogin");

    fireEvent.click(submitButton);

    expect(handleLogin.handleLogin).not.toHaveBeenCalled();
    const errorMessage = screen.queryByTestId("error-message");
    expect(errorMessage).not.toBe(0);
  });

  test("Toggles password visibility", () => {
    render(loginComponent);
    const passwordInput = screen.getByTestId("inputPassword");
    const toggleButton = screen.getByTestId("passwordToggle");
    expect(passwordInput.getAttribute("type")).toBe("password");

    fireEvent.click(toggleButton);

    expect(passwordInput.getAttribute("type")).toBe("text");

    fireEvent.click(toggleButton);

    expect(passwordInput.getAttribute("type")).toBe("password");
  });
});
