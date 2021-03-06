import { useState } from 'react'

function ToDoForm({ addTask }) {
  const [userInput, setUserInput] = useState('')

  const handleChange = e => {
    setUserInput(e.target.value)
  }

  const handleSubmit = e => {
    console.log('awdawd')
    e.preventDefault()
    addTask(userInput)
    setUserInput('')
  }

  const handleKeyPress = e => {
    if (e.key === 'Enter' && userInput.length !== 0) {
      handleSubmit(e)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={userInput}
        type='text'
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder='Введите значение...'
      />
      <button type='submit' disabled={!userInput.length}>
        Сохранить
      </button>
    </form>
  )
}

export default ToDoForm
