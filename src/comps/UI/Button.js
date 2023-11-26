import React from 'react'
import styles from './Button.module.css'

const Button = (props) => {

  const { text, onClick, title, children, disabled = false } = props
  
  return (
    <>
      <button
        {...props}
        className={styles.compButton}
        onClick={onClick}
        disabled={disabled}
        title={title}>
        {text}{children}
      </button>
    </>
  )
}

export default Button
