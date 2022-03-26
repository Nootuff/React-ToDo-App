import { BsPlusCircle } from "react-icons/bs";
import "../../styles/Controls/NewProjectButton.css";
import "../../styles/index.css";

function NewProjectButton({ handleFormShow }){
  return (
    <h5 className="NewProjectButton text-center mt-4 cursor-pointer"
      onClick={() => { handleFormShow() }}
    >
      Create new Project <span className="ps-2"><BsPlusCircle className="Icon" /></span>
    </h5>
  )
}

export default NewProjectButton;