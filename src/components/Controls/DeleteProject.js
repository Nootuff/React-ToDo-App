import Button from "react-bootstrap/Button";

function DeleteProject({ viewedProject, setProj, deleteProject }) {
  return (
    <Button
      className="mb-2"
      variant="danger"
      onClick={() => {
        deleteProject(viewedProject.projId);
        setProj("1")
      }}
    >
      Delete project
    </Button>
  );
}

export default DeleteProject;