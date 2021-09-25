import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import '../styles/ToDoList.css';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDos: [] //All created toDos will be stored in here. 
        };
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.removeComplete = this.removeComplete.bind(this);
        this.edit = this.edit.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }

    create(lamp) { //Lamp cloud be anything, just symbolizes the first passed argument.
        this.setState({
            toDos: [...this.state.toDos, lamp]
        })
    }

    remove(passedId) {
        this.setState({
            toDos: this.state.toDos.filter(toDo => toDo.id !== passedId)
        });
    }

    removeComplete() {
        let unCompleted = [];
        for (let i = 0; i < this.state.toDos.length; i++) {
            if (this.state.toDos[i].completed === false) {
                unCompleted.push(this.state.toDos[i])
            } 
        }
        let completed = document.querySelectorAll(".completed");
        for (let i = 0; i < completed.length; i++) {
            completed[i].classList.add("fade-animate");
        }
        setTimeout(function () {
            this.setState({
                toDos: unCompleted
            })
        }.bind(this), 500)
    }

    edit(data, editId) {
        let stateHolder = [...this.state.toDos]; //Holds everything currently in state.
        for (let i = 0; i < stateHolder.length; i++) { //Loop through everything in stateHolder.
            if (stateHolder[i].id === editId) { //If the id of the current object is the same as the id that is passed in...
                stateHolder[i].taskBody = data.editBody; //Update its body with the new body that was passed in.
                stateHolder[i].taskNotes = data.editNotes; 
                stateHolder[i].priority = data.editPriority; 
            }
        }
        this.setState({
            toDos: stateHolder //Set the toDos state to the updated stateHolder.
        })
    }

    toggleCompletion(completedId) {
        let stateHolder = [...this.state.toDos];
        for (let i = 0; i < stateHolder.length; i++) {
            if (stateHolder[i].id === completedId) {
                stateHolder[i].completed = !stateHolder[i].completed;
            }
        }
        this.setState({
            toDos: stateHolder
        })
    }

    render() {
        const allToDos = this.state.toDos.slice(0).reverse().map(value => //Runs map in reverse, newest ToDos displayed at top.
            <Todo
            data={value}
                key={value.id}
                //id={value.id}
                //body={value.taskBody}
                //notes={value.taskNotes}
                //completed={value.completed}
                destroyerFunc={this.remove}
                completeToggle={this.toggleCompletion}
                editFunc={this.edit}
            />
        )
        return (
            <div className="">
                <NewTodoForm creatorFunc={this.create} />
                <button onClick={this.removeComplete}>Delete all Complete</button>
                <ul>
                    {allToDos}
                </ul>
            </div>
        )
    }
}

export default ToDoList;
