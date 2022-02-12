import Button from 'react-bootstrap/Button';

function DeleteComplete(props) {
    return (
       <Button 
       variant="danger"
       onClick={() => {props.deleteComplete()}} 
       >
           Delete All Complete</Button> 
    )
}

export default DeleteComplete;