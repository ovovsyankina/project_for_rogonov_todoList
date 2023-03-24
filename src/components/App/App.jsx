import React from "react";
import TodoListContainer from "../TodoList/TodoListContainer";
import TodoInputContainer from "../TodoInput/TodoInputContainer";
import styles from "./App.module.scss";
import CreateEditModalContainer from "../CreateEditModal/CreateEditModalContainer";
import SnackBarContainer from "../SnackBar/SnackBarContainer";

const App = ({
  isQuickViewOpen,
  setQuickViewOpen,
  isModalAddEditOpen,
  modalType,
  onModalAddOpen,
  onModalEditOpen,
  onModalAddEditClose,
  currentData,
}) => {
  return (
    <div>
      <div className={styles.fon} />
      <div className={styles.body}>
        <div className={styles.header}>
          <div className={styles.head}>TODO LIST</div>
          <TodoInputContainer onModalAddOpen={onModalAddOpen} />
        </div>

        <TodoListContainer onModalEditOpen={onModalEditOpen} />
      </div>
      <CreateEditModalContainer
        isModalAddEditOpen={isModalAddEditOpen}
        modalType={modalType}
        onModalAddEditClose={onModalAddEditClose}
        currentData={currentData}
      />{" "}
      <SnackBarContainer />
    </div>
  );
};

export default App;
