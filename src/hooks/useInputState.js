import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'; //Imports the uuid npm package. 

const initialValues = {
    taskBody: "",
    taskNotes: "",
    //completed: false,
    priority: "Medium"
    //id: ""
};

export default input => {
    const [values, setValues] = useState(initialValues);

    const handleChangeFunc = (event) => {
        const { name, value } = event.target; //Destructured const
        setValues({
            ...values,
            [name]: value,
            //: uuidv4()
        });
    }

    

    return [values, setValues, handleChangeFunc];
}