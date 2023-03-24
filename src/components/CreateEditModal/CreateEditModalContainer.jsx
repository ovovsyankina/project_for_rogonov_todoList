import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  editTodo,
  getCurrentTodo,
  setSnackBar,
} from "../../redux/action";
import { todosSelector } from "../../redux/selector";
import CreateEditModal from "./CreateEditModal";

const CreateEditModalContainer = ({
  isModalAddEditOpen,
  modalType,
  onModalAddEditClose,
  currentData,
}) => {
  const todos = useSelector(todosSelector);
  const dispatch = useDispatch();
  const handleAddNewTodo = useCallback(
    (values) => {
      if (todos.some((item) => values.date === item.date)) {
        dispatch(
          setSnackBar("Задача с такой датой уже существует, измените дату")
        );
      } else {
        dispatch(
          addTodo({
            id: values.id,
            title: values.title,
            complete: values.complete,
            description: values.description,
            date: values.date,
          })
        );

        onModalAddEditClose();
      }
    },
    [dispatch, onModalAddEditClose, todos]
  );

  const handleEditTodoItem = useCallback(
    (values) => {
      dispatch(
        editTodo({
          id: currentData.id,
          title: values.title,
          complete: values.complete,
          description: values.description,
          date: values.date,
        })
      );

      onModalAddEditClose();
      dispatch(getCurrentTodo(""));
    },
    [dispatch, currentData.id, onModalAddEditClose]
  );

  return (
    <CreateEditModal
      onAddNewTodo={handleAddNewTodo}
      isModalAddEditOpen={isModalAddEditOpen}
      onModalAddEditClose={onModalAddEditClose}
      modalType={modalType}
      onEditTodoItem={handleEditTodoItem}
      currentData={currentData}
    />
  );
};
export default CreateEditModalContainer;
