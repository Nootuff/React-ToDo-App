import ProjectList from "../ListComponents/ProjectList";
//import Project from "../ListItems/Project";


import '../../styles/Partials/Sidebar.css';

function Sidebar({ projects, proj, setProj, handleFormShow }) {

  return (
    <div className="Sidebar d-none d-sm-block background-purple">
      {/* <div> */}
      <h2 className="white-text cursor-pointer"
        onClick={() => { setProj("1") }}
      >
        &lt;react-Todo <span style={{ color: "#DC3545" }}>/</span>&gt;
      </h2>
      {/*  
      <Project
        setProj={setProj}
        proj={proj}
        data={projects[0]}
      />

      <Project
        setProj={setProj}
        proj={proj}
        data={projects[2]}
      />

      < hr />
  <h4 className="white-text">My Projects</h4> */}
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