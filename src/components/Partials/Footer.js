import { FaRegCopyright } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "../../styles/Partials/Footer.css";
import "../../styles/index.css";

function Footer() {
  return (
    <footer className="Footer background-purple">
        <table>
          <tbody>
            <tr>
              <td className="Footer-item text-white">
                <FaRegCopyright className="Icon"/> Adam Walker 2022
              </td>
              <td className="Footer-item">
                <a className="Footer-link link-light text-decoration-none" href="https://nootuff.github.io/" rel="noreferrer" target="_blank">My portfolio</a>
              </td>
              <td className="Footer-item">
                <a className="Footer-link link-light text-decoration-none" href="https://github.com/Nootuff/React-ToDo-App" rel="noreferrer" target="_blank">View site code on GitHub <FaGithub className="Icon" /></a>
              </td>
            </tr>
          </tbody>
        </table>
    </footer>
  )
}
export default Footer;