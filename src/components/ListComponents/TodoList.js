import Todo from "../ListItems/Todo";

function TodoList({ deleteTodo, editTodo, toggleComplete, restore, proj, viewedProject }) {

  const list = viewedProject.projTodos.slice(0).reverse().map((num) =>
    <Todo
      key={num.id}
      todo={num}
      deleteTodo={deleteTodo}
      editTodo={editTodo}
      toggleComplete={toggleComplete}
      restore={restore}
      proj={proj}
    />
  );

  return (
    <ul className="List pb-5">
      {list}
    </ul>
  );
}

export default TodoList;