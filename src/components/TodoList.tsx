import { ITodoItem } from "../model/ITodoItem";
import { useState } from "react";
import TodoAddForm from "./TodoAddForm";
import Todo from "./Todo";

export default function TodoList() {
  const [todoList, setTodoList] = useState<Array<ITodoItem>>(
    new Array<ITodoItem>()
  );
  const [lastId, setLastId] = useState<number>(0);

  function onAddTask(taskText: string) {
    let id: number = lastId + 1;
    console.log(`onAddTask ${taskText}`);
    todoList.push({ id: id, text: taskText, finished: false });
    setTodoList([...todoList]);
    setLastId(id);
  }

  function onTaskFinished(todoItem: ITodoItem) {
    console.log(`onTaskFinished ${todoItem.id}`);
    todoItem.finished = true;
    setTodoList([...todoList]);
  }

  function renderTodoList(): JSX.Element[] {
    let todoListLies: JSX.Element[] = todoList.map((todoItem: ITodoItem) => {
      console.log("ss");
      return (
        <li key={todoItem.id}>
          <Todo todoItem={todoItem} onTaskFinished={onTaskFinished} />
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
