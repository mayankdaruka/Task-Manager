import React from 'react';
import './Container1.css';
import { Link } from 'react-router-dom';

class Container1 extends React.Component {
    render() {
        return (
            <div>
                 <style> {"body { background-image: url('notewood.jpg'); background-repeat: no-repeat; background-size: cover;}"} </style>
                 <div className = "Cont1"> 
                    <br /> <br /> <br /> <br /> <br /> <br />
                    Master Tasker
                </div>
                <br />
                <div style = {{'padding-left': 560 + 'px', 'padding-right': 470 + 'px'}}>
                A task manager that makes sure you remember all the tasks that you need to do on a daily basis!
                Simply enter the task, the date it needs to be completed by, and the importance of the task. The 
                app will take care of the rest by sorting the tasks in order of urgency that they need to be completed.
                </div>
                <br />
                <div style = {{alignItems: 'center', justifyContent: 'center'}}>
                <Link to = '/tasks'>
                <div className = "buttonClass"
                    style={{
                        'paddingLeft': 600 + 'px'
                    }}>
                    <button style = {{'padding': 10 + 'px', 'backgroundColor': '#97BAF5', 'fontSize': 16 + 'px'}}> View Tasks! </button>
                </div>
                </Link>
                <Link to = '/notes'>
                <div
                    style={{
                        'paddingLeft': 600 + 'px'
                    }}>
                    <button style = {{'padding': 10 + 'px', 'backgroundColor': '#97BAF5', 'fontSize': 16 + 'px'}}> View Notes! </button>
                </div>
                </Link>
            </div>
          </div>
        )
    }
}

export default Container1;