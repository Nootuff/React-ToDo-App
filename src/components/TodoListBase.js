import React, { useState } from "react";
import NewTodoForm from "./Forms/NewTodoForm";
import NewProjectForm from "./Forms/NewProjectForm";
import TodoList from "./ListComponents/TodoList";
import Header from "./Partials/Header";
import Footer from "./Partials/Footer";
import Sidebar from "./Partials/Sidebar";
import ProjectControl from "./Partials/ProjectControl";
import useInputState from "../hooks/useInputState";
import useLocalStorage from "../hooks/useLocalStorage";
import useView from "../hooks/useView";
import "../styles/TodoListBase.css";

function TodoListBase() {
  const [todoValues, setTodoValues, projValues, setProjValues, handleTodoChange, handleProjChange] = useInputState();
  const [todos, submitProject, deleteProject, editProject, submitTodo, deleteTodo, editTodo, toggleComplete, deleteComplete, restore] = useLocalStorage();
  const [proj, setProj] = useView();
  const [showProjForm, setShowProjForm] = useState(false);
  
  const handleFormClose = () => setShowProjForm(false);
  const handleFormShow = () => setShowProjForm(true);

  let viewedProject = todos.projects.filter(project => project.projId === proj)[0]; //Data of the currently viewed project. 

  return (
    <div>
      <Header
        proj={proj}
        setProj={setProj}
        projects={todos.projects}
        handleFormShow={handleFormShow}
      />
      <Sidebar
        projects={todos.projects}
        proj={proj}
        setProj={setProj}
        handleFormShow={handleFormShow}
      />
      <div className="Base-wrapper">
        <NewProjectForm
          projValues={projValues}
          setProjValues={setProjValues}
          handleProjChange={handleProjChange}
          submitProject={submitProject}
          setProj={setProj}
          showProjForm={showProjForm}
          handleFormClose={handleFormClose}
        />
        <section className="Base-body">
          <ProjectControl
            proj={proj}
            viewedProject={viewedProject}
            setProj={setProj}
            deleteComplete={deleteComplete}
            editProject={editProject}
            deleteProject={deleteProject}
          />
          {proj !== "3" &&
            <NewTodoForm
              handleTodoChange={handleTodoChange}
              submitTodo={submitTodo}
              todoValues={todoValues}
              setTodoValues={setTodoValues}
              proj={proj}
            />
          }
          <br />
          <TodoList
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
            restore={restore}
            proj={proj}
            viewedProject={viewedProject}
          />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default TodoListBase;