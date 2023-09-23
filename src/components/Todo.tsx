import { ITodoItem } from "../model/ITodoItem";
interface FormProps {
  todoItem: ITodoItem;
  onTaskFinished: (todoItemId: ITodoItem) => void;
}

export default function Todo({ todoItem, onTaskFinished }: FormProps) {
  console.log(todoItem);
  function handleOnClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    console.log(`handleOnClick`);
    onTaskFinished(todoItem);
  }
  return (
    <>
      <p>{todoItem.id}</p>
      <p>{todoItem.text}</p>
      <p>{todoItem.finished ? "finished" : "not finished"}</p>
      <button onClick={handleOnClick}>set task finished</button>
    </>
  );
}
