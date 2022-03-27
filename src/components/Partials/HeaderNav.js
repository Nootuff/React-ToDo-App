import Navbar from 'react-bootstrap/Navbar';
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import "../../styles/Partials/HeaderNav.css";

function HeaderNav({ setProj, openNav, setOpenNav }) {
  return (
    <Navbar className="navbar background-purple d-flex">
      <div>
        <h1 className="HeaderNav-logo logo-text p-2 cursor-pointer"
          onClick={() => { setProj("1") }}
        >
          <span className="text-white">&lt;doThis </span><b><span className="text-danger">/</span></b><span className="text-white">&gt;</span>
        </h1>
      </div>
      <div className="HeaderNav-button p-2 ms-auto">
        <h4
          onClick={() => setOpenNav(!openNav)}
          aria-expanded={openNav}
          className="HeaderNav-button text-white"
        >
          <span className="HeaderNav-button-icon">
            {openNav ? <ImCross /> : <FaBars />}
          </span>
        </h4>
      </div>
    </Navbar>
  )
}

export default HeaderNav;