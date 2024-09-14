import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react"
import React from "react"

interface InputWithButtonProps{
  task: string,
  addTask: () => void,
  setTask: React.Dispatch<React.SetStateAction<string>>,
}

export const InputWithButton: React.FC<InputWithButtonProps> = ({task, addTask, setTask}) => {
  return (
    <div className="flex w-full max-w-screen-md items-center space-x-2 p-4 dark:bg-black ">
      <Input className="text-2xl dark:text-white" type="text" placeholder="Введите задачу..." value={task} onChange={(e) => setTask(e.target.value)} />
      <Button type="submit" onClick={() => addTask()}>
        <Plus />
      </Button>
    </div>
  )
}
