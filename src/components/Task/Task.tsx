"use client";

import { useRouter } from "next/navigation";
import styles from "./Task.module.scss";
import { TaskPropsType } from "../../utils/types";
import { ChangeEvent } from "react";



export default function Task(props: TaskPropsType) {
  const router = useRouter();

  const onTaskClickHandler = () => {
    router.push(`/tasks/${props.t.id}`);
  };

  const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.changeTaskStatus(props.t.id, e.currentTarget.checked);
  };

  const onRemoveHandler = () => {
    props.removeTask(props.t.id);
  };

  return (
    <li key={props.t.id} className={props.t.completed ? styles["is-done"] : ""}>
      <input
        className={styles.todoCheckbox}
        type="checkbox"
        checked={props.t.completed}
        onChange={onChangeStatusHandler}
      />
      <span className={styles.span} onClick={onTaskClickHandler}>
        {props.t.title}
      </span>
      <button className={styles.button} onClick={onRemoveHandler}>
        Delete
      </button>
    </li>
  );
}
