import Button from 'react-bootstrap/Button';

function DeleteComplete({proj, deleteComplete}) {
    return (
       <Button 
       className="mb-2"
       variant="danger"
       onClick={() => {deleteComplete(proj);}} 
       >
           Clear All Complete Todos</Button> 
    )
}

export default DeleteComplete;