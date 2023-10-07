export interface CategorieProps {
  id: string;
  name: string;
  color: string;
}

export type CategorieContextType = {
  categList: CategorieProps[];
  addCategory: (newCategory: CategorieProps) => void;
};
