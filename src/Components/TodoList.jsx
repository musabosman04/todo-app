import React, { Component } from 'react'
import './TodoList.css'
export default class TodoList extends Component {


    constructor() {
        super()
        this.state = {
            tasks: [],
            currentTask: {
                title: ""
            }
        }
    }

    taskHandle = (e) => {
        this.setState({
            currentTask: {
                title: e.target.value
            }
        });
    }

    addTask = (e) => {
        e.preventDefault();
        
        if(this.state.currentTask.title) {
            let allTask = this.state.tasks
            allTask.push(this.state.currentTask)

            this.setState({
                tasks: allTask,
                currentTask: {
                    title: ''
                }
            })
        } else {
            alert("Input can not be null.")
        }
    }

    deleteTask = (i) => {
        let allTask = this.state.tasks;
        allTask.splice(i, 1);

        this.setState({ tasks: allTask })
    }

    render() {
        return (
            <div>

                <div className="todo-wrapper py-5">
                    <div className="todo-header">
                        <h2>My To Do List</h2>
                        <form onSubmit={this.addTask}>
                            <div className="input-group">
                                <input type="text" className="form-control" onChange={this.taskHandle} placeholder="Title..." value={this.state.currentTask.title} />
                                <button className="btn btn-success px-4"> Add </button>
                            </div>
                        </form>
                    </div>
                    <ul className="list-group">

                        {

                            this.state.tasks.map((task, i) => {
                                return (
                                    <label key={i}>
                                        <li className="list-group-item">
                                            <input type="checkbox" className="form-check-input" />
                                            <span>{task.title}</span>
                                            <button type="button" className="btn-close ms-auto" onClick={this.deleteTask.bind(this, i)}></button>
                                        </li>
                                    </label>
                                )
                            })
                        }
                    </ul>
                </div>

            </div>
        )
    }
}
