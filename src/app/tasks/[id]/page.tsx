'use client';

import { useCallback } from "react";
import { TaskDetails } from "../../../components/TaskDetails/TaskDetails";
import { useDispatch } from "react-redux";
import { changeTaskStatus, changeTaskTitle } from "@/state/tasksSlice";
import { AppDispatch } from "@/state/store";

export default function TaskDetailsPage() {
  const dispatch = useDispatch<AppDispatch>();

  const changeTaskTitleHandler = useCallback(
    (taskId: string, newTitle: string) => {
      dispatch(changeTaskTitle({ id: taskId, title: newTitle }));
    },
    [dispatch]
  );

  const changeStatusHandler = useCallback(
    (taskId: string, completed: boolean) => {
      dispatch(changeTaskStatus({ id: taskId, completed }));
    },
    [dispatch]
  );

  return (
    <div>
      <TaskDetails
        changeTaskTitle={changeTaskTitleHandler}
        changeTaskStatus={changeStatusHandler}
      />
    </div>
  );
}
