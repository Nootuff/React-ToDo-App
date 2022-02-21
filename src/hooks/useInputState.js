import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'; //Imports the uuid npm package. 

const initialTodo = {
    taskBody: "",
    taskNotes: "",
    //completed: false,
    priority: "Medium",
    deadline: ""
    //id: ""
};

const initialProject = {
    projName: "",
    projNotes: "",
};

export default input => {
    const [values, setValues] = useState(initialTodo);
    const [projData, setProjData] = useState(initialProject);


    const handleChangeFunc = (event) => {
        const { name, value } = event.target; //Destructured const
        setValues({
            ...values,
            [name]: value,
            //: uuidv4()
        });
    }

    const handleProjChangeFunc = (event) => {
        const { name, value } = event.target; 
        setProjData({
            ...projData,
            [name]: value,
        });
    }
    

    return [values, setValues, projData, setProjData, handleChangeFunc, handleProjChangeFunc];
}