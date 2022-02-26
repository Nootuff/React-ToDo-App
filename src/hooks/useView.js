import React, { useState } from "react";

export default viewing => {

    const [proj, setProj] = useState("1"); //maybe rename "proj" to something like "viewId" make it clear what this is 

    /* const currProject = (passedId) => {
         setView(passedId)
         setHome(false)
 //alert(passedId)
     }*/
     //A list of Projects, just the name, each can be clicked, when clicked, I don;t know, maybe put hom in projects? 
     
 
     return [proj, setProj];
}