import Button from 'react-bootstrap/Button';
import { FaTrashAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import '../../styles/Project.css';
import '../../styles/index.css';


function Project(props) {

     return (

          <div  /*OUter layer with the hover/ active highlight effect, full width of the proj list */
               className='Project-container mb-1 ps-3 p-2'
               style={{ color: props.proj === props.data.projId ? "#DC3545" : "white", /*border: "1px solid yellow" */}}
               onClick={() => { props.setProj(props.data.projId) }}
          >

               <div className="Nav-data d-flex " /*contains the actual data*/
                    style={{ width: "90%", /*border: "1px solid green"*/ }}  /*Could change this with media queries*/
               >

                    <div className=" " style={{ /* border: "1px solid blue" */ }} ><h6>  {props.data.projName + " "}</h6></div>
<div className='ms-auto'>
                    {props.data.projId !== "3" && <div className="d-inline " style={{ /*border: "1px solid red"*/ }}><b><span className="Project-count">{ props.data.projTodos.length}</span></b></div> }

                    <div className="d-inline Icon" style={{ /* border: "1px solid orange"*/ }}>{ /*props.data.projId === "1" && <FaHome />  :*/ props.data.projId === "3" && <FaTrashAlt /> }</div>
                    </div>
               </div>
          </div>

     );
}

export default Project;


         {/* <table
               className='Nav-item'
               style={{ color: props.proj === props.data.projId ? "#DC3545" : "white" }}
               onClick={() => { props.setProj(props.data.projId) }}
          >
               <tr>
                    <td className=' '>
                         {props.data.projName + " "}
                    </td>
                    <td  >
                         <span className=' '>{props.data.projId !== "3" && props.data.projTodos.length}</span>
                    </td>
                    <td className="Icon">
                         {props.data.projId === "1" ? <FaHome /> : props.data.projId === "3" ? <FaTrashAlt /> : null}
                    </td>

               </tr>

     </table> */}