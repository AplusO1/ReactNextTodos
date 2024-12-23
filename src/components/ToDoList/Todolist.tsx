"use client";

import { useRouter } from "next/navigation";
import Task from "../Task/Task";
import styles from "./todolist.module.scss";
import { PropsType } from "@/utils/types";

export const ToDoList = (props: PropsType) => {
  const router = useRouter();

  const addTask = () => {
    router.push("/add-task");
  };

  const onAllClickHandler = () => props.changeFilter("all");
  const onActiveClickHandler = () => props.changeFilter("active");
  const onCompletedClickHandler = () => props.changeFilter("completed");

  return (
    <div className={styles.todo}>
      <h3 className={styles.title}>{props.title}</h3>
      <button className={styles.button} onClick={addTask}>
        Add Task
      </button>
      {props.tasks.length === 0 ? (
        <p className={styles.noTasksMessage}>There are no tasks</p>
      ) : (
        <ul className={styles.todoList}>
          {props.tasks.map((t) => (
            <Task
              t={t}
              changeTaskStatus={props.changeTaskStatus}
              changeTaskTitle={props.changeTaskTitle}
              removeTask={props.removeTask}
              key={t.id}
            />
          ))}
        </ul>
      )}
      <div className={styles.buttonList}>
        <button
          className={`${styles.button} ${
            props.filter === "all" ? styles["active-filter"] : ""
          }`}
          onClick={onAllClickHandler}
        >
          All
        </button>
        <button
          className={`${styles.button} ${
            props.filter === "active" ? styles["active-filter"] : ""
          }`}
          onClick={onActiveClickHandler}
        >
          Active
        </button>
        <button
          className={`${styles.button} ${
            props.filter === "completed" ? styles["active-filter"] : ""
          }`}
          onClick={onCompletedClickHandler}
        >
          Completed
        </button>
      </div>
    </div>
  );
};
