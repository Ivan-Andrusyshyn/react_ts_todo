interface CategorieItemProps {
  name: string;
  color: string;
  categoryId: string;
  onNavigate: (path: string) => void;
}
interface CategoryEditFormProps {
  initialName: string;
  initialColor: string;
  onCancel: (prev: boolean) => void;
  openModal: boolean;
  onSave: (editedName: string, editedColor: string) => void;
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
interface ModalProp {
  modalOpenForm: boolean;
  editedName: string;
  editedColor: string;
  handleEdit: (editedName: string, editedColor: string) => void;
  handleDelete: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleCancel: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  backdropCloseModal: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  showFormForEdit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  setModalOpenForm: (value: boolean) => void;
}

export type {
  PropsSidebarForm,
  CategorieItemProps,
  CategoryEditFormProps,
  ModalProp,
};
