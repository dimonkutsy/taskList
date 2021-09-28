const ToDo = ({ todo: { id, complete, task }, toggleTask, removeTask }) => {
  return (
    <div key={id} className="item-todo">
      <div
        className={complete ? "item-text strike" : "item-text"}
        onClick={() => toggleTask(id)}
        >
        {task}
      </div>
      <div className="item-delete" onClick={() => removeTask(id)}>
        X
      </div>
    </div>
  )
}

export default ToDo
