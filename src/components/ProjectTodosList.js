import Project from "./Project";
import Todo from "./Todo";

function ProjectTodosList(props) {

    //const list 

    const list = props.todos.projTodos.slice(0).reverse().map((num) =>
        <Todo
            home={props.home}
            key={num.id}
            todos={num}
            deleteProjectTodo={props.deleteProjectTodo}
            editProjectTodo={props.editProjectTodo}
            completeProjectTodo={props.completeProjectTodo}
            view={props.view}
        />
    );

    return (
        <div>
            <b> {props.todos.projName} todos</b>
            <br />
            {props.todos.projNotes}
            <br />
            <ul className="List">
            {list}
            </ul>
        </div>
    );
}

export default ProjectTodosList;