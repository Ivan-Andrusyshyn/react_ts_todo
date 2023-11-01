interface CategorieMainProps {
  name: string | undefined;
  handleDone: () => void;
  handleAll: () => void;
  handleNotDone: () => void;
  allActive: boolean;
  doneActive: boolean;
  notDoneActive: boolean;
  listOfTasks: any;
}
interface listCategoriesType {
  id: number;
  title: string;
  categorie: string;
  color: string;
  done: boolean;
  date: number | Date;
}
interface tagProps {
  name: string;
  active: boolean;
}
export type { CategorieMainProps, listCategoriesType, tagProps };
