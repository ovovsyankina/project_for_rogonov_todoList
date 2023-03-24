import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { number, string } from "prop-types";
import {
  activeFilter,
  allFilter,
  clearCompleted,
  completedFilter,
} from "../../redux/action";
import Filter from "./Filter";

const FilterContainer = ({ counter, filter }) => {
  const dispatch = useDispatch();

  const handleClearCompleted = useCallback(() => {
    dispatch(clearCompleted());
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

  return (
    <Filter
      onClearCompleted={handleClearCompleted}
      onActiveFilter={handleActiveFilter}
      onAllFilter={handleAllFilter}
      onCompletedFilter={handleCompletedFilter}
      counter={counter}
      filter={filter}
    />
  );
};

FilterContainer.propTypes = {
  counter: number,
  filter: string,
};

export default FilterContainer;
