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

export type { SidebarItemProps, PropsSidebarForm, CategorieItemProps };
