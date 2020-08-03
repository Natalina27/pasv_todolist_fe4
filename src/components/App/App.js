import React, {useState} from 'react';
import {TodoList} from '../TodoList/TodoList';
import { v4 as uuid } from 'uuidv4';

import s from  './App.module.css';

function App() {
    const initialState = [
        {
            todo: 'Watch the last lesson\'s record',
            isDone: false,
            id: uuid
        }, {
            todo: 'Make homework',
            isDone: false,
            id: uuid
        }, {
            todo: 'Read the documentation',
            isDone: false,
            id: uuid
        }
    ];
    const [todos, setTodos] = useState(initialState);

    const todoListJSX = todos.map((el, i)=>(
        <TodoList key={el.id} idx={i} todo={el} />
    ));

  return (
    <div className={s.App}>
      <h1>My TO-DO List</h1>
        {todoListJSX}
    </div>
  );
}

export default App;
