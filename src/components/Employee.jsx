import React from 'react'
import './Employee.css';

import { Space, Table, Tag } from 'antd';
const columns = [
    {
        title: '员工姓名',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: '账号',
        dataIndex: 'username',
        key: 'username',
    },
    {
        title: '手机号',
        dataIndex: 'mobile',
        key: 'mobile',
    },
    {
        title: '账号状态',
        key: 'status',
        dataIndex: 'status'
    },
    {
        title: '操作',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];
const data = [
    // {
    //     key: '1',
    //     name: 'John Brown',
    //     age: 32,
    //     address: 'New York No. 1 Lake Park',
    //     tags: ['nice', 'developer'],
    // },
    // {
    //     key: '2',
    //     name: 'Jim Green',
    //     age: 42,
    //     address: 'London No. 1 Lake Park',
    //     tags: ['loser'],
    // },
    // {
    //     key: '3',
    //     name: 'Joe Black',
    //     age: 32,
    //     address: 'Sydney No. 1 Lake Park',
    //     tags: ['cool', 'teacher'],
    // },
];


export default function Employee() {
  return (
    <div id='emploee-container'>
          <Table columns={columns} dataSource={data} />
    </div>
  )
}
