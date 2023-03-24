import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentTodo } from "../../redux/action";
import { currentTodoSelector } from "../../redux/selector";
import App from "./App";

const AppContainer = () => {
  const dispatch = useDispatch();

  const currentData = useSelector(currentTodoSelector);
  const [isQuickViewOpen, setQuickViewOpen] = useState(false);
  const [isModalAddEditOpen, setModalAddEditOpen] = useState(false);
  const [modalType, setModalType] = useState("add");
  const handleModalAddOpen = () => {
    setModalAddEditOpen(true);
    setModalType("add");
  };

  const handleModalEditOpen = () => {
    setModalAddEditOpen(true);
    setModalType("edit");
  };

  const handleModalAddEditClose = () => {
    dispatch(getCurrentTodo(""));
    setModalAddEditOpen(false);
  };
  return (
    <App
      currentData={currentData}
      isQuickViewOpen={isQuickViewOpen}
      setQuickViewOpen={setQuickViewOpen}
      isModalAddEditOpen={isModalAddEditOpen}
      modalType={modalType}
      onModalAddOpen={handleModalAddOpen}
      onModalEditOpen={handleModalEditOpen}
      onModalAddEditClose={handleModalAddEditClose}
    />
  );
};
export default AppContainer;
