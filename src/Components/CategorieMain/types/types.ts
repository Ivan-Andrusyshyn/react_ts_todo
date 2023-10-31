interface CategorieMainProps {
  name: string | undefined;
  handleDone: () => void;
  handleAll: () => void;
  handleNotDone: () => void;
  allActive: boolean;
  doneActive: boolean;
  notDoneActive: boolean;
  listToDisplay: number;
  listOfLists: any;
}
interface listCategoriesType {
  id: number;
  title: string;
  categorie: string;
  color: string;
  done: boolean;
  date: number | Date;
}
export type { CategorieMainProps, listCategoriesType };
