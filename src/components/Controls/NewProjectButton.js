import { BsPlusCircle } from "react-icons/bs";

function NewProjectButton({ handleFormShow }) {
    return (
        <h5 className="text-center mt-4 cursor-pointer text-white"
            onClick={() => { handleFormShow() }}
        >
            Create new Project <BsPlusCircle className="Icon" />
        </h5>
    )
}

export default NewProjectButton;