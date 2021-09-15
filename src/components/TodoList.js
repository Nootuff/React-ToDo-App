import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDos: [] //All created toDos will be stored in here. 
        };
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
    }

    create(newToDo) {
        this.setState({
            toDos: [...this.state.toDos, newToDo]
        })
      }

      remove(passedId) {
        this.setState({
          toDos: this.state.toDos.filter(toDo => toDo.id !== passedId)
        });
      }

    render() {
        const toDoList = this.state.toDos.map(value => 
            <Todo 
            key={value.id} 
            id={value.id} 
            body={value.taskBody}
            destroyerFunc={this.remove}
            />
        )
        return (
            <div className="">
                <h2>TodoList Component</h2>
                <NewTodoForm creatorFunc={this.create} />
               {toDoList}
            </div>
        )
    }
}

export default TodoList;
