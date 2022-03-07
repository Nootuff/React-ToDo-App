import React, { useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Project from "../ListItems/Project";

import Button from 'react-bootstrap/Button';
import { FaBars } from "react-icons/fa";
import '../../styles/Header.css';

function Header({ setOpenNav, openNav, proj, setProj, data }) {

    return (
        <Navbar className="Header navbar fixed-top  d-block d-sm-none background-purple" >

            {/*
            <div class="d-flex"></div>

            <div className="text-center" style={{ width: "100%", border: "1px solid yellow" }}>

                <Navbar.Brand className="p-2 bd-highlight" style={{ color: "white", fontSize: "2.5rem" }}>
                    &lt; /&gt;
                </Navbar.Brand>

                <div  className="p-2" > 
                    <Project
                    setProj={setProj}
                    proj={proj}
                    data={data[0]}
                />
                </div>

                <div className="p-2" >
                    <Project
                    setProj={setProj}
                    proj={proj}
                    data={data[2]}
                />
                </div>

                <div className=" p-2 bd-highlight "><Button
                     
                    onClick={() => setOpenNav(!openNav)}
                    //aria-controls="example-collapse-text"
                    aria-expanded={openNav}
                    className="text-center "
                >

                    <FaBars />

                </Button></div>
    
 
            </div>
*/}




            <div class="d-flex" style={{border: "1px solid yellow" }} >
                <h2 className="p-2 white-text" style={{ fontSize: "1.5rem" }}>


                    &lt;react-Todo <span className="text-danger">/</span>&gt;
                </h2>


                <div className="p-2" >
                    <Project
                        setProj={setProj}
                        proj={proj}
                        data={data[0]}
                    />
                </div>

                <div className="p-2" >
                    <Project
                        setProj={setProj}
                        proj={proj}
                        data={data[2]}
                    />
                </div>

                <div className="p-2 ms-auto">  
                <Button
                    onClick={() => setOpenNav(!openNav)}
                    //aria-controls="example-collapse-text"
                    aria-expanded={openNav}
                >
                    <FaBars />
                </Button>
               
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