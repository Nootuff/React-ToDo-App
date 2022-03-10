import React, { useState, useEffect } from "react";
import NewTodoForm from "./Forms/NewTodoForm";
import NewProjectForm from "./Forms/NewProjectForm";
import DeleteComplete from "./Controls/DeleteComplete";
import TodoList from "./ListComponents/TodoList";
import ProjectList from "./ListComponents/ProjectList";
import Header from "./Partials/Header";
import Footer from "./Partials/Footer";
import Sidebar from "./Partials/Sidebar";
import Collapse from 'react-bootstrap/Collapse';
import Dropdown from "./Partials/Dropdown";

import '../styles/TodoList.css';



import useInputState from "../hooks/useInputState";
import useLocalStorage from "../hooks/useLocalStorage";
import useView from "../hooks/useView";


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

    return (
        <div className="Todo-list">
            <Header
                openNav={openNav}
                setOpenNav={setOpenNav}
                setProj={setProj}
            />

            {/*<div class="sidebar">
                <h4 className='Nav-item'>&lt;react-Todo /&gt;</h4>
                <ProjectList
                    projects={todos.projects}
                    proj={proj}
                    setProj={setProj}
                />

    </div>*/}
            <Sidebar
                projects={todos.projects}
                proj={proj}
                setProj={setProj}
            />
            <div className="Wrapper">



                <div className="d-block d-sm-none" style={{ marginTop: "79px", transition: "width 2s ease" }}>
                    <Collapse in={openNav}>
                        <div>
                            <Dropdown
                                projects={todos.projects}
                                proj={proj}
                                setProj={setProj}
                            />
                        </div>
                    </Collapse>
                </div>


                <div class="container" style={{ border: "", width: "65%" }}>

                    <div class="d-flex" /*style={{border: "5px solid cyan"}}*/>

                        <div class=" m-0 flex-shrink-1 rounded-start " style={{ border: "1px solid blue", backgroundColor: "blue" }}>tickbox</div>
                        <div class=" p-0 w-100 text-start" style={{ border: "1px solid yellow", backgroundColor: "#c4c4c4"  }}>
                            <div class="row  " style={{ border: "1px solid blue" }}>
                                <h2>
                                    Todo Text, have the details button fill up like your prtfolio on hover 
                                </h2 >
                            </div>
                            <div class="row  ">
                                <h4  >
                                    Deadline
                                </h4 >
                            </div>
                            <div class="m-0  d-flex flex-row bd-highlight" style={{ border: "1px solid green" }}>
                                <div class="  bd-highlight"><button>Details</button></div>
                                <div class="  bd-highlight"><button>Edit</button></div>
                                <div class="  bd-highlight" style={{backgroundColor: "#DC3545"}}><button>X</button></div>
                            </div>

                        </div>
                    </div>

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