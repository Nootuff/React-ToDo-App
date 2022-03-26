import Navbar from 'react-bootstrap/Navbar';
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import "../../styles/Partials/Header.css";
import "../../styles/index.css";

function Header({ setOpenNav, openNav, setProj }) {
  return (
    <Navbar className="Header navbar fixed-top d-block d-sm-none background-purple d-flex">
      <div>
        <h1 className="Header-logo logo-text p-2 cursor-pointer"
          onClick={() => { setProj("1") }}
        >
          <span className="text-white">&lt;doThis </span><b><span className="text-danger">/</span></b><span className="text-white">&gt;</span>
        </h1>
      </div>
      <div className="Header-button p-2 ms-auto">
        <h4
          onClick={() => setOpenNav(!openNav)}
          aria-expanded={openNav}
          className="Header-button text-white"
        >
          <span className="Header-button-icon">
            {openNav ? <ImCross /> : <FaBars />}
          </span>
        </h4>
      </div>
    </Navbar>
  )
}

export default Header;