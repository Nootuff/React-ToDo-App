import '../styles/Footer.css';

function Footer() {
    return (
        <nav className="Footer" id="footerNav">
            <table id="footerTable" >
                <tbody>
                    <tr>
                        <td className="footerItem">
                            <p> C Adam Walker 2022</p>
                        </td>
                        <td className="footerItem">
                            <a href="https://nootuff.github.io/" target="_blank">My portfolio</a>
                        </td>
                        <td className="footerItem">
                            <p><a href="https://github.com/Nootuff/React-Workout-App" target="_blank">View site code on GitHub </a></p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </nav>
    )
}

export default Footer;