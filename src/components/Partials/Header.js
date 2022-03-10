import React, { useState } from "react";
import Navbar from 'react-bootstrap/Navbar';


import Button from 'react-bootstrap/Button';
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import '../../styles/Header.css';
import '../../styles/index.css';

function Header({ setOpenNav, openNav, setProj }) {

    return (
        <Navbar className="Header navbar fixed-top  d-block d-sm-none" >

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




            <div class="d-flex" /*style={{ border: "1px solid yellow" }}*/ >
                <h2 className="Header-logo p-2 white-text"
                    onClick={() => { setProj("1") }}
                >
                    &lt;react-Todo <span className="text-danger">/</span>&gt;
                </h2>

                {/*
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
*/}


                <div className="Header-button p-2 ms-auto">
                    <h4
                        onClick={() => setOpenNav(!openNav)}
                        //aria-controls="example-collapse-text"
                        aria-expanded={openNav}
                        className="Header-button white-text"
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