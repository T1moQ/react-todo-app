import React from 'react'
import Todo from './Todo'
import styles from './TodoLIst.module.css'

const TodoList = (props) => {
   const { todos, deleteTodo, toggleTodo } = props
   
   return (
      <div className={styles.todoList} >
         {!todos.length
            ? <h2>Todo list is empty</h2>
            : todos.map((todo) => <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />)}
      </div>
   )
   
}

export default TodoList
