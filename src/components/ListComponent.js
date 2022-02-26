

import Todo from "./Todo";
import EditProjectForm from "./Forms/EditProjectForm";
import Button from 'react-bootstrap/Button';


function ListComponent(props) {


    const list = props.viewedProject.projTodos.slice(0).reverse().map((num) =>
        <Todo
            key={num.id}
            todos={num}
            deleteTodo={props.deleteTodo}
            editTodo={props.editTodo}
            toggleComplete={props.toggleComplete}
            proj={props.proj}
        />
    );

    return (
        <div>
            <h1>{props.viewedProject.projName}</h1>
            <h2>{props.viewedProject.projNotes}</h2>
            {props.viewedProject.projId.length > 1 ? //Option to edit ot delete project only available on user created projects.
                <div>
                    <EditProjectForm
                        viewedProject={props.viewedProject}
                        editProject={props.editProject}
                        proj={props.proj}
                    />
                    <Button
                        variant="danger"
                        onClick={() => {
                            props.deleteProject(props.viewedProject.projId);
                            props.setProj("1")
                        }}
                    >
                        Delete this whole project!
                    </Button>
                </div>
                :
                null}
            <ul className="List">
                {list}
            </ul>
        </div>
    );
}

export default ListComponent;