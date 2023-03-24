import * as Yup from "yup";
import { Formik, Form } from "formik";
import ModalContainer from "../Modal/ModalContainer";
import styles from "./CreateEditModal.module.scss";
const DisplayingErrorMessagesSchema = Yup.object({
  title: Yup.string()
    .max(25, "Максимальное количество символов = 25")
    .required("Введите название"),
  description: Yup.string()
    .max(300, "Максимальное количество символов = 300")
    .required("Введите описание"),
  date: Yup.string().required("Поставьте срок выполнения задания"),
  complete: Yup.bool().required("Выберите значение"),
});

const CreateEditModal = ({
  currentData,
  isModalAddEditOpen,
  modalType,
  onModalAddEditClose,
  onAddNewTodo,
  onEditTodoItem,
}) => {
  const initialValues = {
    title: modalType === "edit" ? currentData.title : "",
    description: modalType === "edit" ? currentData.description : "",
    date: modalType === "edit" ? currentData.date : "",
    complete: modalType === "edit" ? currentData.complete : false,
  };
  return (
    <ModalContainer isOpen={isModalAddEditOpen}>
      {(modalType === "add" || modalType === "edit") && (
        <Formik
          initialValues={initialValues}
          validationSchema={DisplayingErrorMessagesSchema}
          onSubmit={modalType === "add" ? onAddNewTodo : onEditTodoItem}
        >
          {({ errors, touched, handleChange, values, setFieldValue }) => (
            <Form>
              <div className={styles.root}>
                <div className={styles.field_content}>
                  <label htmlFor="title" className={styles.field_name}>
                    Название задачи:
                  </label>
                  <input
                    type="text"
                    placeholder="Введите название задачи"
                    onChange={handleChange}
                    name="title"
                    value={values.title}
                    className={styles.field_input}
                  />{" "}
                  {errors.title && touched.title && (
                    <div className={styles.error_message}>{errors.title}</div>
                  )}
                </div>

                <div className={styles.field_content}>
                  <label htmlFor="complete" className={styles.field_name}>
                    Статус:
                  </label>
                  <div className={styles.buttons_complete}>
                    <input
                      type="radio"
                      id="yes"
                      name="complete"
                      onChange={(e) => {
                        setFieldValue("complete", e.currentTarget.checked);
                      }}
                      checked={values.complete}
                    />
                    <div>Выполнено</div>
                    <input
                      type="radio"
                      id="no"
                      name="complete"
                      onChange={(e) =>
                        setFieldValue("complete", !e.currentTarget.checked)
                      }
                      checked={!values.complete}
                    />
                    <div>Не выполнено</div>
                  </div>
                </div>

                <div className={styles.field_content}>
                  <label htmlFor="description" className={styles.field_name}>
                    Описание задачи:
                  </label>
                  <input
                    type="text"
                    placeholder="Введите описание задачи"
                    onChange={handleChange}
                    name="description"
                    value={values.description}
                    className={styles.field_input_description}
                  />{" "}
                  {errors.description && touched.description && (
                    <div className={styles.error_message}>
                      {errors.description}
                    </div>
                  )}
                </div>

                <div className={styles.field_content}>
                  <label htmlFor="date" className={styles.field_name}>
                    Срок выполнение задачи:
                  </label>
                  <input
                    type="date"
                    onChange={handleChange}
                    name="date"
                    value={values.date}
                    className={styles.field_input}
                  />{" "}
                  {errors.date && touched.date && (
                    <div className={styles.error_message}>{errors.date}</div>
                  )}
                </div>

                {modalType === "add" ? (
                  <button type="submit" className={styles.add_button}>
                    Добавить
                  </button>
                ) : (
                  <button type="submit" className={styles.save_button}>
                    Сохранить
                  </button>
                )}
                <button
                  type="reset"
                  onClick={onModalAddEditClose}
                  className={styles.quick_view_close_button}
                >
                  Закрыть
                </button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </ModalContainer>
  );
};

export default CreateEditModal;
