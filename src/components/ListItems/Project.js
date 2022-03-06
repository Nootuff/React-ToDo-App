import Button from 'react-bootstrap/Button';
import { FaTrashAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";




function Project(props) {

     return (
          <table
               className='Nav-item'
               style={{ color: props.proj === props.data.projId ? "red" : "black", border: "1px solid white", padding: "0" }}
               onClick={() => { props.setProj(props.data.projId) }}
          >
               <tr>
                    <td className='d-none d-sm-block'>
                         {props.data.projName + " "}
                    </td>
                    <td  >
                         <span className='d-none d-sm-block'>{props.data.projId !== "3" && props.data.projTodos.length}</span>
                    </td>
                    <td id="Nav-icon">
                         {props.data.projId === "1" ? <FaHome /> : props.data.projId === "3" ? <FaTrashAlt /> : null}
                    </td>

               </tr>

          </table>
     );
}

export default Project;