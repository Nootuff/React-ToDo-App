import { useState } from "react";

const initialStorage = { //Placeholder data, used on initial load if nothing is detected in localStorage.
  projects: [
    {
      projId: "1",
      projName: "Home ",
      projNotes: "",
      projTodos: [
        {
          "taskBody": "Hoover your room.",
          "taskNotes": "Dust it too.",
          "priority": "Medium",
          "id": "00001",
          "completed": true,
          "deadline": "",
          "datePosted": "2022-02-21",
          "parentProj": "1"
        },
        {
          "taskBody": "Buy more dog food.",
          "taskNotes": "",
          "priority": "High",
          "id": "00002",
          "completed": false,
          "deadline": "2022-03-21",
          "datePosted": "2022-03-18",
          "parentProj": "1"
        },
        {
          "taskBody": "Prepare overnight oats.",
          "taskNotes": "",
          "priority": "Medium",
          "id": "00003",
          "completed": false,
          "deadline": "",
          "datePosted": "2022-02-10",
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
    },
    {
      projId: "0004",
      projName: "Get in shape ",
      projNotes: "New year new you!",
      projTodos: [
        {
          "taskBody": "Decide on a workout plan",
          "taskNotes": "",
          "priority": "Medium",
          "id": "00004",
          "completed": false,
          "deadline": "",
          "datePosted": "2022-01-19",
          "parentProj": "0004"
        },
        {
          "taskBody": "Buy some new trainers",
          "taskNotes": "Make sure they're good quality.",
          "priority": "Low",
          "id": "00005",
          "completed": true,
          "deadline": "2022-02-25",
          "datePosted": "2022-01-25",
          "parentProj": "0004"
        }
      ]
    },
    {
      projId: "0005",
      projName: "Learn web development ",
      projNotes: "",
      projTodos: [
        {
          "taskBody": "Learn React ",
          "taskNotes": "Learn hooks and context too.",
          "priority": "Medium",
          "id": "00006",
          "completed": true,
          "deadline": "",
          "datePosted": "2022-01-19",
          "parentProj": "0005"
        },
        {
          "taskBody": "Deploy React hooks todo app",
          "taskNotes": "",
          "priority": "High",
          "id": "00007",
          "completed": true,
          "deadline": "",
          "datePosted": "2022-03-03",
          "parentProj": "0005"
        },
        {
          "taskBody": "Polish portfolio",
          "taskNotes": "Make sure its responsive!",
          "priority": "Medium",
          "id": "00008",
          "completed": false,
          "deadline": "",
          "datePosted": "2022-03-19",
          "parentProj": "0005"
        }
      ]
    }
  ],
  darkMode: false
};

export default function Storage() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("doThisData")) || initialStorage);

  const submitProject = (data) => {
    let stateHolder = { ...todos };
    let dataholder = [...todos.projects, data]
    stateHolder.projects = dataholder;
    setTodos(stateHolder)
    window.localStorage.setItem("doThisData", JSON.stringify(stateHolder))
  }

  const deleteProject = (viewId) => {
    let stateHolder = { ...todos };
    let newTodos = stateHolder.projects.filter(project => project.projId !== viewId)
    stateHolder.projects = newTodos;
    setTodos(stateHolder)
    window.localStorage.setItem("doThisData", JSON.stringify(stateHolder))
  }

  const editProject = (data, viewId) => {
    let stateHolder = { ...todos };
    for (let i = 0; i < stateHolder.projects.length; i++) {
      if (stateHolder.projects[i].projId === viewId) {
        stateHolder.projects[i].projName = data.projName;
        stateHolder.projects[i].projNotes = data.projNotes;
      }
    }
    setTodos(stateHolder)
    window.localStorage.setItem("doThisData", JSON.stringify(stateHolder))
  }

  const submitTodo = (data, viewId) => {
    let stateHolder = { ...todos };
    for (let i = 0; i < stateHolder.projects.length; i++) {
      if (stateHolder.projects[i].projId === viewId) {
        let dataholder = [...stateHolder.projects[i].projTodos, data]
        stateHolder.projects[i].projTodos = dataholder
      }
      setTodos(stateHolder)
      window.localStorage.setItem("doThisData", JSON.stringify(stateHolder));
    }
  }

  const autoDelete = () => { //Keeps deleted todos at 10 items or under. 
    let stateHolder = { ...todos };
    if (stateHolder.projects[2].projTodos.length > 9) {
      var dataHolder = stateHolder.projects[2].projTodos
      var index = dataHolder.length - 10; //Calculate how far over the 10 item limit the new length will be. 
      dataHolder.splice(0, index); //Cut away the first item in the array, if deleteComplete() is used, there may be more than 1, index allows for this eventuality. 
      stateHolder.projects[2].projTodos = dataHolder
    }
    setTodos(stateHolder)
    window.localStorage.setItem("doThisData", JSON.stringify(stateHolder));
  }

  const deleteTodo = (data, viewId) => {
    let stateHolder = { ...todos };
    for (let i = 0; i < stateHolder.projects.length; i++) {
      if (stateHolder.projects[i].projId === viewId) {
        let newList = stateHolder.projects[i].projTodos.filter(todo => todo.id !== data.id); //Use filter to create a list all the todos whose id does not equal the id of the deletion target todo excluding it.
        stateHolder.projects[i].projTodos = newList;
        if (viewId !== "3") { //If the currently viewed project is NOT deleted todos, then push the deleted todo to its todos array for storage.
          stateHolder.projects[2].projTodos.push(data);
        }
      }
    }
    setTodos(stateHolder)
    window.localStorage.setItem("doThisData", JSON.stringify(stateHolder)) //send the value of "state" to localstorage  
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
    window.localStorage.setItem("doThisData", JSON.stringify(stateHolder))
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
    window.localStorage.setItem("doThisData", JSON.stringify(stateHolder));
  }

  const deleteComplete = (viewId) => {
    let stateHolder = { ...todos };
    for (let i = 0; i < stateHolder.projects.length; i++) {
      if (stateHolder.projects[i].projId === viewId) {
        let incomplete = stateHolder.projects[i].projTodos.filter(todo => todo.completed === false);
        let complete = stateHolder.projects[i].projTodos.filter(todo => todo.completed === true);
        stateHolder.projects[i].projTodos = incomplete;
        if (viewId !== "3") {
          for (let i = 0; i < complete.length; i++) {
            stateHolder.projects[2].projTodos.push(complete[i]);
          }
        }
      }
    }
    setTodos(stateHolder)
    window.localStorage.setItem("doThisData", JSON.stringify(stateHolder));
    autoDelete()
  }

  const restore = (data) => { //Returns a single todo to its parent project & removes it from the deleted todos project. 
    let stateHolder = { ...todos };
    let parent = false;
    for (let i = 0; i < stateHolder.projects.length; i++) {
      if (stateHolder.projects[i].projId === data.parentProj) { //Check to see if this todo's parent project still exists.
        parent = true; //If it does, set parent to true.
      }
    }
    if (parent) { //If parent is true & parent project still exists...
      for (let i = 0; i < stateHolder.projects.length; i++) {
        if (stateHolder.projects[i].projId === data.parentProj) { //Find the parent project whose projId matches the todo's parentProj value.
          let dataholder = [...stateHolder.projects[i].projTodos, data]; //Add it back to the existing todos in that project. 
          stateHolder.projects[i].projTodos = dataholder;
        }
      }
    } else { //Automatically send this todo to the home project todos list as its parent is gone. 
      let dataholder = [...stateHolder.projects[0].projTodos, data];
      stateHolder.projects[0].projTodos = dataholder;
    }
    let deletedTodos = stateHolder.projects[2].projTodos.filter(todo => todo.id !== data.id); //Create a list of todos excluding the one that was just restored. 
    stateHolder.projects[2].projTodos = deletedTodos; //Set the todos list of deleted storage to this updated list. 
    setTodos(stateHolder)
    window.localStorage.setItem("doThisData", JSON.stringify(stateHolder));
  }

  return [todos, submitProject, deleteProject, editProject, submitTodo, deleteTodo, editTodo, toggleComplete, deleteComplete, restore];
}