import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import HeaderNav from "./HeaderNav";
import HeaderDropdown from "./HeaderDropdown";
import "../../styles/Partials/Header.css";
import "../../styles/index.css";

function Header({ proj, setProj, projects, handleFormShow }) {

  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="d-block d-sm-none"> {/*This is the container, maybe header nav can be its own compoennt */}
      <HeaderNav
        setProj={setProj}
        openNav={openNav}
        setOpenNav={setOpenNav}
      />
      <div>
        <Collapse in={openNav}>
          <div>
            <HeaderDropdown
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