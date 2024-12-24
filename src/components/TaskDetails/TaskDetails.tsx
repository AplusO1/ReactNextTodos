"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { useParams, useRouter } from "next/navigation";
import { EditableSpan } from "../EditableSpan/EditableSpan";
import styles from "./TaskDetails.module.scss";
import { TaskDetailsProps } from "@/utils/types";

export function TaskDetails(props: TaskDetailsProps) {
  const { id } = useParams();
  const router = useRouter();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const task = tasks.find((task) => task.id === id);

  if (!task) return <div>Task not found</div>;

  const onBackClick = () => router.push("/");

  return (
    <div className={styles.inputWrapper}>
      <h2>Task Details</h2>
      <div>ID: {task.id}</div>
      <div>
        Title:{" "}
        <EditableSpan
          title={task.title}
          onChange={(newTitle) => props.changeTaskTitle(task.id, newTitle)}
        />
      </div>
      <div>Status: {task.completed ? "Выполнено" : "Не выполнено"}</div>
      <div className={styles.buttonList}>
        <button onClick={onBackClick}>Назад</button>
        <button
          onClick={() => props.changeTaskStatus(task.id, !task.completed)}
        >
          {task.completed ? "Таска Завершена" : "Завершить Таску"}
        </button>
      </div>
    </div>
  );
}
