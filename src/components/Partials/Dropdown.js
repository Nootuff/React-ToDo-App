import ProjectList from "../ListComponents/ProjectList";
import "../../styles/Partials/Dropdown.css";

function Dropdown({ projects, proj, setProj, handleFormShow }) {
  return (
    <nav className="Dropdown pt-1 pb-4">
      <ProjectList
        projects={projects}
        proj={proj}
        setProj={setProj}
        handleFormShow={handleFormShow}
      />
    </nav>
  )
}

export default Dropdown;