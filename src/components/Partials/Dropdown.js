import Project from "../ListItems/Project";
import ProjectList from "../ListComponents/ProjectList";
import '../../styles/Partials/Dropdown.css';

function Dropdown({ projects, proj, setProj, handleFormShow }) {
  return (
    <div className="Dropdown pt-1 pb-4" >
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