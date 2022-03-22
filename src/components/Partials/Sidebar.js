import ProjectList from "../ListComponents/ProjectList";
import Logo from "../Partials/Logo";
import '../../styles/Partials/Sidebar.css';

function Sidebar({ projects, proj, setProj, handleFormShow }) {
  return (
    <div className="Sidebar d-none d-sm-block background-purple">
      {/* <h2 className="white-text cursor-pointer"
        onClick={() => { setProj("1") }}
      >
        &lt;react-Todo <span style={{ color: "#DC3545" }}>/</span>&gt;
</h2> */}
      <Logo
        setProj={setProj}
      />
      <ProjectList
        projects={projects}
        proj={proj}
        setProj={setProj}
        handleFormShow={handleFormShow}
      />
      <br />

    </div>
  )
}
export default Sidebar;