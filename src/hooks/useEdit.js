import React, { useState } from "react";

/*
const updatedValuesObj = {
    taskBody: "",
    taskNotes: "",
    completed: "",
    priority: "",
    //id: ""
};
*/

export default edit => {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("hooksTodos")) || []);
    //const [updatedValues, setUpdatedValues] = useState(updatedValuesObj);



const editFunc  = (data) =>{
//the list doesn;'t re render
let stateHolder = [...todos];


    for (let i = 0; i < stateHolder.length; i++) { //Loop through everything in stateHolder.
    if (stateHolder[i].id === data.id) { //If the id of the current object is the same as the id that is passed in...
           // stateHolder[i].taskBody = data.editBody; //Update its body with the new body that was passed in.
 stateHolder[i] = data
    //console.log(stateHolder[i])
        }
        //console.log("yes")
    }
    
    setTodos(stateHolder)
    window.localStorage.setItem('hooksTodos', JSON.stringify(stateHolder));
   console.log(data)
 
}

    //return [ /*handleEditChangeFunc*/editFunc ];
}