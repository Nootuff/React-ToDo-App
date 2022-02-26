function Project(props) {

     return (
          <div>
               <button
                    onClick={() => {
                         props.showProject(props.project.projId)
                    }}
               >
                    {props.project.projName}
                    {props.project.projTodos.length}
               </button>
          </div>
     );
}

//export default Project;