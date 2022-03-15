import React, { useState, useEffect } from "react";
import NewTodoForm from "./Forms/NewTodoForm";
import NewProjectForm from "./Forms/NewProjectForm";
import EditProjectForm from "./Forms/EditProjectForm";
import DeleteComplete from "./Controls/DeleteComplete";
import TodoList from "./ListComponents/TodoList";
import ProjectList from "./ListComponents/ProjectList";
import Header from "./Partials/Header";
import Footer from "./Partials/Footer";
import Sidebar from "./Partials/Sidebar";
import Dropdown from "./Partials/Dropdown";
import ProjectControl from "./Partials/ProjectControl";
import Collapse from 'react-bootstrap/Collapse';




import '../styles/TodoList.css';



import useInputState from "../hooks/useInputState";
import useLocalStorage from "../hooks/useLocalStorage";
import useView from "../hooks/useView";


function TodoListBase() {
    const [values, setValues, projData, setProjData, handleChangeFunc, handleProjChangeFunc] = useInputState();
    const [todos, submitProject, deleteProject, editProject, submitTodo, deleteTodo, editTodo, toggleComplete, deleteComplete, restore] = useLocalStorage();
    const [proj, setProj] = useView();
    const [openNav, setOpenNav] = useState(false);
    const [showProjForm, setShowProjForm] = useState(false);

    const handleFormClose = () => setShowProjForm(false);
    const handleFormShow = () => setShowProjForm(true);


    /*
        let viewedProject;
    
        for (let i = 0; i < todos.projects.length; i++) { //Checks for currently viewed project. canyou turn this into a map?
            if (todos.projects[i].projId === proj) {
                viewedProject = todos.projects[i];
            }
        }
    */

 

    
/*
useEffect(() => {
   
    console.log("Project update")
 }, [todos])  
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
                handleFormShow={handleFormShow}
            />
            <div className="Wrapper" /*style={{border: "1px solid red"}}*/>



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


                <NewProjectForm
                    projData={projData}
                    setProjData={setProjData}
                    handleProjChangeFunc={handleProjChangeFunc}
                    submitProject={submitProject}
                    setProj={setProj}
                    showProjForm={showProjForm}
                    handleFormClose={handleFormClose}
                />


                <section style={{ border: "1px solid red" }}>


                    <ProjectControl
                        proj={proj}
                        viewedProject={viewedProject}

                        setProj={setProj}
                        deleteComplete={deleteComplete}
                        editProject={editProject}
                        deleteProject={deleteProject}
                    />
                    {/*
                      <EditProjectForm
                        viewedProject={viewedProject}
                        editProject={editProject}
                        proj={proj}
                    />
*/}

                    {proj !== "3" &&
                        <NewTodoForm
                            handleChangeFunc={handleChangeFunc}
                            submitTodo={submitTodo}
                            values={values}
                            setValues={setValues}
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
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default TodoListBase;