import React, { Component }from 'react';
import _ from 'loadsh'; 
import { connect } from 'react-redux'; 
import { Menu } from 'antd'; 
import 'antd/dist/antd.css';
import Task from  '../task/task';
import './css/taskList.css'                


class TaskList extends Component {
    constructor(props) {
        super(props);
        this.tasks = this.props.tasks;
    }
    render() { 
        return ( 
                <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="vertical"
                theme={'dark'}
            >
                {this.tasks.map(function(task, i) {
                    return <Task key={task.id} task={task} />
                })}
            </Menu>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}
 

export default connect(mapStateToProps)(TaskList);