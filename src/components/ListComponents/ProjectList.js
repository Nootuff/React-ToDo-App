import Project from "../ListItems/Project";
import NewProjectButton from "../Controls/NewProjectButton";

function ProjectList({ projects, proj, setProj, handleFormShow }) {

  //Just a list of buttons to change projects

  const list = projects.slice(3).reverse().map((num) =>
  
      <Project
        key={num.projId}
        setProj={setProj}
        proj={proj}
        data={num}
      />
    
  );

  return (
      <div> 
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

      <hr style={{borderTop: "1.5px solid white", width: "90%", margin: "20px auto"}}/>
      {projects.length > 3 && <h4 className="white-text text-center">My Projects</h4>}
        {list}

        <NewProjectButton 
        handleFormShow={handleFormShow}
     />
      </div>
  );
}

export default ProjectList;