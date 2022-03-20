import Navbar from 'react-bootstrap/Navbar';
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import '../../styles/Partials/Header.css';
import '../../styles/index.css';

function Header({ setOpenNav, openNav, setProj }) {
    return (
        <Navbar className="Header navbar fixed-top  d-block d-sm-none background-purple" >
            <div className="d-flex">
                <h2 className="Header-logo p-2 cursor-pointer"
                    onClick={() => { setProj("1") }}
                >
                    &lt;react-Todo <span className="text-danger">/</span>&gt;
                </h2>
                <div className="Header-button p-2 ms-auto">
                    <h4
                        onClick={() => setOpenNav(!openNav)}
                        //aria-controls="example-collapse-text"
                        aria-expanded={openNav}
                        className="Header-button text-white"
                    >
                        <span className="Header-button-icon">
                            {openNav ? <ImCross /> : <FaBars />}
                        </span>
                    </h4>
                </div>
            </div>
        </Navbar>
    )
}

export default Header;