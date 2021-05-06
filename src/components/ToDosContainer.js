import React, { useRef } from "react";

const ToDosContainer = ({ TODOS, AddItem, UpdateItem }) => {
  const toDoItems = TODOS.map((el) => {
    return (
      <div className="todo-item" key={el.id}>
        <p>{el.text}</p>
        <div className="actions">
          <button className="btn" onClick={() => UpdateItem(el.id)}>
            &#10004;
          </button>
        </div>
      </div>
    );
  });
  const input = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input.current.value);
    AddItem(input.current.value);
  };

  return (
    <div className="todos-container">
      <form className="todo-form" onSubmit={handleSubmit}>
        <label className="input-item">
          <input type="text" name="todo" ref={input} />
        </label>
        <input className="btn" type="submit" value="ADD" />
      </form>
      <div className="todos">
        <h3>TO DO</h3>
        {TODOS.length > 0 && toDoItems}
      </div>
    </div>
  );
};
export default ToDosContainer;
