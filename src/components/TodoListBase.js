import React, { useState, useEffect } from "react";
import NewTodoForm from "./Forms/NewTodoForm";
import NewProjectForm from "./Forms/NewProjectForm";
import DeleteComplete from "./Controls/DeleteComplete";
import TodoList from "./ListComponents/TodoList";
import ProjectList from "./ListComponents/ProjectList";
import Header from "./Partials/Header";
import Footer from "./Partials/Footer";
import '../styles/TodoList.css';

import useInputState from "../hooks/useInputState";
import useLocalStorage from "../hooks/useLocalStorage";
import useView from "../hooks/useView";
//const moment = require('moment');

function TodoListBase() {
    const [values, setValues, projData, setProjData, handleChangeFunc, handleProjChangeFunc] = useInputState();
    const [todos, submitProject, deleteProject, editProject, submitTodo, deleteTodo, editTodo, toggleComplete, deleteComplete, restore] = useLocalStorage();
    const [proj, setProj] = useView();

    /*
        let viewedProject;
    
        for (let i = 0; i < todos.projects.length; i++) { //Checks for currently viewed project. canyou turn this into a map?
            if (todos.projects[i].projId === proj) {
                viewedProject = todos.projects[i];
            }
        }
    */



    let viewedProject = todos.projects.filter(project => project.projId === proj)[0];
    //console.log(viewedTest)
    // console.log(viewedProject)


    //Moment test section 

    /*
    const midnight = "0:00:00";
    let now = null;

    setInterval(function () {
        now = moment().format("H:mm:ss");
        if (now === midnight) {
            test(false)
        }
    }, 1000);
    */

    return (
        <div className="Todo-list">
            <Header />
            <div className="Wrapper">
                {/*todos.midnight ? "Complete" : "incomplete"*/}
               {/* <button onClick={() => { test(true) }}>setStateMomentTest</button>*/}
                
                {proj !== "3" &&
                <NewTodoForm
                    handleChangeFunc={handleChangeFunc}
                    submitTodo={submitTodo}
                    values={values}
                    setValues={setValues}
                    proj={proj}
                />
            }
              
                    <NewProjectForm
                        projData={projData}
                        setProjData={setProjData}
                        handleProjChangeFunc={handleProjChangeFunc}
                        submitProject={submitProject}
                        setProj={setProj}
                    />
             

                {proj !== "3" &&
                    <DeleteComplete /*multShrink={multShrink}*/
                        deleteComplete={deleteComplete}
                        proj={proj}
                    />
                }

                <br /> {/*Put these central control buttons in their  own componeont */}
                <button
                    onClick={() => { setProj("1") }}
                    style={{ color: proj === "1" ? "red" : "black" }} >
                    {todos.projects[0].projName + " " + todos.projects[0].projTodos.length}
                </button>
                <br />
                <button
                    onClick={() => { setProj("2") }}
                    style={{ color: proj === "2" ? "red" : "black" }} >
                    {todos.projects[1].projName + " " + todos.projects[1].projTodos.length}
                </button>
                <br />
                <button
                    onClick={() => { setProj("3") }}
                    style={{ color: proj === "3" ? "red" : "black" }} >
                    {todos.projects[2].projName + " " + todos.projects[2].projTodos.length}
                </button>

                <ProjectList
                    projects={todos.projects}
                    proj={proj}
                    setProj={setProj}
                />
                <TodoList
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                    toggleComplete={toggleComplete}
                    deleteProject={deleteProject}
                    editProject={editProject}
                    restore={restore}
                    proj={proj}
                    viewedProject={viewedProject}
                    setProj={setProj}
                />
            </div>
            <Footer />
        </div>
    );
}

export default TodoListBase;