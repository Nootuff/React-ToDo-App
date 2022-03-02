import Project from "../ListItems/Project";

function ProjectList(props) {

  //Just a list of buttons to change projects

  const list = props.projects.slice(3).reverse().map((num) =>
    <Project

      key={num.projId}
      setProj={props.setProj}
      proj={props.proj}
      data={num}
    />



  );

  return (
    <ul className="List">
      <b>Current project id: {props.proj}</b>
      {list}

    </ul>
  );
}

export default ProjectList;