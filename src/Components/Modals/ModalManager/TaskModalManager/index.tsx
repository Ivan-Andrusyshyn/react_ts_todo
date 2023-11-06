import React from "react";
import AddModal from "../../Task-modals/AddModal";
import DeleteModal from "../../Task-modals/DeleteModal";
import EditModal from "../../Task-modals/EditModal";
interface ModalManagerProp {
  showEdit: boolean;
  showDelete: boolean;
  showAdd: boolean;
}
const TaskModalManager: React.FC<ModalManagerProp> = ({
  showEdit,
  showDelete,
  showAdd,
}) => {
  return (
    <>
      {showEdit && <EditModal />}
      {showDelete && <DeleteModal />}
      {showAdd && <AddModal />}
    </>
  );
};
export default TaskModalManager;
