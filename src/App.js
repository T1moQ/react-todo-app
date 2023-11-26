import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoForm from './comps/todos/TodoForm';
import TodoList from './comps/todos/TodoList';
import TodosActions from './comps/todos/TodosActions';


function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4()
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodoHandler = (id) => {
    return setTodos(todos.map((todo) => {
      return todo.id === id
        ? { ...todo, isCompleted: !todo.isCompleted }
        : { ...todo }
    }
      ))
  }

  const resetTodoHandler = () => {
    return setTodos([])
  }

  const deleteCompletedTodoHAndler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  const completedTodoCounter = todos.filter((todo) => todo.isCompleted).length


  return (
    <div className="App">
      <h1 className='app_title'>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!todos.length
        ? ''
        : <TodosActions
        completedTodosExist={!!completedTodoCounter}
        resetTodo={resetTodoHandler}
        deleteCompletedTodo={deleteCompletedTodoHAndler} />}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler} />
      {completedTodoCounter > 0
        && <h2>{`You have completed ${completedTodoCounter} ${completedTodoCounter > 1
          ? 'todos'
          : 'todo'}!`}
        </h2>}
    </div>
  )
}

export default App;
