import ProjectList from "../ListComponents/ProjectList";
import "../../styles/Partials/HeaderDropdown.css";

function HeaderDropdown({ projects, proj, setProj, handleFormShow }) {
  return (
    <nav className="HeaderDropdown pt-1 pb-4">
      <ProjectList
        projects={projects}
        proj={proj}
        setProj={setProj}
        handleFormShow={handleFormShow}
      />
    </nav>
  )
}

export default HeaderDropdown;