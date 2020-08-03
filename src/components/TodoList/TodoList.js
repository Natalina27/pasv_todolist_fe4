import React, {useState} from 'react';
import {Button, Form, Input} from "antd";
import {EditOutlined, CheckCircleOutlined, DeleteOutlined, ArrowUpOutlined, ArrowDownOutlined} from '@ant-design/icons';
import clx from 'classnames';

import s from './TodoList.module.css';

export const TodoList = (
    {title, id, isDone, isEdit, doneTask, deleteTask, taskDown, taskUp, idx}) => {

    const [edit, setEdit] = useState(isEdit);
    const [changedTitle, setChangedTitle] = useState(title);

    const onEdit = () =>{
        setChangedTitle(edit ? 'write new task...' : changedTitle);
        setEdit(!edit);
    };

    const inputHandled = (e) => setChangedTitle(e.target.value);

    const style = clx({
        [s.form]: true,
        [s.done]: isDone
    });

    return (
        <Form className={style}>
            <Input value={changedTitle}
                   className={s.todolist}
                   onChange={inputHandled}
            />
            <Button className={s.editButton}
                    onClick={onEdit}
            >
                <EditOutlined/>
            </Button>
            <Button className={s.editButton} onClick={() => doneTask(id)}>
                <CheckCircleOutlined/>
            </Button>
            <Button className={s.editButton} onClick={() => deleteTask(id)}>
                <DeleteOutlined/>
            </Button>
            <Button className={s.editButton} onClick={()=>taskUp(idx)}>
                <ArrowUpOutlined />
            </Button>
            <Button className={s.editButton} onClick={()=>taskDown(idx)}>
                <ArrowDownOutlined />
            </Button>
        </Form>
    )

};
