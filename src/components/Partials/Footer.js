import { FaRegCopyright } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import '../../styles/Partials/Footer.css';
import '../../styles/index.css';

function Footer() {
    return (
        <nav className="Footer background-purple" id="footerNav">
            <div className="d-flex gap-4 justify-content-center">
                <div>
                    <p className="border-end text-wrap pe-4 text-white"> <FaRegCopyright className="Icon" /> Adam Walker 2022</p>
                </div>
                <div>
                    <a className="Footer-item link-light text-wrap text-decoration-none" rel="noreferrer" href="https://nootuff.github.io/" target="_blank">My portfolio</a>
                </div>
                <div>
                    <a className="Footer-item link-light text-decoration-none ps-4 border-start" href="https://github.com/Nootuff/React-ToDo-App" rel="noreferrer" target="_blank">View site code on GitHub <FaGithub className="Icon" /></a>
                </div>
            </div>
        </nav>
    )
}

export default Footer;