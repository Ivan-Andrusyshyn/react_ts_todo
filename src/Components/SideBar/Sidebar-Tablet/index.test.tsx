import { screen, render, fireEvent } from "@testing-library/react";
import SidebarTablet from ".";
import { MemoryRouter } from "react-router-dom";
import { AuthType } from "../../../Contexts/typesContext/authType";
import AuthContext from "../../../Contexts/authContext";
import { CategorieContextType } from "../../../Contexts/typesContext/categoriesType";
import { CategoriesContext } from "../../../Contexts/categoriesContext";
const CategorieContext: CategorieContextType = {
  categList: [],
  deleteCategory: (itemId: string) => {},
  editCategory: () => {},
  addCategory: () => {},
};
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
describe("SidebarTablet Component", () => {
  const toggleSidebar = jest.fn();
  let SidebarTabletTrue: JSX.Element;
  let SidebarTabletFalse: JSX.Element;

  beforeEach(() => {
    SidebarTabletTrue = (
      <MemoryRouter initialEntries={["/react_ts_todo/categorie/w"]}>
        <CategoriesContext.Provider value={CategorieContext}>
          <AuthContext.Provider value={handleLogin}>
            <SidebarTablet isSidebarOpen={true} toggleSidebar={toggleSidebar} />
          </AuthContext.Provider>
        </CategoriesContext.Provider>
      </MemoryRouter>
    );
    SidebarTabletFalse = (
      <MemoryRouter initialEntries={["/react_ts_todo/categorie/w"]}>
        <CategoriesContext.Provider value={CategorieContext}>
          <AuthContext.Provider value={handleLogin}>
            <SidebarTablet
              isSidebarOpen={false}
              toggleSidebar={toggleSidebar}
            />
          </AuthContext.Provider>
        </CategoriesContext.Provider>
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
