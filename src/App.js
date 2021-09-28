import { useState } from 'react'
import ToDo from './ToDo'
import ToDoForm from './ToDoForm'

function App() {
  const [todos, setTodos] = useState([])

  const addTask = userInput => {
    const newItem = {
      id: Math.random().toString(36).substr(2, 9),
      task: userInput,
      complete: false,
    }
    setTodos([...todos, newItem])
  }

  const removeTask = id => {
    const updatedTodos = [...todos.filter(todo => todo.id !== id)]
    setTodos(updatedTodos)
  }

  const handleToggle = id => {
    setTodos([
      ...todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          }
        }
        return todo
      }),
    ])
  }

  return (
    <div className='App'>
      <header>
        <h1>Список задач: {todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask} />
      {todos.map(todo => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
          />
        )
      })}
    </div>
  )
}

export default App
