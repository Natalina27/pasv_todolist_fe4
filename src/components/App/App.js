import React, {useState} from 'react';
import {TodoList} from '../TodoList/TodoList';
import { v4 as uuid } from 'uuid';

import s from  './App.module.css';
import {TodoForm} from "../TodoForm/TodoForm";

export const App = () => {
    const initialState = [
        {
            todo: 'Watch the last lesson\'s record',
            isDone: false,
            id: uuid()
        }, {
            todo: 'Make homework',
            isDone: false,
            id: uuid()
        }, {
            todo: 'Read the documentation',
            isDone: false,
            id: uuid()
        }
    ];
    const [list, setList] = useState(initialState);

    const handleAddNewTask = value => {
        const newList =[...list, {
            todo: value,
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


    const todoListJSX = list.map((el, i)=>(
        <TodoList key={el.id}
                  id={el.id}
                  idx={i}
                  isDone={el.isDone}
                  todo={el}
                  doneTask={handleDoneTask}
                  deleteTask={handleDeleteTask}
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
