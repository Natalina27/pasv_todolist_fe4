import React from 'react';
import {TodoItem} from "./TodoItem";

export const TodoList = (
    {list, doneTask, deleteTask, taskDown, taskUp, taskEdit}
    ) => {

    return (
        list.map((el, i)=>(
            <TodoItem key={el.id}
                      id={el.id}
                      idx={i}
                      todo={el}
                      isDone={el.isDone}
                      isEdit={el.isEdit}
                      title={el.title}
                      doneTask={doneTask}
                      deleteTask={deleteTask}
                      taskDown={taskDown}
                      taskUp={taskUp}
                      taskEdit={taskEdit}
            />
    ))
    )
};
