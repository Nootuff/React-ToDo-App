import { FaTrashAlt } from "react-icons/fa";
import '../../styles/ListItems/Project.css';
import '../../styles/index.css';

function Project({ setProj, proj, data }) {

     return (
          <div
               className='Project-container mb-1 ps-3 p-2 cursor-pointer'
               style={{ color: proj === data.projId ? "var(--primary-blue)" : "white" }}
               onClick={() => { setProj(data.projId) }}
          >
               <div className="d-flex "
                    style={{ width: "90%", /*border: "1px solid green"*/ }}  /*Could change this with media queries*/
               >
                    <div className="Project-title "><h6 className="align-baseline">{data.projName + " "}</h6></div>
                    <div className='ms-auto'>
                         {data.projId !== "3" && <div className="d-inline">
                              <b>
                                   <span className="Project-count" style={{ backgroundColor: proj === data.projId ? "var(--primary-blue)" : "white" }}>
                                        {data.projTodos.length}
                                   </span>
                              </b>
                         </div>}
                         <div className="d-inline Icon Project-trash" >{data.projId === "3" && <FaTrashAlt />}</div>
                    </div>
               </div>
          </div>
     );
}

export default Project;
