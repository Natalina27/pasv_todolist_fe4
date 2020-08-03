import React from 'react';
import {Button, Form, Input} from "antd";
import {EditOutlined, CheckCircleOutlined, DeleteOutlined} from '@ant-design/icons';
import clx from 'classnames';

import s from './TodoList.module.css';



export const TodoList = ({todo, id, isDone, doneTask, deleteTask}) => {
    const style = clx({
        [s.form]: true,
        [s.done]: isDone
    })
    return (
        <Form className={style}>
            <Input value= {todo.todo}  className={s.todolist}/>
            <Button className={s.editButton}>
                <EditOutlined />
            </Button>
            <Button className={s.editButton} onClick={()=>doneTask(id)}>
                <CheckCircleOutlined />
            </Button>
            <Button className={s.editButton} onClick={()=>deleteTask(id)}>
                <DeleteOutlined />
            </Button>
        </Form>
    );
};
