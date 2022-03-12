

function ProjectControl({proj, viewedProject}) {
 return (
    <div className="text-start" style={{width: "60%", border: "1px solid green", margin: "auto"}}>
       <h2>{viewedProject.projName}</h2>
            <h4>{viewedProject.projNotes}</h4>
     </div>
  );
}

export default ProjectControl;