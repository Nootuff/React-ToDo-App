import Project from "./Project";

function ProjectList(props) {
    
  const lister = props.projects.slice(0).reverse().map((num) =>
  <Project showProject={props.showProject} project={num} />
);
    
    return (
            <div className="List">
              <b> ProjectList </b>
              <br />
              <button onClick={() => {
    props.setHome(true)
}}>Home</button>
              {lister}
            </div>
    );
}

export default ProjectList;