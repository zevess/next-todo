'use client'
import React from 'react'
import { Container } from './container';
import { InputWithButton } from './input';
import { TaskTable } from './task-table';
import { TaskType } from './task';
import { ThemeToggle } from '../theme-toggle';

interface Props {
  className?: string
}

export const ToDo: React.FC<Props> = ({ className }) => {

  const [storedTasks, setStoredTasks] = React.useState<TaskType[]>([]);
  const [task, setTask] = React.useState('')

  React.useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('tasks') || '[]');
    setStoredTasks(stored);
  }, [])

  const updateLocalStorage = (updatedTasks: any) => {
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setStoredTasks(updatedTasks);
  };

  const addTask = () => {
    if (task.trim() !== '') {
      const newTask = { id: Date.now(), name: task, status: false };
      const updatedTasks = [newTask, ...storedTasks];
      updateLocalStorage(updatedTasks);
      setTask('');
    }
  }

  const handleToggleTask = (id: number) => {
    const updatedTasks = storedTasks.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status, id: Date.now() };
      }
      return task;
    });
    updateLocalStorage(updatedTasks);
  };
  
  const handleDeleteTask = (id: number) => {
    const updatedTasks = storedTasks.filter((item) => item.id !== id);
    updateLocalStorage(updatedTasks);
  }

  return (
    <Container className="flex flex-col items-center dark:bg-black">
      <ThemeToggle className='ml-auto mt-4 mr-4'/>
      <h1 className="text-5xl pt-16 pb-16 dark:text-white">Next To Do</h1>
      <InputWithButton task={task} setTask={setTask} addTask={addTask} />
      <TaskTable tasks={storedTasks} handleToggleTask={handleToggleTask} handleDeleteTask={handleDeleteTask}/>
    </Container>
  );
}
