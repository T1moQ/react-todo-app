import {RiRepeatFill, RiCloseCircleLine} from 'react-icons/ri'
import React from 'react'
import Button from '../UI/Button'
import styles from './TodosActions.module.css'

const TodosActions = (props) => {
  const {resetTodo, deleteCompletedTodo, completedTodosExist} = props
  return (
     <div className={styles.actionsWrapper}>
      <Button
        title='Reset Todos'
        onClick={resetTodo}>
        <RiRepeatFill className={styles.repeatIcon} />
      </Button>
      <Button
        title='Clear completed Todos'
        onClick={deleteCompletedTodo}
        disabled={!completedTodosExist}>
        <RiCloseCircleLine className={styles.repeatIcon} />
      </Button>
    </div>
  )
}

export default TodosActions
