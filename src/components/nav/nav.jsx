import React from 'react';
import { Layout } from 'antd';
import TaskList from '../../containers/taskList/taskList'

import 'antd/dist/antd.css';

const { Sider } = Layout;

const Nav = () => {
    return ( 
        <Sider className="mainSider" style={{ marginTop: '10vh', overflow: 'auto', position: 'fixed', height: '90vh' }}>
            <TaskList />
        </Sider>
    );
};

export default Nav;