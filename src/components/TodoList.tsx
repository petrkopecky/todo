import { ITodoItem } from "../model/ITodoItem";
import { useState } from "react";
import TodoAddForm from "./TodoAddForm";
import Todo from "./Todo";

export default function TodoList() {
  const [todoList, setTodoList] = useState<Array<ITodoItem>>(
    new Array<ITodoItem>()
  );
  //let todoList: Array<ITodoItem> = new Array<ITodoItem>();
  //todoList.push({ id: "1", text: "t1", finished: false });

  function onAddTask(taskText: string) {
    console.log(`onAddTask ${taskText}`);
    todoList.push({ id: "1", text: taskText, finished: false });
    setTodoList([...todoList]);
  }

  function onTaskFinished(todoItem: ITodoItem) {
    console.log(`onTaskFinished ${todoItem.id}`);
    //todoList.find((element) => element.id === id).finished = true;
    todoItem.finished = true;
    //todoList.push({ id: "1", text: taskText, finished: false });
    setTodoList([...todoList]);
  }

  function renderTodoList(): JSX.Element[] {
    let todoListLies: JSX.Element[] = todoList.map((todoItem: ITodoItem) => {
      console.log("ss");
      return (
        <li key={todoItem.id}>
          <Todo
            //id={todoItem.id}
            //text={todoItem.text}
            //finished={todoItem.finished}
            todoItem={todoItem}
            onTaskFinished={onTaskFinished}
          />
        </li>
      );
    });
    return todoListLies;
  }
  return (
    <div>
      <h1>Todo</h1>
      <TodoAddForm onSubmit={onAddTask} />
      <ul className="list">{renderTodoList()}</ul>
    </div>
  );
}
