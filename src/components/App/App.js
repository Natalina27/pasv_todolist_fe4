import React, {useState} from 'react';
import {TodoList} from '../TodoList/TodoList';
import { v4 as uuid } from 'uuid';

import s from  './App.module.css';
import {TodoForm} from "../TodoForm/TodoForm";

function App() {
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

    const todoListJSX = list.map((el, i)=>(
        <TodoList key={el.id} idx={i} todo={el} />
    ));

    const handleAddNewTask = value => {
        const newList =[...list, {
            todo: value,
            isDone: false,
            id: uuid()
        }];
        setList(newList);
    }

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

export default App;
