import React from "react";

interface FormProps {
  onSubmit: (data: string) => void;
}

interface FormData {
  taskText: string;
}

export default function TodoAddForm({ onSubmit }: FormProps) {
  const [formData, setFormData] = React.useState<FormData>({ taskText: "" });
  function handleTaskTextChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, taskText: event.target.value });
  }

  function handleOnSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(`handleOnSubmit ${formData.taskText}`);
    onSubmit(formData.taskText);
  }

  return (
    <div>
      <h2>Add a todo</h2>
      <form onSubmit={handleOnSubmit}>
        <label>
          task:
          <input type="text" name="task-text" onChange={handleTaskTextChange} />
        </label>

        <button type="submit">add</button>
      </form>
    </div>
  );
}
