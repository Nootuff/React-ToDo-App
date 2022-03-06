import React, { useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Project from "../ListItems/Project";

import Button from 'react-bootstrap/Button';
import { FaBars } from "react-icons/fa";

function Header({setOpenNav, openNav, proj, setProj, data}) {

    return (
        <Navbar className="navbar fixed-top navbar-light bg-dark" style={{height: "80px" }}>
            <Navbar.Brand href="#home" style={{ color: "white", fontSize: "2.5rem" }}>&lt;react-Todo /&gt;</Navbar.Brand> {/*.Brand seems tp be some kind of hyperlink, may want to change it for somehting else.*/}
            <div className="text-center" style={{ width: "100%", border: "1px solid yellow", paddingTop: "25px"}}>

            <div class="d-flex flex-row bd-highlight mb-3 d-block d-sm-none">
  <div className="p-2 bd-highlight"> <Project
        setProj={setProj}
        proj={proj}
        data={data[0]}
      /></div>
  <div className="p-2 bd-highlight"><Project
        setProj={setProj}
        proj={proj}
        data={data[2]}
      /></div>
  <div className="ms-auto p-2 bd-highlight "><Button
          /*className="d-block d-sm-none" */
            onClick={() => setOpenNav(!openNav)}
            //aria-controls="example-collapse-text"
            aria-expanded={openNav}
            className="text-center "
          >
          
            <FaBars />
         
          </Button></div>
</div>

           
     
      
    
            
        
          </div>
{/*
<div style={{ border: "1px solid red", width: "100%"}}> 
            <DropdownButton id="dropdown-basic-button" title="" className="d-block d-sm-none float-end"   drop="start">
                <Dropdown.Item >
                    test
                </Dropdown.Item>
                <Dropdown.Item >
                    test
                </Dropdown.Item>
                <Dropdown.Item >
                    test
                </Dropdown.Item>
                {/*
{ props.projects.slice(3).reverse().map((num) =>
<Dropdown.Item 
onClick={() => { props.setProj(num.projId) }}
>
{num.projName + " " + num.projTodos.length}
</Dropdown.Item>
)}

            </DropdownButton>

            </div>
            */}
        </Navbar>
    )
}

export default Header;