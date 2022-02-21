function Project(props) {
  
    return (
     <div>
<button
onClick={() => {
     props.showProject(props.project.projId)
}}
>
{props.project.projName}
</button>
     </div>    
    );
  }
  
  export default Project;