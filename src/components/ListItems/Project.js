import { FaTrashAlt } from "react-icons/fa";
import '../../styles/ListItems/Project.css';
import '../../styles/index.css';

function Project({ setProj, proj, data }) {

     return (
          <div  
               className='Project-container mb-1 ps-3 p-2'
               style={{ color: proj === data.projId ? "#DC3545" : "white"}}
               onClick={() => { setProj(data.projId) }}
          >
               <div className="Nav-data d-flex "
                    style={{ width: "90%", /*border: "1px solid green"*/ }}  /*Could change this with media queries*/
               >
                    <div><h6>{data.projName + " "}</h6></div>
                    <div className='ms-auto'>
                         {data.projId !== "3" && <div className="d-inline"><b><span className="Project-count">{data.projTodos.length}</span></b></div>}

                         <div className="d-inline Icon" >{ /*props.data.projId === "1" && <FaHome />  :*/ data.projId === "3" && <FaTrashAlt />}</div>
                    </div>
               </div>
          </div>
     );
}

export default Project;
