import React from 'react';
import { Link } from 'react-router-dom';
import {
    Card, ListGroup
  } from 'react-bootstrap';


const {
    Stitch,
    RemoteMongoClient,
    AnonymousCredential
} = require('mongodb-stitch-browser-sdk');


class Container2 extends React.Component {

    constructor(props) {
        super(props);
        this.db = ''
        this.client = Stitch.initializeDefaultAppClient('taskmanager-behdg');
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this)
        this.handleChangeImportance = this.handleChangeImportance.bind(this)
        this.handleChangeTask = this.handleChangeTask.bind(this)
        this.removeElement = this.removeElement.bind(this)
        this.handleTasks = this.handleTasks.bind(this)
        this.state = {
            task1: '',
            importance1: '',
            date1: '',
            todos: [],
            array:[]
        }
    }

    
    componentDidMount() {
        this.db = this.client.getServiceClient(RemoteMongoClient.factory, 'taskManagerCluster0').db('todos');

        this.client.auth.loginWithCredential(new AnonymousCredential())
        .then(this.displayTodos)
        .catch(err => {
            console.log("well smth is wrong")
            console.error(err)
        });
    }

    handleChangeTask = (event) => {
        this.setState({task1: event.target.value});
    }

    handleChangeImportance = (event) => {
        if (event.target.value == 1 || event.target.value == 2) {
            this.setState({importance1: 'not very important. '});
        } else if (event.target.value == 3 || event.target.value == 4) {
            this.setState({importance1: 'important. '});
        } else {
            this.setState({importance1: 'very important. '});
        }
    }

    handleChangeDate = (event) => {
        this.setState({date1: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault()  
        console.log("does this even work")
        const { task1, importance1, date1 } = this.state;
        const overall_string = task1 + ". This task is " + importance1 + "MUST BE FINISHED BY " + date1 + ".";
        console.log(overall_string)
        this.db
        .collection("item")
        .insertOne({
            owner_id: this.client.auth.user.id,
            item: overall_string
        })
        .then(this.displayTodos).catch(console.error);
    }

    displayTodos = () => {
        // query the remote DB and update the component state
        this.db
          .collection("item")
          .find({}, { limit: 1000 })
          .asArray()
          .then(todos => {
            this.setState({todos});
          });
    }
    
    handleTasks = () => (
            <ul id = "listView">
            {this.state.todos.map((todo) => {
                    return <li key = {todo.item}> 
                    <Card style = {{'paddingLeft': 10 + 'px', 'paddingRight': 400 + 'px', 'backgroundColor': 'rgba(255,255,255,0.5)', 'fontFamily': 'Ink Free'}}>
                    <Card.Body>
                        <Card.Title> <b> TASK </b> </Card.Title>
                        {todo.item}
                        <br />
                        <button onClick = {() => this.removeElement(todo.item)} style = {{padding: 5 + 'px', backgroundColor: '#F2B057', fontSize: 12 + 'px', fontFamily: 'Ink Free'}}> Remove Task </button>
                    </Card.Body>
                    </Card>
                  </li>;
            })}
            </ul>
        )       

    removeElement = (task) => {
        this.db
        .collection("item")
        .deleteOne({item: task})
        .then(this.displayTodos).catch(console.error)
    }

    render() {
        return (
            <div>                   
                <div style = {{'paddingLeft': 10 + 'px'}}>
                <br /> <br />
                </div> 
                <style> {"body { background-image: url('utnotepad2.jpg'); background-repeat: no-repeat; background-size: cover;}"} </style>
                <div>
                    <form onSubmit = {this.handleSubmit}>
                        <label style = {{'fontSize': 20 + 'px', 'paddingLeft': 395 + 'px', 'paddingRight': 178 + 'px', fontFamily: 'Ink Free'}}> Task: </label>
                        <input style = {{padding: 5 + 'px', width: 200 + 'px'}} id = 'task' ref = 'someName1' onChange = {this.handleChangeTask} type = 'text' placeholder = 'Enter task'/>
                        <br />
                        <label style = {{'fontSize': 20 + 'px', 'paddingLeft': 395 + 'px', 'paddingRight': 38 + 'px', fontFamily: 'Ink Free'}}> Deadline (Date/Time): </label>
                        <input style = {{padding: 5 + 'px', width: 200 + 'px'}} id = 'name' ref = 'someName2' type = 'text' onChange = {this.handleChangeDate} placeholder = 'Enter date/time'/>
                        <br />
                        <label style = {{'fontSize': 20 + 'px', 'paddingLeft': 395 + 'px', fontFamily: 'Ink Free'}}> Importance of Task (1-5): </label>
                        <input style = {{padding: 5 + 'px', width: 200 + 'px'}} id = 'imp' ref = 'someName3' type = 'text' onChange = {this.handleChangeImportance} placeholder = 'Enter #'/> 
                        <br /> <br/>

                        <div style = {{'paddingLeft': 545 + 'px'}}>
                            <button type = 'submit' value = "Submit" style = {{'padding': 10 + 'px', 'backgroundColor': '#F1A3F5', 'fontSize': 16 + 'px', fontFamily: 'Ink Free'}}> Submit </button>
                            <Link to = '/'>
                                <button style = {{'padding': 10 + 'px', 'backgroundColor': '#55B695', 'fontSize': 16 + 'px', fontFamily: 'Ink Free'}}> Go Back </button>
                            </Link>
                        </div>
                        {this.handleTasks()}       
                    </form>
                </div>
            </div>
        )
    }
}

export default Container2;