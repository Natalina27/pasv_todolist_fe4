import React, {useState} from 'react';
import {TodoList} from '../TodoList/TodoList';
import { v4 as uuid } from 'uuid';

import s from  './App.module.css';
import {TodoForm} from "../TodoForm/TodoForm";

export const App = () => {

    const initialState = [
        {
            title: 'Watch the last lesson\'s record',
            isDone: false,
            isEdit: false,
            id: uuid()
        }, {
            title: 'Make homework',
            isDone: false,
            isEdit: false,
            id: uuid()
        }, {
            title: 'Read the documentation',
            isDone: false,
            isEdit: false,
            id: uuid()
        }
    ];
    const [list, setList] = useState(initialState);


    const handleAddNewTask = value => {
        const newList =[...list, {
            title: value,
            isDone: false,
            id: uuid()
        }];
        setList(newList);
    }

    const handleDoneTask = id => {
        const idx = list.findIndex( el => el.id === id);
        const newList =[...list];
        newList[idx].isDone = !newList[idx].isDone;
        setList(newList);
    }

    const handleDeleteTask = id => {
        const idx = list.findIndex( el => el.id === id);
        const newList =[
            ...list.slice(0,idx),
            ...list.slice(idx+1)
        ];
        setList(newList);
    }

    const taskDown = (idx) => {
        const newTask = [...list];
        newTask.splice(idx + 1, 0, newTask.splice(idx, 1)[0]);
        setList(newTask);
    }

    const taskUp = (idx) => {
        if(idx !== 0) {
            const newTask = [...list];
            newTask.splice(idx - 1, 0, newTask.splice(idx, 1)[0]);
            setList(newTask);
        }
    }

    const todoListJSX = list.map((el, i)=>(
        <TodoList key={el.id}
                  id={el.id}
                  idx={i}
                  isDone={el.isDone}
                  isEdit={el.isEdit}
                  title={el.title}
                  doneTask={handleDoneTask}
                  deleteTask={handleDeleteTask}
                  taskDown={taskDown}
                  taskUp={taskUp}
        />
    ));

  return (
    <div className={s.app}>
        <div className={s.todo}>
            <h1 className={s.title}>MY TO-DO LIST</h1>
            {todoListJSX}
            <TodoForm addNewTask={handleAddNewTask}/>
        </div>
    </div>
  );
}
