import ProjectList from "../ListComponents/ProjectList";

function Nav(props) {

    return (
        <div className="sidebar">
          <h4 className='Nav-item'> &lt;react-Todo /&gt;</h4>
           <ProjectList
                    projects={props.projects}
                    proj={props.proj}
                    setProj={props.setProj}
                />
                <br />
        </div>
    )
    }
    export default Nav;