import ProjectList from "../ListComponents/ProjectList";
import "../../styles/Partials/Sidebar.css";

function Sidebar({ projects, proj, setProj, handleFormShow }) {
  return (
    <nav className="Sidebar d-none d-sm-block background-purple pb-3">
      <h1 className="logo-text cursor-pointer pt-4"
        onClick={() => { setProj("1") }}
      >
        <span className="text-white">&lt;doThis </span><b><span className="text-danger">/</span></b><span className="text-white">&gt;</span>
      </h1>
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