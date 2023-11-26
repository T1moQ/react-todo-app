import { RiSurveyFill, RiCloseCircleLine, RiCheckboxLine } from 'react-icons/ri'
import React from 'react'
import styles from './Todo.module.css'

const Todo = (props) => {
   const {todo, deleteTodo, toggleTodo} = props
  return (
    <div className={`${styles.todo} ${todo.isCompleted ? styles.completedTodo : ''}`} >
      <RiSurveyFill className={styles.todoIcon} />
      <h2 className={styles.todoText}>{todo.text}</h2>
      <RiCloseCircleLine onClick={() => deleteTodo(todo.id)} className={styles.deleteIcon} />
      <RiCheckboxLine className={styles.doneIcon} onClick={() => toggleTodo(todo.id)} />
    </div>
  )
}

export default Todo
