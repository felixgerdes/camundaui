import React, { Component }from 'react';
import _ from 'loadsh'; 
import { connect } from 'react-redux'; 
import Task from  '../task/task';
import './css/taskList.css'                


class TaskList extends Component {
    constructor(props) {
        super(props);
        this.tasks = this.props.tasks;
    }
    render() { 
        return ( 
                <p>Tasklist</p>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}
 

export default connect(mapStateToProps)(TaskList);