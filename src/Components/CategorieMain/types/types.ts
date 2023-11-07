interface CategorieMainProps {
  name: string | undefined;
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
interface TaskCardProps {
  id: number;
  name: string;
  list: string;
  color: string;
  done: boolean;
  date: number | Date;
}
export type { CategorieMainProps, TaskCardProps, listCategoriesType, tagProps };
