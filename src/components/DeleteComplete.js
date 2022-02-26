import Button from 'react-bootstrap/Button';

function DeleteComplete(props) {
    return (
       <Button 
       variant="danger"
       onClick={() => {props.deleteComplete(props.proj); /*props.multShrink()*/}} 
       >
           Clear All Complete</Button> 
    )
}

export default DeleteComplete;