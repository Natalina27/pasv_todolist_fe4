import React, {useState} from 'react';
import { Form, Input, Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

import s from './TodoForm.module.css';

export const TodoForm = ({addNewTask}) => {
    const [value, setValue] = useState('');
    const handleSubmit = ( e ) => {
        e.preventDefault();
        if(!value) return;
        addNewTask(value);
        setValue('');
    }
    return (
            <Form onSubmitCapture={handleSubmit}>
                <Input placeholder='Add new task...'
                       className={s.input}
                       value={value}
                       onChange={e => setValue(e.target.value)}
                />
                <Button className={s.addButton} onClick={handleSubmit}>
                    <PlusCircleOutlined />
                </Button>
            </Form>
    );
};
