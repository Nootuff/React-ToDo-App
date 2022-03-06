import Project from "../ListItems/Project";

function ProjectList(props) {

  //Just a list of buttons to change projects

  const list = props.projects.slice(3).reverse().map((num) =>
    <p>
      <Project

        key={num.projId}
        setProj={props.setProj}
        proj={props.proj}
        data={num}
      />
    </p>
  );

  return (
    <div>
      <Project
        setProj={props.setProj}
        proj={props.proj}
        data={props.projects[0]}
      />
     
      <Project
        setProj={props.setProj}
        proj={props.proj}
        data={props.projects[2]}
      />
      <div className='d-none d-sm-block'>
       
        {list}

      </div>
    </div>
  );
}

export default ProjectList;