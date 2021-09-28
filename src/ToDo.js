const ToDo = ({ todo: { id, complete, task }, toggleTask, removeTask }) => (
  <div key={id} className='item-todo'>
    <button
      type='button'
      className={complete ? 'item-text strike' : 'item-text'}
      onClick={() => toggleTask(id)}
    >
      {task}
    </button>
    <button
      type='button'
      className='item-delete'
      onClick={() => removeTask(id)}
    >
      X
    </button>
  </div>
)

export default ToDo
