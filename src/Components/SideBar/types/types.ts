interface SidebarItemProps {
  name: string;
  icon: string;
}
interface PropsSidebarForm {
  error: string;
  setShowForm: (arg: boolean) => void;
  color: string;
  handleCancel: () => void;
  setColor: (arg: string) => void;
  setTitle: (arg: string) => void;
  title: string;
  addNewCategory: (e: React.FormEvent) => void;
}
interface CategorieItemProps {
  name: string;
  color: string;
  categoryId: string;
  onNavigate: (path: string) => void;
}
interface PropAddBtn {
  setShowForm: (arg: boolean) => void;
}
interface TypesPropsSideBarItem extends SidebarItemProps {
  isActive: boolean;
  children?: React.ReactNode;
}
interface PropsSidebarTablet {
  isSidebarOpen: boolean;
  toggleSidebar: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
interface PropsBurgerMenu {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (arg: boolean) => void;
}
interface SidebarItemSettingsProps {
  name: string;
  icon: string;
  isActive: boolean;
}
export type {
  SidebarItemProps,
  PropsSidebarForm,
  CategorieItemProps,
  PropsBurgerMenu,
  PropAddBtn,
  TypesPropsSideBarItem,
  PropsSidebarTablet,
  SidebarItemSettingsProps,
};
