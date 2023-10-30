import { render, screen, fireEvent } from "@testing-library/react";
import SignUp from "./index";
import AuthContext from "../../Contexts/authContext";
import { AuthType } from "../../Contexts/typesContext/authType";
import { MemoryRouter } from "react-router-dom";
import { JSX } from "react/jsx-runtime";
const currentUser: AuthType = {
  handleLogin: (email, password) => Promise.resolve(),
  isLoading: false,
  isError: null,
  changeUserName: (newName) => {},
  userData: null,
  setUserData: (data) => {},
  signInWithGoogle: () => Promise.resolve(),
  signOut: () => Promise.resolve(),
  setIsError: (arg) => {},
  registration: jest.fn((email, password, name) => Promise.resolve()),
  isLoadingGoogle: false,
};
describe("Login Component", () => {
  let registrationComponent: JSX.Element;
  beforeEach(() => {
    registrationComponent = (
      <MemoryRouter initialEntries={["/react_ts_todo/login"]}>
        <AuthContext.Provider value={currentUser}>
          <SignUp />
        </AuthContext.Provider>
      </MemoryRouter>
    );
  });
  test("Renders Login component", () => {
    render(registrationComponent);
    screen.getByTestId("signUpPage");
  });

  test("Handles form submission with valid input", () => {
    render(registrationComponent);

    const nameInput = screen.getByTestId("inputName");
    const emailInput = screen.getByTestId("inputEmail");
    const passwordInput = screen.getByTestId("inputPassword");
    const submitButton = screen.getByTestId("btnRegister");
    fireEvent.change(nameInput, { target: { value: "Ivan12" } });
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });
    fireEvent.click(submitButton);

    expect(currentUser.registration).toHaveBeenCalledWith(
      "test@example.com",
      "testpassword",
      "Ivan12"
    );
  });

  test("Shows an error message for empty input", () => {
    render(registrationComponent);
    const submitButton = screen.getByTestId("btnRegister");

    fireEvent.click(submitButton);

    expect(currentUser.registration).not.toHaveBeenCalled();
    const errorMessage = screen.queryByTestId("error-message");
    expect(errorMessage).not.toBe(0);
  });
});
