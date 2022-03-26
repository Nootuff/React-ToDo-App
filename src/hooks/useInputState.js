import { useState } from "react";

const initialTodo = {
  taskBody: "",
  taskNotes: "",
  priority: "Medium",
  deadline: ""
};

const initialProject = {
  projName: "",
  projNotes: "",
};

export default function Input() {
  const [todoValues, setTodoValues] = useState(initialTodo);
  const [projValues, setProjValues] = useState(initialProject);

  const handleTodoChange = (event) => {
    const { name, value } = event.target;
    setTodoValues({
      ...todoValues,
      [name]: value,
    });
  }

  const handleProjChange = (event) => {
    const { name, value } = event.target;
    setProjValues({
      ...projValues,
      [name]: value,
    });
  }

  return [todoValues, setTodoValues, projValues, setProjValues, handleTodoChange, handleProjChange];
}