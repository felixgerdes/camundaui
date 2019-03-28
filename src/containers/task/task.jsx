import React, { Component }from 'react';
import { connect } from 'react-redux';
import {Menu, Icon} from 'antd';
import 'antd/dist/antd.css';
import * as action from '../../actions/actionTypes';
import taskSelected from '../../actions/taskSelectedAction';
import './css/task.css'
import { Fragment } from 'react';

const SubMenu = Menu.SubMenu;

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
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigtion Two</span></span>}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
          </Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch, ownprops) => ({
    taskSelected : () => dispatch(taskSelected(ownprops.id))
});

export default connect(null, mapDispatchToProps)(Task);