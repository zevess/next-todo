import { cn } from '@/lib/utils'
import React from 'react'
import { Checkbox } from '../ui/checkbox'
import { Trash2 } from 'lucide-react'
import { Button } from '../ui/button'
import { Skeleton } from '../ui/skeleton'

export type TaskType = {
    id: number,
    name: string,
    status: boolean,
}

interface Props {
    className?: string,
    task: TaskType,
    handleToggleTask: (id: number) => void,
    handleDeleteTask: (id: number) => void,
}

export const Task: React.FC<Props> = ({ className, task, handleToggleTask, handleDeleteTask }) => {

    const date = new Date(task.id);

    const options: Intl.DateTimeFormatOptions = {
        hour: 'numeric', minute: 'numeric', second: 'numeric'
    }

    return (
        <div>
            {!task && <Skeleton className='flex justify-between items-center h-20 m-4 drop-shadow-2xl py-3 px-4 sm:px-5 md:px-6 lg:px-8'/>}
            <div className={cn('flex justify-between items-center border-solid border-2 border-indigo-400 rounded-lg bg-gray-100 m-4 drop-shadow-2xl py-3 px-4 sm:px-5 md:px-6 lg:px-8 dark:bg-inherit', task.status == true && 'border-red-300')}>
                <div>
                    <p className='text-base lg:text-3xl md:text-2xl sm:text-xl dark:text-white'>{task.name}</p>
                    <span className='text-gray-500 dark:text-gray-400'>Добавлено: {date.toLocaleDateString('ru-RU', options)}</span>
                </div>

                <div className='flex items-center'>
                    <Checkbox className='h-8 w-8' checked={task.status} onClick={() => handleToggleTask(task.id)} />
                    <Button className='bg-red-500 p-0 h-8 w-8 ml-4 hover:bg-red-800' onClick={() => handleDeleteTask(task.id)}>
                        <Trash2 />
                    </Button>
                </div>
            </div>
        </div>

    )
}
