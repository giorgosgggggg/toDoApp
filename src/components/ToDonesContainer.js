import React from "react";
const ToDonesContainer = ({ TODONES, UpdateItem, DeleteItem }) => {
  const toDoNesItems = TODONES.map((el) => {
    return (
      <div className="todones-item" key={el.id}>
        <p>{el.text}</p>
        <div className="actions">
          <button className="btn" onClick={() => UpdateItem(el.id)}>
            &#8635;
          </button>
        </div>
        <div className="actions">
          <button className="btn" onClick={() => DeleteItem(el.id)}>
            &#9850;
          </button>
        </div>
      </div>
    );
  });
  return (
    <div className="todones-container">
      <h3>BACKLOG</h3>
      {TODONES.length > 0 && toDoNesItems}
    </div>
  );
};
export default ToDonesContainer;
