import { ITodoItem } from "../model/ITodoItem";
import { useState } from "react";
import TodoAddForm from "./TodoAddForm";
import Todo from "./Todo";
import "./Todo.css";
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

  function onTaskFinish(todoItem: ITodoItem) {
    console.log(`onTaskFinish ${todoItem.id}`);
    todoItem.finished = !todoItem.finished;
    setTodoList([...todoList]);
  }

  function renderTodoList(): JSX.Element[] {
    let todoListLies: JSX.Element[] = todoList.map((todoItem: ITodoItem) => {
      return (
        <li key={todoItem.id} className="listItem">
          <Todo todoItem={todoItem} onTaskFinish={onTaskFinish} />
        </li>
      );
    });
    return todoListLies;
  }
  return (
    <div>
      <h1>Todo List</h1>
      <TodoAddForm onSubmit={onAddTask} />
      <ul className="list">{renderTodoList()}</ul>
    </div>
  );
}
