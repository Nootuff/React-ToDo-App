import { FaTrashAlt } from "react-icons/fa";
import "../../styles/ListItems/Project.css";
import "../../styles/index.css";

function Project({ setProj, proj, data }) {
  return (
    <li
      className={"Project mb-1 ps-3 p-2 cursor-pointer text-" + (proj === data.projId ? "danger" : "light")}
      //style={{ color: proj === data.projId ? "var(--danger-red)" : "white" }}
      onClick={() => { setProj(data.projId) }}
    >
      <div className="Project-body d-flex">
        <div className="Project-title"><h6 className="align-baseline">{data.projName}</h6></div>
        <div className="ms-auto">
          {data.projId !== "3" ?
            <div className="d-inline">
              <b>
                <span className="Project-count" style={{ backgroundColor: proj === data.projId ? "var(--danger-red)" : "white" }}>
                  {data.projTodos.length}
                </span>
              </b>
            </div>
            :
            <div className="Project-trash Icon d-inline"><FaTrashAlt /></div>
          }
        </div>
      </div>
    </li>
  );
}

export default Project;
