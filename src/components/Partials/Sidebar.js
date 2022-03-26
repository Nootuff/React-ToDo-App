import ProjectList from "../ListComponents/ProjectList";
import "../../styles/Partials/Sidebar.css";

function Sidebar({ projects, proj, setProj, handleFormShow }) {
  return (
    <nav className="Sidebar d-none d-sm-block background-purple pb-3">
      <h2 className="cursor-pointer pt-4"
        onClick={() => { setProj("1") }}
      >
        <span className="text-white">&lt;doThis </span><span className="text-danger">/</span><span className="text-white">&gt;</span>
      </h2>
      <ProjectList
        projects={projects}
        proj={proj}
        setProj={setProj}
        handleFormShow={handleFormShow}
      />
    </nav>
  )
}

export default Sidebar;