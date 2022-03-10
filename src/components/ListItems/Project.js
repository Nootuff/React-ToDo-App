import Button from 'react-bootstrap/Button';
import { FaTrashAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import '../../styles/Project.css';
import '../../styles/index.css';


function Project(props) {

     return (
          <table
               className='Nav-item'
               style={{ color: props.proj === props.data.projId ? "#DC3545" : "white", /*border: "1px solid yellow"*/ }}
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

          </table>
     );
}

export default Project;