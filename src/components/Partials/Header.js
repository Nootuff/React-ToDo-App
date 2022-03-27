import React, { useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Collapse from "react-bootstrap/Collapse";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Dropdown from "./Dropdown";
import "../../styles/Partials/Header.css";
import "../../styles/index.css";

function Header({ /*openNav, setOpenNav,*/ proj, setProj, projects, handleFormShow }) {

  const [openNav, setOpenNav] = useState(false);
  
  return (
    <div className="d-block d-sm-none"> {/*This is the container, maybe header nav can be its own compoennt */}
    <Navbar className="Header navbar  background-purple d-flex">
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
    <div>
    <Collapse in={openNav}>
          <div>
            <Dropdown
              projects={projects}
              proj={proj}
              setProj={setProj}
              handleFormShow={handleFormShow}
            />
          </div>
        </Collapse>
    </div>
    </div>
  )
}

export default Header;