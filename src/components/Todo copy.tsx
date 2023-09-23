import { ITodoItem } from "../model/ITodoItem";
interface FormProps extends ITodoItem {
  onTaskFinished: (todoItemId: string) => void;
}

export default function Todox({
  id,
  text,
  finished,
  onTaskFinished,
}: FormProps) {
  function handleOnClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    console.log(`handleOnClick`);
    onTaskFinished(id);
  }
  return (
    <>
      <p>{id}</p>
      <p>{text}</p>
      <p>f{finished ? "ff" : "nn"}</p>
      <button onClick={handleOnClick}>set task finished</button>
    </>
  );
}
