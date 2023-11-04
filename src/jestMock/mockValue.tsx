import { AuthType } from "../Contexts/typesContext/authType";
import { CategorieContextType } from "../Contexts/typesContext/categoriesType";
import { TaskListType, TaskProps } from "../Contexts/typesContext/taskType";
import { TaskListContext } from "../Contexts/taskListContext";
import { CategoriesContext } from "../Contexts/categoriesContext";
import React, { ReactNode } from "react";
import { DeleteContext } from "../Contexts/delete_edit_Context";
import { AddContext } from "../Contexts/addContext";
import AuthContext from "../Contexts/authContext";

const DeleteContextMock = {
  showDelete: false,
  showEdit: false,
  setShowDelete: jest.fn(),
  id: 42,
  setShowEdit: jest.fn(),
  setId: jest.fn(),
};

const mockCategoryListProps = {
  name: "Category Name",
  handleDone: jest.fn(),
  handleAll: jest.fn(),
  handleNotDone: jest.fn(),
  allActive: true,
  doneActive: false,
  notDoneActive: false,
  listOfTasks: [
    {
      id: "1",
      title: "Task 1",
      categorie: "Category 1",
      color: "blue",
      done: false,
      date: "2023-10-30",
    },
    {
      id: "2",
      title: "Task 2",
      categorie: "Category 2",
      color: "red",
      done: true,
      date: "2023-10-31",
    },
  ],
};

const CategorieContext: CategorieContextType = {
  categList: [],
  deleteCategory: (itemId: string) => {},
  editCategory: () => {},
  addCategory: () => {},
};

const TaskListContextMock: TaskListType = {
  taskList: [],
  doneTasks: [],
  notDoneTasks: [],
  deleteCategoryTasks: jest.fn(),
  editTask: jest.fn(),
  addTask: jest.fn(),
  checkTask: jest.fn(),
  deleteTask: jest.fn(),
};

const AddItems = {
  showAdd: true,
  setShowAdd: jest.fn(),
  id: 22,
  setId: jest.fn(),
};

const ListContext: TaskListType = {
  taskList: [],
  doneTasks: [],
  notDoneTasks: [],
  deleteCategoryTasks: (categoryName: string) => {},
  editTask: (id: number, newTask: TaskProps) => {},
  addTask: (task: TaskProps) => {},
  checkTask: (id: number) => {},
  deleteTask: (id: number) => {},
};

const handleLogin: AuthType = {
  handleLogin: jest.fn((email, password) => Promise.resolve()),
  isLoading: false,
  isError: null,
  changeUserName: (newName) => {},
  userData: null,
  setUserData: (data) => {},
  signInWithGoogle: () => Promise.resolve(),
  signOut: () => Promise.resolve(),
  setIsError: (arg) => {},
  registration: (email, password, name) => Promise.resolve(),
  isLoadingGoogle: false,
};

const mockPropsModalToggle = {
  modalOpenForm: false,
  editedName: "Category 1",
  editedColor: "#FF5733",
  handleEdit: jest.fn(),
  handleDelete: jest.fn(),
  handleCancel: jest.fn(),
  backdropCloseModal: jest.fn(),
  showFormForEdit: jest.fn(),
  setModalOpenForm: jest.fn(),
};

const mockPropsAddCategorieModal = {
  error: "",
  setShowForm: jest.fn(),
  color: "",
  handleCancel: jest.fn(),
  setColor: jest.fn(),
  setTitle: jest.fn(),
  title: "",
  addNewCategory: jest.fn(),
};

const currentUser: AuthType = {
  handleLogin: (email, password) => Promise.resolve(),
  isLoading: false,
  isError: null,
  changeUserName: (newName) => {},
  userData: null,
  setUserData: (data) => {},
  signInWithGoogle: () => Promise.resolve(),
  signOut: () => Promise.resolve(),
  setIsError: (arg) => {},
  registration: jest.fn((email, password, name) => Promise.resolve()),
  isLoadingGoogle: false,
};

export {
  AddItems,
  TaskListContextMock,
  CategorieContext,
  mockCategoryListProps,
  DeleteContextMock,
  ListContext,
  handleLogin,
  mockPropsModalToggle,
  mockPropsAddCategorieModal,
  currentUser,
};
