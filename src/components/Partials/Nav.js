import ProjectList from "../ListComponents/ProjectList";
import Project from "../ListItems/Project";
import '../../styles/Sidebar.css';

function Nav(props) {

    return (
        <div className="sidebar d-none d-sm-block background-purple">
          <div><h2 className="white-text">&lt;react-Todo <span style={{color: "#DC3545"}}>/</span>&gt;</h2></div>
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
      <h4 className="white-text">My Projects</h4>
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