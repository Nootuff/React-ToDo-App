import React, { useState, useEffect } from "react";
import NewTodoForm from "./Forms/NewTodoForm";
import NewProjectForm from "./Forms/NewProjectForm";
import DeleteComplete from "./Controls/DeleteComplete";
import TodoList from "./ListComponents/TodoList";
import ProjectList from "./ListComponents/ProjectList";
import Header from "./Partials/Header";
import Footer from "./Partials/Footer";
import Nav from "./Partials/Nav";
import Collapse from 'react-bootstrap/Collapse';


import '../styles/TodoList.css';



import useInputState from "../hooks/useInputState";
import useLocalStorage from "../hooks/useLocalStorage";
import useView from "../hooks/useView";
//const moment = require('moment');

function TodoListBase() {
    const [values, setValues, projData, setProjData, handleChangeFunc, handleProjChangeFunc] = useInputState();
    const [todos, submitProject, deleteProject, editProject, submitTodo, deleteTodo, editTodo, toggleComplete, deleteComplete, restore] = useLocalStorage();
    const [proj, setProj] = useView();
    const [openNav, setOpenNav] = useState(false);


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
            <Header
                openNav={openNav}
                setOpenNav={setOpenNav}
                setProj={setProj}
                proj={proj}
                data={todos.projects}
            />

            {/*<div class="sidebar">
                <h4 className='Nav-item'>&lt;react-Todo /&gt;</h4>
                <ProjectList
                    projects={todos.projects}
                    proj={proj}
                    setProj={setProj}
                />

    </div>*/}
            <Nav
                projects={todos.projects}
                proj={proj}
                setProj={setProj}
            />
            <div className="Wrapper">
                {/*todos.midnight ? "Complete" : "incomplete"*/}
                {/* <button onClick={() => { test(true) }}>setStateMomentTest</button>*/}



                <div className="d-block d-sm-none" style={{ color: "red", marginTop: "80px", border: "1px solid green", transition: "width 2s ease" }}>
                    <Collapse in={openNav}>
                        <div>
                            <p>Get projects into here somehow</p>
                        </div>
                    </Collapse>
                </div>


                {proj !== "3" &&
                    <NewTodoForm
                        handleChangeFunc={handleChangeFunc}
                        submitTodo={submitTodo}
                        values={values}
                        setValues={setValues}
                        proj={proj}
                    />
                }
                {proj !== "3" &&
                    <NewProjectForm
                        projData={projData}
                        setProjData={setProjData}
                        handleProjChangeFunc={handleProjChangeFunc}
                        submitProject={submitProject}
                        setProj={setProj}
                    />
                }
                {proj !== "3" &&
                    <DeleteComplete
                        deleteComplete={deleteComplete}
                        proj={proj}
                    />
                }
                <br />

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