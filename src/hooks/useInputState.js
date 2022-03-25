import React, { useState } from "react";

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

export default input => {
  const [todoValues, setTodoValues] = useState(initialTodo);
  const [projData, setProjData] = useState(initialProject);


  const handleTodoChange = (event) => {
    const { name, value } = event.target;
    setTodoValues({
      ...todoValues,
      [name]: value,
    });
  }

  const handleProjChange = (event) => {
    const { name, value } = event.target;
    setProjData({
      ...projData,
      [name]: value,
    });
  }

  return [todoValues, setTodoValues, projData, setProjData, handleTodoChange, handleProjChange];
}