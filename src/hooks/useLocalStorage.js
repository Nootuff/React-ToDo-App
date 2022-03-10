import React, { useState } from "react";
//import useDate from "./useDate";

const initialStorage = {
    projects: [
        {
            projId: "1",
            projName: "Home ",
            projNotes: "",
            projTodos: [
                {
                    "taskBody": "Placeholder 1",
                    "taskNotes": "Some notes here",
                    "priority": "Medium",
                    "id": "1",
                    "completed": false,
                    "deadline": "",
                    "datePosted": "2022-02-19",
                    "parentProj": "1"
                },
                {
                    "taskBody": "Placeholder 2",
                    "taskNotes": "Some more here",
                    "priority": "high",
                    "id": "2",
                    "completed": false,
                    "deadline": "",
                    "datePosted": "2022-02-19",
                    "parentProj": "1"
                }
            ]
        },
        {
            projId: "2",
            projName: "Daily todos ",
            projNotes: "Tasks you need to do everyday! Feature not yet implemented.",
            projTodos: []
        },
        {
            projId: "3",
            projName: "Your deleted todos ",
            projNotes: "Your last 10 deleted todos.",
            projTodos: []
        }
    ],
    darkMode: false
};

export default storage => {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("hooksTodos")) || initialStorage);
   // const [currDate, dateConverter, deleteOn] = useDate();

    const submitProject = (data) => {
        let stateHolder = { ...todos };
        //var name = data.projName.replace(/\s/g, ''); //Is this still needed?
        let dataholder = [...todos.projects, data]
        stateHolder.projects = dataholder;
        setTodos(stateHolder)
        window.localStorage.setItem('hooksTodos', JSON.stringify(stateHolder))
    }

    const deleteProject = (viewId) => {
        let stateHolder = { ...todos };
        let newTodos = stateHolder.projects.filter(project => project.projId !== viewId)
        stateHolder.projects = newTodos;
        setTodos(stateHolder)
        window.localStorage.setItem('hooksTodos', JSON.stringify(stateHolder))
    }

    const editProject = (data, viewId) => {
        let stateHolder = { ...todos };
        for (let i = 0; i < stateHolder.projects.length; i++) {
            if (stateHolder.projects[i].projId === viewId) {
                stateHolder.projects[i] = data;
            }
        }
        //console.log(stateHolder)
        setTodos(stateHolder)
        window.localStorage.setItem('hooksTodos', JSON.stringify(stateHolder))
    }

    const submitTodo = (data, viewId) => {
        let stateHolder = { ...todos };
        for (let i = 0; i < stateHolder.projects.length; i++) {
            if (stateHolder.projects[i].projId === viewId) {
                let dataholder = [...stateHolder.projects[i].projTodos, data]
                stateHolder.projects[i].projTodos = dataholder
            }
            setTodos(stateHolder)
            window.localStorage.setItem('hooksTodos', JSON.stringify(stateHolder));
        }
    }

    const autoDelete = () => { //Keeps deleted todos at 10 items or under. 
        let stateHolder = { ...todos };
        if (stateHolder.projects[2].projTodos.length > 9) {
            var dataHolder = stateHolder.projects[2].projTodos
            var index = dataHolder.length - 10; //Calculate how far over the 10 item limit the new length will be. 
            dataHolder.splice(0, index); //Cut away the first item in the array, if deleteComplete() is used, there may be more than 1, index allows for this event. 
            stateHolder.projects[2].projTodos = dataHolder
        }
        setTodos(stateHolder)
        window.localStorage.setItem('hooksTodos', JSON.stringify(stateHolder));
    }

    const deleteTodo = (data, viewId) => { //put some kind of if statment in here, if viewId == "3" then delete permamently else move the todo to the ghost proj
        let stateHolder = { ...todos };
        for (let i = 0; i < stateHolder.projects.length; i++) {
            if (stateHolder.projects[i].projId === viewId) {
                let newList = stateHolder.projects[i].projTodos.filter(todo => todo.id !== data.id);
                stateHolder.projects[i].projTodos = newList;
                if (viewId !== "3") { //If the currently viewed project is not deleted todos, then push the delted todo to its array.
                  
                    stateHolder.projects[2].projTodos.push(data);
                }
            }
        }
        setTodos(stateHolder)
        window.localStorage.setItem('hooksTodos', JSON.stringify(stateHolder)) //send the value of "state" to localstorage  
        if (viewId !== "3") { autoDelete() }
    }

    const editTodo = (data, viewId) => {
        let stateHolder = { ...todos };
        for (let i = 0; i < stateHolder.projects.length; i++) { //Loop through everything in the projects array in stateHolder.
            if (stateHolder.projects[i].projId === viewId) { //If project[i] is the project user is currently viewing...
                for (let v = 0; v < stateHolder.projects[i].projTodos.length; v++) { //Loop through its array of todos.
                    if (stateHolder.projects[i].projTodos[v].id === data.id) { //If its id matches the id in the passed in data...
                        stateHolder.projects[i].projTodos[v] = data //Replace that project's data with the passed in data from the form.
                    }
                }
            }
        }
        setTodos(stateHolder)
        window.localStorage.setItem('hooksTodos', JSON.stringify(stateHolder))
    }

    const toggleComplete = (data, viewId) => {
        let stateHolder = { ...todos };
        for (let i = 0; i < stateHolder.projects.length; i++) {
            if (stateHolder.projects[i].projId === viewId) {
                for (let v = 0; v < stateHolder.projects[i].projTodos.length; v++) {
                    if (stateHolder.projects[i].projTodos[v].id === data.id) {
                        stateHolder.projects[i].projTodos[v].completed = !stateHolder.projects[i].projTodos[v].completed
                    }
                }
            }
        }
        setTodos(stateHolder)
        window.localStorage.setItem('hooksTodos', JSON.stringify(stateHolder));
    }

    const deleteComplete = (viewId) => { //Will have to re-write this when ghost system implemented 
        let stateHolder = { ...todos };
        for (let i = 0; i < stateHolder.projects.length; i++) {
            if (stateHolder.projects[i].projId === viewId) {
                let incomplete = stateHolder.projects[i].projTodos.filter(todo => todo.completed === false);
                let complete = stateHolder.projects[i].projTodos.filter(todo => todo.completed === true);
                stateHolder.projects[i].projTodos = incomplete;
                if (viewId !== "3") {
                    for (let i = 0; i < complete.length; i++) { //Got to find some way to add in the deleteDate
                        stateHolder.projects[2].projTodos.push(complete[i]);
                    }
                }
            }
        }
        setTodos(stateHolder)
        window.localStorage.setItem('hooksTodos', JSON.stringify(stateHolder));
        autoDelete()
    }

    const restore = (data) => { //Returns a single todo to its parent project & removes it from the deleted todos project. 
        let stateHolder = { ...todos };
        for (let i = 0; i < stateHolder.projects.length; i++) {
            if (stateHolder.projects[i].projId === data.parentProj) {
                let dataholder = [...stateHolder.projects[i].projTodos, data]
                let deletedTodos = stateHolder.projects[2].projTodos.filter(todo => todo.id !== data.id);
                stateHolder.projects[i].projTodos = dataholder;
                stateHolder.projects[2].projTodos = deletedTodos;
            }
        }
        setTodos(stateHolder)
        window.localStorage.setItem('hooksTodos', JSON.stringify(stateHolder));
    }

    /*
    const test = (set) => { 
        let stateHolder = { ...todos };
        stateHolder.midnight = set
        //console.log(stateHolder.midnight)
       
        setTodos(stateHolder)
        window.localStorage.setItem('hooksTodos', JSON.stringify(stateHolder));
    }
    */

    return [todos, submitProject, deleteProject, editProject, submitTodo, deleteTodo, editTodo, toggleComplete, deleteComplete, restore];
}