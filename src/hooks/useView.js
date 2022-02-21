import React, { useState } from "react";

export default viewing => {
    const [home, setHome] =useState(true)
    const [view, setView] = useState("");

    const showProject = (passedId) => {
        setView(passedId)
        setHome(false)
//alert(passedId)
    }
    //A list of Projects, just the name, each can be clicked, when clicked, I don;t know, maybe put hom in projects? 
    

    return [home, setHome, view, showProject];
}