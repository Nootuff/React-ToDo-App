import Button from 'react-bootstrap/Button';

function DeleteComplete({proj, deleteComplete}) {
    return (
       <Button 
       variant="danger"
       onClick={() => {deleteComplete(proj);}} 
       >
           Clear All Complete Todos</Button> 
    )
}

export default DeleteComplete;