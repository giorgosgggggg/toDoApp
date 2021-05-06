import React, { useState, useEffect } from "react";
import "../css/App.scss";
import Navigation from "./Navigation";
import ToDosContainer from "./ToDosContainer";
import ToDonesContainer from "./ToDonesContainer";
import { v4 as uuid } from "uuid";
import { HashRouter, Route, Switch } from "react-router-dom";
import NotFound from "./views/NotFound";
import Help from "./views/Help";

const App = () => {
  const [tasks, setTasks] = useState([
    // { id: uuid(), text: "Make a website", done: true },
    // { id: uuid(), text: "Make a website", done: true },
    // { id: uuid(), text: "Pay the rent", done: true },
    // { id: uuid(), text: "Call my mom", done: true },
    // { id: uuid(), text: "Walk the dog", done: false },
    // { id: uuid(), text: "Finish reading my book", done: true },
    // { id: uuid(), text: "Make more moneys", done: true },
    // { id: uuid(), text: "Make so moneys", done: false },
    // { id: uuid(), text: "Wash my face!", done: false },
  ]);

  useEffect(() => {
    let data = localStorage.getItem("todoItems");
    if (data.length > 0) {
      let parsedData = JSON.parse(data);
      setTasks(parsedData);
    }
  }, []);

  const AddItem = (text) => {
    let task = { id: uuid(), text: text, done: false };
    localStorage.setItem("todoItems", JSON.stringify([task, ...tasks]));

    setTasks([task, ...tasks]);
  };

  const UpdateItem = (id) => {
    /*    let updatedTasks = tasks.map(task=>{
         if(task.id===id){
           task.done = !task.done
           return task;
         }  let updatedTasks = tasks.map(task=>{
         if(task.id===id){
           task.done = !task.done
           return task;
         }
         return task;
       })
         return task;
       })  */
    /*   let updatedTasks = tasks.map(item=>item.id===id ? {...item,done:!item.done}:item)
       setTasks(updatedTasks) */
    let updatedItems = tasks.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );
    localStorage.setItem("todoItems", JSON.stringify(updatedItems));
    setTasks(
      tasks.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  const DeleteItem = (id) => {
    let updatedItems = tasks.filter((item) => item.id !== id);
    localStorage.setItem("todoItems", JSON.stringify(updatedItems));
    setTasks(updatedItems);
  };

  const TODOS = tasks.filter((item) => !item.done);
  const TODONES = tasks.filter((item) => item.done);

  return (
    <HashRouter>
      <div className="app">
        <Navigation></Navigation>

        <Switch>
          <Route path="/">
            <ToDosContainer
              UpdateItem={UpdateItem}
              AddItem={AddItem}
              TODOS={TODOS}
            ></ToDosContainer>
            <ToDonesContainer
              UpdateItem={UpdateItem}
              DeleteItem={DeleteItem}
              TODONES={TODONES}
            ></ToDonesContainer>
          </Route>
          <Route path="/help">
            <Help />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
};

export default App;
