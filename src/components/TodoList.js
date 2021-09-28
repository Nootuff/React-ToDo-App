import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import '../styles/ToDoList.css';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDos: JSON.parse(localStorage.getItem("data")) || [] //All created toDos will be stored in here, or an array of objects will be retreived from localStorage. 
        };
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.removeComplete = this.removeComplete.bind(this);
        this.edit = this.edit.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
       //this.onLoad = this.onLoad.bind(this);
    }

    create(data) { //Data could be anything, just symbolizes the first passed argument.
        let stateHolder = [...this.state.toDos, data]
        this.setState({
            toDos: stateHolder
        })
    window.localStorage.setItem('data', JSON.stringify(stateHolder));
    }

    /*
    onLoad() {
       // const retrievedData = localStorage.getItem('data')
        const showMe = JSON.parse(localStorage.getItem("data"));
        //console.log(showMe)
 
      // console.log(showMe)
       /*this.setState({
        toDos: [...showMe]
    })
    if(showMe !== null ){
        for (let i = 0; i < showMe.length; i++) {
            //allData.push(showMe[i])
            console.log(showMe[i])
            }
        }
    } 
*/

    remove(passedId) {
        let newState = this.state.toDos.filter(toDo => toDo.id !== passedId)  // Sets value to new array created from from all toDos where id does not = the id of the todo taht was passed to this function when the delete button was pushed in its component. 
        this.setState({
            toDos: newState
        });
        window.localStorage.setItem('data', JSON.stringify(newState));
    }

    removeComplete() { //Removes all tasks tagged with completed.
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
        window.localStorage.setItem('data', JSON.stringify(unCompleted));
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
        window.localStorage.setItem('data', JSON.stringify(stateHolder));
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
        window.localStorage.setItem('data', JSON.stringify(stateHolder));
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
            <div /*onLoad={this.onLoad()}*/ className="">
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
