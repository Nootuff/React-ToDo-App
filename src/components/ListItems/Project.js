import { FaTrashAlt } from "react-icons/fa";
import '../../styles/ListItems/Project.css';
import '../../styles/index.css';

function Project({ setProj, proj, data }) {

     return (
          <div  /*Outer layer with the hover/ active highlight effect, full width of the proj list */
               className='Project-container mb-1 ps-3 p-2'
               style={{ color: proj === data.projId ? "#DC3545" : "white", /*border: "1px solid yellow" */ }}
               onClick={() => { setProj(data.projId) }}
          >
               <div className="Nav-data d-flex " /*contains the actual data*/
                    style={{ width: "90%", /*border: "1px solid green"*/ }}  /*Could change this with media queries*/
               >
                    <div className=" " style={{ /* border: "1px solid blue" */ }} ><h6>  {data.projName + " "}</h6></div>
                    <div className='ms-auto'>
                         {data.projId !== "3" && <div className="d-inline " style={{ /*border: "1px solid red"*/ }}><b><span className="Project-count">{data.projTodos.length}</span></b></div>}

                         <div className="d-inline Icon" style={{ /* border: "1px solid orange"*/ }}>{ /*props.data.projId === "1" && <FaHome />  :*/ data.projId === "3" && <FaTrashAlt />}</div>
                    </div>
               </div>
          </div>
     );
}

export default Project;
