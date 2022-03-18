import { BsPlusCircle } from "react-icons/bs";
import '../../styles/index.css';

function NewProjectButton({ handleFormShow }) {
    return (
        <h5 className="white-text text-center mt-4 cursor-pointer"
            onClick={() => {handleFormShow()}}
        >
            Create new Project <BsPlusCircle className="Icon" />
        </h5>
    )
}

export default NewProjectButton;