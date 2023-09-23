import { ITodoItem } from "../model/ITodoItem";
interface FormProps {
  todoItem: ITodoItem;
  onTaskFinished: (todoItemId: ITodoItem) => void;
}

export default function Todo({
  todoItem, //: { id, text, finished },
  onTaskFinished,
}: FormProps) {
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
      <p>f{todoItem.finished ? "ff" : "nn"}</p>
      <button onClick={handleOnClick}>set task finished</button>
    </>
  );
}
