import Project from "../ListItems/Project";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';



function ProjectList(props) {

  //Just a list of buttons to change projects

  const list = props.projects.slice(3).reverse().map((num) =>
  
      <Project
        key={num.projId}
        setProj={props.setProj}
        proj={props.proj}
        data={num}
      />
    
  );

  return (
      <div>       
        {list}
      </div>
  );
}

export default ProjectList;