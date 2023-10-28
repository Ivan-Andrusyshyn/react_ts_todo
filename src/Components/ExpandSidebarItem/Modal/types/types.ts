interface CategoryEditFormProps {
  initialName: string;
  initialColor: string;
  onCancel: (prev: boolean) => void;
  openModal: boolean;
  onSave: (editedName: string, editedColor: string) => void;
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

export type { CategoryEditFormProps, ModalProp };
