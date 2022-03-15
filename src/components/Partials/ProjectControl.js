import React, { useState, useEffect } from "react";

import DeleteProject from "../Controls/DeleteProject";
import DeleteComplete from "../Controls/DeleteComplete";
import EditProjectForm from "../Forms/EditProjectForm";


import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

import ButtonGroup from 'react-bootstrap/ButtonGroup';



function ProjectControl({ proj, viewedProject, setProj, deleteComplete, editProject, deleteProject }) {

   const [open, setOpen] = useState(false);

   useEffect(() => {
      setOpen(false);
      //console.log("itchanges")
   }, [proj])

//console.log(proj)
//console.log(viewedProject)

   return (
      <div className="text-start" style={{ width: "60%", border: "1px solid green", margin: "auto" }}>
         <section style={{ border: "1px solid blue" }}>
            <h2>{viewedProject.projName}</h2>
            <p>{viewedProject.projNotes}</p>
         </section>
         {proj !== "3" &&
            <section>
               {viewedProject.projId.length > 1 &&
                  <>
                     <Button
                        className="mb-2"
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                     >
                        Edit Project
                     </Button>
                     <Collapse in={open}>
                        <div style={{ border: "1px solid orange" }}>
                           <EditProjectForm
                              viewedProject={viewedProject}
                              editProject={editProject}
                              proj={proj}
                              setOpen={setOpen}
                           />
                           <DeleteProject
                              viewedProject={viewedProject}
                              setProj={setProj}
                              deleteProject={deleteProject}
                           />
                        </div>
                     </Collapse>
                  </>
               }
               <div>
                  <DeleteComplete
                     proj={proj}
                     deleteComplete={deleteComplete}
                  />
               </div>

            </section>
         }

      </div>
   );
}

export default ProjectControl;