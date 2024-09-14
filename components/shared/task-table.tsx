import React from 'react'
import { Task, TaskType } from './task'

interface Props {
    className?: string,
    tasks: TaskType[],
    handleToggleTask: (id: number) => void,
    handleDeleteTask: (id: number) => void,
}

export const TaskTable: React.FC<Props> = ({ className, tasks, handleToggleTask, handleDeleteTask }) => {

    const tasksInProgress = tasks.filter((task) => task.status == false);
    console.log(tasksInProgress)
    return (
        <div className={'flex flex-col w-full max-w-screen-lg dark:bg-black'}>

            {(tasks.some(e => e.status === false)) && <div className='text-2xl flex items-center text-gray-400'>
                <div className='flex-1 p-0.5 bg-gray-200 m-1 dark:bg-gray-500'></div>
                <span>В процессе</span>
                <div className='flex-1 p-0.5 bg-gray-200 m-1 dark:bg-gray-500'></div>
            </div>}
            
            {tasks.filter((task) => task.status == false).map((item) => (
                <Task task={item} key={item.id} handleToggleTask={handleToggleTask} handleDeleteTask={handleDeleteTask}/>
            ))}

            {(tasks.some(e => e.status === true)) && <div className='text-2xl flex items-center text-gray-400'>
                <div className='flex-1 p-0.5 bg-gray-200 m-1 dark:bg-gray-500'></div>
                <span>Выполненные</span>
                <div className='flex-1 p-0.5 bg-gray-200 m-1 dark:bg-gray-500'></div>
            </div>}

            {tasks.filter((task) => task.status == true).map((item) => (
                <Task task={item} key={item.id} handleToggleTask={handleToggleTask} handleDeleteTask={handleDeleteTask}/>
            ))}

        </div>
    )
}
