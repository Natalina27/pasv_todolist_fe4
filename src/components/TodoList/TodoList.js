import React from 'react';
import {Button, Form, Input} from "antd";
import {EditOutlined, CheckCircleOutlined, DeleteOutlined} from '@ant-design/icons';

import s from './TodoList.module.css';

export const TodoList = ({todo}) => {
    return (
        <Form className={s.form}>
            <Input placeholder= {todo.todo}  className={s.todolist}/>
            <Button className={s.editButton}>
                <EditOutlined />
            </Button>
            <Button className={s.editButton}>
                <CheckCircleOutlined />
            </Button>
            <Button className={s.editButton}>
                <DeleteOutlined />
            </Button>


        </Form>
    );
};

