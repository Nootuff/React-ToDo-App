import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="#home" style={{color: "white", fontSize: "2.5rem" }}>&lt;react-Todo /&gt;</Navbar.Brand> {/*.Brand seems tp be some kind of hyperlink, may want to change it for somehting else.*/}
      
       </Navbar>
    )
}

export default Header;