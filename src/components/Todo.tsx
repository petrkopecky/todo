import { ITodoItem } from "../model/ITodoItem";
interface FormProps {
  todoItem: ITodoItem;
  onTaskFinish: (todoItemId: ITodoItem) => void;
}

export default function Todo({ todoItem, onTaskFinish }: FormProps) {
  console.log(todoItem);

  function handleOnFinishCheckbox(): void {
    console.log(`handleCheckbox`);
    onTaskFinish(todoItem);
  }

  return (
    <>
      <p>id:{todoItem.id}</p>
      <p>task:{todoItem.text}</p>
      <input
        type="checkbox"
        id="checkbox"
        checked={todoItem.finished}
        onChange={handleOnFinishCheckbox}
      />
      <label htmlFor="checkbox">
        {todoItem.finished ? "finished" : "not finished"}
      </label>
    </>
  );
}
