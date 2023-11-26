import React, { useState } from 'react'
import Button from '../UI/Button'
import styles from './TodoForm.module.css'


const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('')
  
  const handleOnsubmit = (event) => {
    event.preventDefault()
    addTodo(text)
    setText('')
  }

  return (
     <div>
        <form className={styles.formBox} onSubmit={handleOnsubmit}>
        <input
          className={styles.inputBox}
          placeholder='Enter new todo'
          value={text}
          onChange={(e) => setText(e.target.value)} />
        <Button text='Submit' title='Submit' />
         </form>
    </div>
  )
}

export default TodoForm
