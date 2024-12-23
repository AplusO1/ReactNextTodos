'use client';

import { AddTask } from '../../components/AddTask/AddTask';
import { addTask } from '@/state/tasksSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from "../../state/store";
import { useCallback } from 'react';


export default function AddTaskPage() {
  const dispatch = useDispatch<AppDispatch>();
  
  const addTaskHandler = useCallback(
    (title: string) => {
      dispatch(addTask(title));
    },
    [dispatch],
  );
  return (
    <div>
      <AddTask addTask={addTaskHandler}/>
    </div>
  );
}