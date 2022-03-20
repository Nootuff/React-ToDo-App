import Todo from "../ListItems/Todo";

function TodoList(props) {
    const list = props.viewedProject.projTodos.slice(0).reverse().map((num) =>
        <Todo
            key={num.id}
            todo={num}
            deleteTodo={props.deleteTodo}
            editTodo={props.editTodo}
            toggleComplete={props.toggleComplete}
            restore={props.restore}
            proj={props.proj}
        />
    );

    return (
        <div>
            <ul className="List pb-5">
                {list}
            </ul>
        </div>
    );
}

export default TodoList;