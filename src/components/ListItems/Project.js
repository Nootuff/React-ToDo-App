function Project(props) {

     return (
          <li>
               <button
                    style={{ color: props.proj === props.data.projId ? "red" : "black" }}
                    onClick={() => { props.setProj(props.data.projId) }}
               >
                    {props.data.projName + " " + props.data.projTodos.length}
               </button>
          </li>
     );
}

export default Project;