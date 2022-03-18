import Project from "../ListItems/Project";
import ProjectList from "../ListComponents/ProjectList";
import '../../styles/Dropdown.css';

function Dropdown(props) {

    return (
        <div className="Dropdown" >
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

        <h2 className="white-text text-center" >Your Projects</h2>
        <ProjectList
                    projects={props.projects}
                    proj={props.proj}
                    setProj={props.setProj}
                />
        </div>
         )
}

export default Dropdown;