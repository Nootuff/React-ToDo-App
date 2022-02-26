function ProjectList(props) {

  //Just a list of buttons to change projects

  const list = props.projects.slice(2).reverse().map((num) =>
    <li>
      <button
        style={{ color: props.proj === num.projId ? "red" : "black" }}
        onClick={() => { props.setProj(num.projId) }}>{num.projName + " " + num.projTodos.length}
      </button>
    </li>
  );

  return (
    <ul className="List">
      <b>Current project id: {props.proj}</b>
      {list}
    </ul>
  );
}

export default ProjectList;