import React, { Component }from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import * as action from '../../actions/actionTypes';
import taskSelected from '../../actions/taskSelectedAction';
import './css/task.css'
import { Fragment } from 'react';


class Task extends Component {
    constructor(props) {
        super(props);
        this.name = this.props.task.name;
        this.id = this.props.task.id.toString().padStart(8, '0');
        this.owner = this.props.task.owner;
        
        this.selectTask = this.selectTask.bind(this);
        
    }

    selectTask() {
        this.props.taskSelected(this.id);
    } 

    render() { 
        return (
         <Fragment>
            Task
          </Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch, ownprops) => ({
    taskSelected : () => dispatch(taskSelected(ownprops.id))
});

export default connect(null, mapDispatchToProps)(Task);