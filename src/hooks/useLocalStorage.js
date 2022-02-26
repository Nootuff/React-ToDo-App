import React, { useState } from "react";
import useView from "./useView";

const initialStorage = {
    projects: [
        {
            projId: "1",
            projName: "Home ",
            projNotes: "",
            projTodos: [{
                "taskBody": "Placeholder 1",
                "taskNotes": "Some notes here",
                "priority": "Medium",
                "id": "1",
                "completed": false,
                "deadline": "",
                "deletedDate": "",
                "datePosted": "19/02/2022"
            },
            {
                "taskBody": "Placeholder 2",
                "taskNotes": "Some more here",
                "priority": "high",
                "id": "2",
                "completed": false,
                "deadline": "",
                "deletedDate": "",
                "datePosted": "19/02/2022"
            }]
        },
        {
            projId: "2",
            projName: "Dailies ",
            projNotes: "Tasks you need to do everyday! ",
            projTodos: []
        },
        {
            projId: "3",
            projName: "Your deleted todos ",
            projNotes: "These will be automatically deleted after 3 days.",
            projTodos: []
        }

    ]

};

export default storage => {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("hooksTodos")) || initialStorage);

    const submitProject = (data) => {
        let stateHolder = { ...todos };
        //var name = data.projName.replace(/\s/g, ''); //Is this still needed?
        let dataholder = [...todos.projects, data]
        stateHolder.projects = dataholder;
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
            console.log(stateHolder)
            setTodos(stateHolder)
            window.localStorage.setItem('hooksTodos', JSON.stringify(stateHolder));
        }
    }

    const deleteTodo = (dataId, viewId) => {
        let stateHolder = { ...todos };
        for (let i = 0; i < stateHolder.projects.length; i++) {
            if (stateHolder.projects[i].projId === viewId) {
                let newList = stateHolder.projects[i].projTodos.filter(toDo => toDo.id !== dataId)
                stateHolder.projects[i].projTodos = newList;
            }
        }
        setTodos(stateHolder)
        window.localStorage.setItem('hooksTodos', JSON.stringify(stateHolder)) //send the value of "state" to localstorage   
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
                let incomplete = stateHolder.projects[i].projTodos.filter(todo => todo.completed === false)
                stateHolder.projects[i].projTodos = incomplete;
            }
        }
        //console.log(stateHolder)
        setTodos(stateHolder)
        window.localStorage.setItem('hooksTodos', JSON.stringify(stateHolder));
    }


    return [todos, submitProject, submitTodo, deleteTodo, editTodo, toggleComplete, deleteComplete];

}