import React, { useState, useEffect } from "react";
import DeleteComplete from "../Controls/DeleteComplete";
import EditProjectForm from "../Forms/EditProjectForm";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import "../../styles/index.css";

function ProjectControl({ proj, viewedProject, setProj, deleteComplete, editProject, deleteProject }) {

  const [open, setOpen] = useState(false);

  useEffect(() => { //Close the edit project form each time the project is changed. 
    setOpen(false);
  }, [proj])

  return (
    <div className="text-start">
      <section className="background-grey px-3 pt-2 pb-1 mb-2 rounded">
        <h2 className="overflow-text">{viewedProject.projName}</h2>
        <p className="overflow-text">{viewedProject.projNotes}</p>
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
                <div>
                  <EditProjectForm
                    viewedProject={viewedProject}
                    editProject={editProject}
                    proj={proj}
                    setOpen={setOpen}
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