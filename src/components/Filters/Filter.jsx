import React from "react";
import { func, string, number } from "prop-types";
import classnames from "classnames";
import styles from "./Filter.module.scss";

const Filter = ({
  onClearCompleted,
  onAllFilter,
  onActiveFilter,
  onCompletedFilter,
  counter,
  filter,
  onCheckAll,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.filter}>
        <div className={styles.filter_group}>
          <button
            className={classnames(styles.all_filter, {
              [styles.active_button]: filter === "all",
            })}
            onClick={onAllFilter}
          >
            Все
          </button>

          <button
            className={classnames(styles.active_filter, {
              [styles.active_button]: filter === "active",
            })}
            onClick={onActiveFilter}
          >
            Запланированные
          </button>

          <button
            className={classnames(styles.completed_filter, {
              [styles.active_button]: filter === "completed",
            })}
            onClick={onCompletedFilter}
          >
            Выполненные
          </button>
        </div>
        <span className={styles.line_filter} />
        <div className={styles.filter_dop}>
          <button className={styles.all_completed} onClick={onCheckAll}>
            Отметить все
          </button>
          <button className={styles.clear_completed} onClick={onClearCompleted}>
            Удалить выполненные
          </button>
          <div className={styles.count}>{counter} задач(и) осталось</div>{" "}
        </div>
      </div>
    </div>
  );
};

Filter.propTypes = {
  onClearCompleted: func,
  onAllFilter: func,
  onActiveFilter: func,
  onCompletedFilter: func,
  counter: number,
  filter: string,
};

export default Filter;
