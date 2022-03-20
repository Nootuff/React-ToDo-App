import Button from 'react-bootstrap/Button';

function DeleteComplete({proj, deleteComplete}) {
    return (
       <Button 
       className="my-2"
       variant="danger"
       onClick={() => {deleteComplete(proj);}} 
       >
           Clear All Complete Todos</Button> 
    )
}

export default DeleteComplete;