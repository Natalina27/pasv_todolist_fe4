import React from 'react';
import { Form, Input, Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

import s from './TodoForm.module.css';

export const TodoForm = () => {
    return (
        <>
            <Form>
                <Input placeholder=""  className={s.input}/>
                <Button className={s.addButton}>
                    <PlusCircleOutlined />
                </Button>
            </Form>
        </>
    );
};
