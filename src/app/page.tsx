"use client";

import { useCallback, useEffect, useMemo } from "react";
import { ToDoList } from "../components/ToDoList/Todolist";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import {
  removeTask,
  changeTaskStatus,
  changeTaskTitle,
  fetchTasks,
  setFilter,
} from "../state/tasksSlice";
import { FilterValuesType } from "@/utils/types";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();

  const { tasks, loading, error, filter } = useSelector(
    (state: RootState) => ({
      tasks: state.tasks.tasks,
      loading: state.tasks.loading,
      error: state.tasks.error,
      filter: state.tasks.filter,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const tasksForTodolist = useMemo(() => {
    switch (filter) {
      case "active":
        return tasks.filter((task) => !task.completed);
      case "completed":
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  }, [filter, tasks]);

  const changeFilter = useCallback(
    (value: FilterValuesType) => {
      dispatch(setFilter(value));
    },
    [dispatch]
  );

  const removeTaskHandler = useCallback(
    (id: string) => {
      dispatch(removeTask(id));
    },
    [dispatch]
  );

  const changeStatusHandler = useCallback(
    (taskId: string, completed: boolean) => {
      dispatch(changeTaskStatus({ id: taskId, completed }));
    },
    [dispatch]
  );

  const changeTaskTitleHandler = useCallback(
    (taskId: string, newTitle: string) => {
      dispatch(changeTaskTitle({ id: taskId, title: newTitle }));
    },
    [dispatch]
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <ToDoList
        title={"todos"}
        tasks={tasksForTodolist}
        removeTask={removeTaskHandler}
        changeFilter={changeFilter}
        changeTaskStatus={changeStatusHandler}
        changeTaskTitle={changeTaskTitleHandler}
        filter={filter}
      />
    </div>
  );
}
