import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="#home" style={{color: "white", fontSize: "2.5rem" }}>&lt;react-Todo /&gt;</Navbar.Brand>
      
       </Navbar>
    )
}

export default Header;