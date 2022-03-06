import ProjectList from "../ListComponents/ProjectList";
import Project from "../ListItems/Project";

function Nav(props) {

    return (
        <div className="sidebar d-none d-sm-block">
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

      < hr/>
      <h4>My Projects</h4>
           <ProjectList
                    projects={props.projects}
                    proj={props.proj}
                    setProj={props.setProj}
                />
                <br />
        </div>
    )
    }
    export default Nav;