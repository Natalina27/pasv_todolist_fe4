import React, {useState} from 'react';
import clx from 'classnames';
import {Button, Form, Input} from 'antd';
import {EditOutlined, CheckCircleOutlined, DeleteOutlined, ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

import s from './styles.module.css';

export const TodoItem = (
    {
        id,
        idx,
        title,
        isDone,
        isEdit,
        doneTask,
        deleteTask,
        taskDown,
        taskUp,
        taskEdit
    }
) => {

    const [edit, setEdit] = useState(isEdit);
    const [updateTodo, setUpdateTodo] = useState(title);

    const handleInput = (e) => setUpdateTodo(e.target.value);

    const handlerSaveButton = () => {
        taskEdit(id, updateTodo);
        setEdit(false);
    }

    const style = clx({
        [s.form]:true,
        [s.done]: isDone
    });

    return (
        <Form className={style}>
            {edit ? (
                    <div className={style}>
                        <Input value={updateTodo} className={s.todolist} onChange={handleInput}/>
                        <Button className={s.editButton} onClick={handlerSaveButton}>
                            Save
                        </Button>
                    </div>
                ) : (
                        <div className={style}>
                            <Input value={updateTodo} className={s.todolist} />
                            <Button className={s.editButton} onClick={() => setEdit(true)}>
                                <EditOutlined />
                            </Button>
                        </div>
                    )}
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
