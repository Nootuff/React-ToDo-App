import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import NewProjectForm from "./NewProjectForm";

import DeleteComplete from "./DeleteComplete";
import ListComponent from "./ListComponent";


import ProjectList from "./ProjectList";
import Header from "./Header";
import Footer from "./Footer";

import '../styles/TodoList.css';

import useInputState from "../hooks/useInputState";
import useLocalStorage from "../hooks/useLocalStorage";
import useView from "../hooks/useView";


function TodoList() {
    const [values, setValues, projData, setProjData, handleChangeFunc, handleProjChangeFunc] = useInputState();
    const [todos, submitProject, deleteProject, editProject, submitTodo, deleteTodo, editTodo, toggleComplete, deleteComplete] = useLocalStorage();
    const [proj, setProj] = useView();

    let viewedProject;

    for (let i = 0; i < todos.projects.length; i++) { //Checks for currently viewed project. canyou turn this into a map?
        if (todos.projects[i].projId === proj) {
            viewedProject = todos.projects[i];
        }
    }

    return (
        <div className="Todo-list">
            <Header />
            <div className="Wrapper">
                <NewTodoForm
                    handleChangeFunc={handleChangeFunc}
                    submitTodo={submitTodo}
                    values={values}
                    setValues={setValues}
                    proj={proj}
                />
                <NewProjectForm
                    projData={projData}
                    setProjData={setProjData}
                    handleProjChangeFunc={handleProjChangeFunc}
                    submitProject={submitProject}
                    setProj={setProj}
                />

                <DeleteComplete /*multShrink={multShrink}*/
                    deleteComplete={deleteComplete}
                    proj={proj}
                />
                <br />

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
                    {todos.projects[2].projName + " " + todos.projects[1].projTodos.length}
                </button>

                <ProjectList
                    projects={todos.projects}
                    proj={proj}
                    setProj={setProj}
                />
                <ListComponent
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                    toggleComplete={toggleComplete}
                    deleteProject={deleteProject}
                    editProject={editProject}
                    proj={proj}
                    viewedProject={viewedProject}
                    setProj={setProj}
                />
            </div>
            <Footer />
        </div>
    );
}

export default TodoList;


//Class based build below

/*
import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import '../styles/ToDoList.css';



class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDos: JSON.parse(localStorage.getItem("data")) || [] //All created toDos will be stored in here, or an array of objects will be retreived from localStorage. 
        };
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.removeComplete = this.removeComplete.bind(this);
        this.edit = this.edit.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
       //this.onLoad = this.onLoad.bind(this);
    }

    create(data) { //Data could be anything, just symbolizes the first passed argument.
        let stateHolder = [...this.state.toDos, data]
        this.setState({
            toDos: stateHolder
        })
    window.localStorage.setItem('data', JSON.stringify(stateHolder));
    }

    /*
    onLoad() {
       // const retrievedData = localStorage.getItem('data')
        const showMe = JSON.parse(localStorage.getItem("data"));
        //console.log(showMe)
 
      // console.log(showMe)
       /*this.setState({
        toDos: [...showMe]
    })
    if(showMe !== null ){
        for (let i = 0; i < showMe.length; i++) {
            //allData.push(showMe[i])
            console.log(showMe[i])
            }
        }
    } 


    remove(passedId) {
        let newState = this.state.toDos.filter(toDo => toDo.id !== passedId)  // Sets value to new array created from from all toDos where id does not = the id of the todo taht was passed to this function when the delete button was pushed in its component. 
        this.setState({
            toDos: newState
        });
        window.localStorage.setItem('data', JSON.stringify(newState));
    }

    removeComplete() { //Removes all tasks tagged with completed.
        let unCompleted = [];
        for (let i = 0; i < this.state.toDos.length; i++) {
            if (this.state.toDos[i].completed === false) {
                unCompleted.push(this.state.toDos[i])
            }
        }
        let completed = document.querySelectorAll(".completed");
        for (let i = 0; i < completed.length; i++) {
            completed[i].classList.add("fade-animate");
        }
        setTimeout(function () {
            this.setState({
                toDos: unCompleted
            })
        }.bind(this), 500)
        window.localStorage.setItem('data', JSON.stringify(unCompleted));
    }

/*    componentDidUpdate(prevProps, prevState){ 
        console.log("ToDoList componentDidUpdate")
        console.log(prevState.toDos)
        console.log(this.state.toDos)
     }


    edit(data, editId) {
        let stateHolder = [...this.state.toDos]; //Holds everything currently in state.
        for (let i = 0; i < stateHolder.length; i++) { //Loop through everything in stateHolder.
            if (stateHolder[i].id === editId) { //If the id of the current object is the same as the id that is passed in...
                stateHolder[i].taskBody = data.editBody; //Update its body with the new body that was passed in.
                stateHolder[i].taskNotes = data.editNotes;
                stateHolder[i].priority = data.editPriority;
            }
        }
        this.setState({
            toDos: stateHolder //Set the toDos state to the updated stateHolder.
        })
        window.localStorage.setItem('data', JSON.stringify(stateHolder));
    }

    toggleCompletion(completedId) {
        let stateHolder = [...this.state.toDos];
        for (let i = 0; i < stateHolder.length; i++) {
            if (stateHolder[i].id === completedId) {
                stateHolder[i].completed = !stateHolder[i].completed;
            }
        }
        this.setState({
            toDos: stateHolder
        })
        window.localStorage.setItem('data', JSON.stringify(stateHolder));
    }

    render() {
        const allToDos = this.state.toDos.slice(0).reverse().map(value => //Runs map in reverse, newest ToDos displayed at top.
            <Todo
                data={value}
                key={value.id}
                //id={value.id}
                //body={value.taskBody}
                //notes={value.taskNotes}
                //completed={value.completed}
                destroyerFunc={this.remove}
                completeToggle={this.toggleCompletion}
                editFunc={this.edit}
            />
        )
      
        return (
            <div /*onLoad={this.onLoad()} className="">
                <NewTodoForm creatorFunc={this.create} />
                <button className="button" onClick={this.removeComplete}>Delete all Complete</button>
                <ul>
                    {allToDos}
                </ul>

            </div>
        )
    }
}

export default ToDoList;

*/