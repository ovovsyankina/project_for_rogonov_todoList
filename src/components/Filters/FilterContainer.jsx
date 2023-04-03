import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { number, string } from "prop-types";
import {
  activeFilter,
  allFilter,
  checkAllTodo,
  clearCompleted,
  completedFilter,
} from "../../redux/action";
import Filter from "./Filter";

const FilterContainer = ({ counter, filter }) => {
  const dispatch = useDispatch();

  const handleClearCompleted = useCallback(() => {
    dispatch(clearCompleted());
    document.getElementById("fon").classList.add("dop_fon");
    setTimeout(() => {
      document.getElementById("fon").classList.remove("dop_fon");
    }, 2000);
  }, [dispatch]);

  const handleActiveFilter = useCallback(() => {
    dispatch(activeFilter());
  }, [dispatch]);

  const handleAllFilter = useCallback(() => {
    dispatch(allFilter());
  }, [dispatch]);

  const handleCompletedFilter = useCallback(() => {
    dispatch(completedFilter());
  }, [dispatch]);

  const handleCheckAll = useCallback(() => {
    dispatch(checkAllTodo());
  }, [dispatch]);

  return (
    <Filter
      onClearCompleted={handleClearCompleted}
      onActiveFilter={handleActiveFilter}
      onAllFilter={handleAllFilter}
      onCompletedFilter={handleCompletedFilter}
      counter={counter}
      filter={filter}
      onCheckAll={handleCheckAll}
    />
  );
};

FilterContainer.propTypes = {
  counter: number,
  filter: string,
};

export default FilterContainer;
