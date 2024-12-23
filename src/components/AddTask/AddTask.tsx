'use client';

import { ChangeEvent, KeyboardEvent, useState } from "react";
import styles from "./AddTask.module.scss";
import { AddTaskProps } from "@/utils/types";
import { useRouter } from "next/navigation";

export const AddTask = (props: AddTaskProps) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const addTask = () => {
    if (title.trim() !== "") {
      props.addTask(title);
      setTitle("");
      router.push('/');
    } else {
      setError("Title is required");
    }
  };

  const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (error !== null) {
      setError(null);
    }
    if (e.key === "Enter") {
      if (title.trim() !== "") {
        props.addTask(title);
        setTitle("");
        router.push('/')
      } else {
        setError("Title is required");
      }
    }
  };

  return (
    <div className={styles.inputWrapper}>
      <h2>Add New Task</h2>
      <div>
        <input
          type="text"
          value={title}
          onChange={onNewTitleChangeHandler}
          placeholder="Введите новую задачу"
          onKeyDown={onKeyDownHandler}
          className={error ? styles.error : ""}
        />
        {error && <div className={styles["error-message"]}>{error}</div>}
      </div>
      <button onClick={addTask}>Save Task</button>
    </div>
  );
};
