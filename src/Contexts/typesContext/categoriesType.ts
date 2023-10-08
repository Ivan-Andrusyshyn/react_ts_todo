export interface CategorieProps {
  id: string;
  name: string;
  color: string;
}

export type CategorieContextType = {
  categList: CategorieProps[];
  deleteCategory: (categoryId: string) => void;
  editCategory: (categoryId: string, updatedCategory: CategorieProps) => void;
  addCategory: (newCategory: CategorieProps) => void;
};
