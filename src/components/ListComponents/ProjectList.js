import Project from "../ListItems/Project";
import NewProjectButton from "../Controls/NewProjectButton";
import '../../styles/ListComponents/ProjectList.css';

function ProjectList({ projects, proj, setProj, handleFormShow }) {

  const list = projects.slice(3).reverse().map((num) =>
    <Project
      key={num.projId}
      setProj={setProj}
      proj={proj}
      data={num}
    />
  );

  return (
    <div className="mt-4">
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

      <hr className="ProjectList-divider mx-auto my-4" />
      {projects.length > 3 && <h4 className="text-center text-white">My Projects</h4>}
      {list}
      <NewProjectButton
        handleFormShow={handleFormShow}
      />
    </div>
  );
}

export default ProjectList;