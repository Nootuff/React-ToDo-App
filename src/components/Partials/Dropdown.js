import Project from "../ListItems/Project";
import ProjectList from "../ListComponents/ProjectList";
import '../../styles/Dropdown.css';

function Dropdown({ projects, proj, setProj, handleFormShow }) {

    return (
        <div className="Dropdown pb-4" >
         
         {/* <Project

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
*/}
        <ProjectList
                    projects={projects}
                    proj={proj}
                    setProj={setProj}
                    handleFormShow={handleFormShow}
                />
        </div>
         )
}

export default Dropdown;