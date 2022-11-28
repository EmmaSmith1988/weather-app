import { ChangeEvent, useState } from "react"
import Button from "../button/Button"
import TodoItem from "../todoItem/TodoItem"

const TodoList = () => {
  const [todos, setTodos] = useState<string[]>([])
  const [currentTodo, setCurrentTodo] = useState<string>("")

  const handleAddTodo = ():void => {
    setTodos([...todos, currentTodo])
    setCurrentTodo('')
  }
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setCurrentTodo(event.target.value)
  }

  const handleDeleteTodo = (todoToDelete: string): void => {
      setTodos(todos.filter(todo => {
        return todo !== todoToDelete
      }))
  }

  return (
    <div className="border-2 p-2 lg:w-1/3 rounded-2xl text-center flex-col bg-[#242424] text-white">
    <h3 className="p-2 lg:p-6 font-sans text-2xl lg:text-4xl font-bold">Today's Todo List</h3> 
    <input value={currentTodo} className="p-2 mb-2 mr-2 lg:mr-8 w-60 rounded-2xl text-black" type='text' placeholder="Task..." onChange={handleChange}></input>
    <Button handleClick={handleAddTodo} text={'Add todo'}/>
   
    {todos.map((todo:string, key:number) => {
      return <TodoItem handleClick={handleDeleteTodo} text={todo} key={key} />
    })}
    
    </div>
   
  )
}

export default TodoList