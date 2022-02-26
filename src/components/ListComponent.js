import Todo from "./Todo";
import EditProjectForm from "./Forms/EditProjectForm";

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
            <h2>{props.viewedProject.projNotes }</h2>
           { props.viewedProject.projId.length > 1 ? <EditProjectForm /> : null }
        <ul className="List">
            {list}
        </ul>
        </div>
    );
}

export default ListComponent;