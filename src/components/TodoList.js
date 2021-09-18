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
        this.edit = this.edit.bind(this);
    }

    create(lamp) {
        this.setState({
            toDos: [...this.state.toDos, lamp]
        })
    }

    remove(passedId) {
        this.setState({
            toDos: this.state.toDos.filter(toDo => toDo.id !== passedId)
        });
    }

    edit(newEdit, editId) {
        let stateHolder = [...this.state.toDos];
        for (let i = 0; i < stateHolder.length; i++) {
            if (stateHolder[i].id === editId) {
                stateHolder[i].taskBody = newEdit;
            }
        }
        this.setState({
            toDos: stateHolder
        })
    }

    render() {
        const toDoList = this.state.toDos.map(value =>
            <Todo
                key={value.id}
                id={value.id}
                body={value.taskBody}
                destroyerFunc={this.remove}
                changeFunc={this.change}
                editFunc={this.edit}
            />
        )
        return (
            <div className="">
                <NewTodoForm creatorFunc={this.create} />
                {toDoList}
            </div>
        )
    }
}

export default TodoList;
