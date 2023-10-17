export interface TaskProps {
  id: number;
  title: string;
  done: boolean;
  categorie: string;
  color: string;
  date: number | Date;
}
export interface UserDataProps {
  email: string | null;
  userName: string | null;
}

export type TaskListType = {
  taskList: TaskProps[];
  doneTasks: TaskProps[];
  deleteCategoryTasks: (categoryName: string) => void;
  notDoneTasks: TaskProps[];
  editTask: (id: number, newTask: TaskProps) => void;
  addTask: (task: TaskProps) => void;
  checkTask: (id: number) => void;
  deleteTask: (id: number) => void;
};
