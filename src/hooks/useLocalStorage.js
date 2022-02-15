import React, { useState } from "react";

export default search => {

    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todoData")) || []);
    //const [srunk, setShrunk] = useState(true)


    const submitFunc = (data) => {
        let stateHolder = [...todos, data]
        setTodos(stateHolder)
        //console.log(data)
        window.localStorage.setItem('todoData', JSON.stringify(stateHolder));
    }

    const deleteFunc = (passedId) => {
        let newList = todos.filter(todo => todo.id !== passedId)  // Sets value to new array created from from all toDos where id does not = the id of the todo taht was passed to this function when the delete button was pushed in its component. 
        setTodos(newList)
        //alert("delete this")
        //console.log(newState)
        window.localStorage.setItem('todoData', JSON.stringify(newList));
    }

    const editFunc = (data) => {
        let stateHolder = [...todos];

        for (let i = 0; i < stateHolder.length; i++) { //Loop through everything in stateHolder.
            if (stateHolder[i].id === data.id) { //If the id of the current object is the same as the id that is passed in...
                stateHolder[i] = data //Update its data with the new data that was passed in.
            }
        }
        setTodos(stateHolder)
        window.localStorage.setItem('todoData', JSON.stringify(stateHolder));
        //console.log(data)
    }

    const toggleComplete = (data) => {
        let stateHolder = [...todos];
        for (let i = 0; i < stateHolder.length; i++) {
            if (stateHolder[i].id === data.id) {
                stateHolder[i].completed = !stateHolder[i].completed
            }
        }
        setTodos(stateHolder)
        window.localStorage.setItem('todoData', JSON.stringify(stateHolder));
    }

    const deleteComplete = () => {
        let stateHolder = [...todos];
        let incomplete = stateHolder.filter(test => test.completed === false)
        setTodos(incomplete)
        window.localStorage.setItem('todoData', JSON.stringify(incomplete));
    }


    return [todos, submitFunc, deleteFunc, editFunc, toggleComplete, deleteComplete];

}