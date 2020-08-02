import React from 'react';
import {TodoList} from '../TodoList/TodoList';

import s from  './App.module.css';

function App() {
  return (
    <div className={s.App}>
      <h1>My TO-DO List</h1>
      <TodoList />
    </div>
  );
}

export default App;
