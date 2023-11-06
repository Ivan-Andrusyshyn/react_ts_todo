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
export type { CategorieMainProps, listCategoriesType, tagProps };
