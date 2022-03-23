import ProjectList from "../ListComponents/ProjectList";

import '../../styles/Partials/Sidebar.css';

function Sidebar({ projects, proj, setProj, handleFormShow }) {
  return (
    <div className="Sidebar d-none d-sm-block background-purple">
       <h2 className="white-text cursor-pointer pt-4"
        onClick={() => { setProj("1") }}
      >
       <span className="text-white">&lt;doThis </span><span className="text-primary">/</span><span className="text-white">&gt;</span>
</h2> 
      
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