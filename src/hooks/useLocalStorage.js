import React, { useState } from "react";

const initialStorage = {
    home: [
        {
            "taskBody": "Placeholder 1",
            "taskNotes": "Some notes here",
            "priority": "Medium",
            "id": "1",
            "completed": false,
            "deadline": "",
            "datePosted": "19/02/2022"
        },
        {
            "taskBody": "Placeholder 2",
            "taskNotes": "Some more here",
            "priority": "high",
            "id": "2",
            "completed": false,
            "deadline": "",
            "datePosted": "19/02/2022"
        }
    ],
    dailies: [],
    projects: []
};

/*
const initialStorage = {
    home: [],
    dailies: []
}
*/

export default storage => {

    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("hooksTodos")) || initialStorage);

    const submitTodo = (data) => {
        let stateHolder = todos;
        let dataholder = [...todos.home, data]
        stateHolder.home = dataholder;
        console.log(stateHolder)
        window.localStorage.setItem('hooksTodos', JSON.stringify(stateHolder));
    }

    const submitProject = (data) => {
        let stateHolder = { ...todos };
        //var name = data.projName.replace(/\s/g, ''); Is this still needed?
        let dataholder = [...todos.projects, data]
        stateHolder.projects = dataholder;
        console.log(stateHolder)
        setTodos(stateHolder)
        window.localStorage.setItem('hooksTodos', JSON.stringify(stateHolder))
    }

    const submitProjectTodo = (data, viewId) => {
        let stateHolder = { ...todos };
        for (let i = 0; i < stateHolder.projects.length; i++) {
            if (stateHolder.projects[i].projId === viewId) {
                stateHolder.projects[i].projTodos.push(data);
            }
        }
        setTodos(stateHolder)
        window.localStorage.setItem('hooksTodos', JSON.stringify(stateHolder));
    }

    const deleteFunc = (passedId) => {
        let newList = todos.home.filter(toDo => toDo.id !== passedId)
        let stateHolder = { ...todos }; //The three dots are what make the change register and trigger the re-render.
        stateHolder.home = newList;
        setTodos(stateHolder)
        window.localStorage.setItem('hooksTodos', JSON.stringify(stateHolder)) //send the value of "state" to localstorage 
    }

    const deleteProjectTodo = (data, viewId) => {
        alert("deleteProjectTodo")
    }

    const editFunc = (data) => {
        let stateHolder = { ...todos };
        for (let i = 0; i < stateHolder.home.length; i++) { //Loop through everything in stateHolder.
            if (stateHolder.home[i].id === data.id) { //If the id of the current object is the same as the id that is passed in...
                // stateHolder[i].taskBody = data.editBody; //Update its body with the new body that was passed in.
                stateHolder.home[i] = data
            }
        }
        setTodos(stateHolder)
        window.localStorage.setItem('hooksTodos', JSON.stringify(stateHolder));
        console.log(data)
    }

    const editProjectTodo = (data, viewId) => {
        alert("editProjectTodo")
    }

    const toggleComplete = (data) => {
        let stateHolder = { ...todos };
        for (let i = 0; i < stateHolder.home.length; i++) {
            if (stateHolder.home[i].id === data.id) {
                stateHolder.home[i].completed = !stateHolder.home[i].completed
            }
        }
        setTodos(stateHolder)
        window.localStorage.setItem('hooksTodos', JSON.stringify(stateHolder));
    }

    const completeProjectTodo = (data, viewId) => {
        alert("completeProjectTodo")
    }

    const deleteComplete = () => {
        let stateHolder = { ...todos };
        let incomplete = todos.home.filter(test => test.completed === false)
        stateHolder.home = incomplete;
        setTodos(stateHolder)
        window.localStorage.setItem('hooksTodos', JSON.stringify(stateHolder));
    }


    return [todos, submitTodo, submitProject, submitProjectTodo, deleteFunc, deleteProjectTodo, editFunc, editProjectTodo, toggleComplete, completeProjectTodo, deleteComplete];

}