import Todo from "./Todo";

function ListComponent(props) {
    
    const list = props.todos.home.slice(0).reverse().map((num) =>
        <Todo
            key={num.id}
            todos={num}
            deleteFunc={props.deleteFunc}
            editFunc={props.editFunc}
            toggleComplete={props.toggleComplete}
        />
    );

    return (
            <ul className="List">
                {list}
            </ul>
    );
}

export default ListComponent;