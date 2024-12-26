import React, { memo } from 'react';
import Button from './components/button';

const TodoListItem = ({ updateTodo, deleteTodoModal, item }) => {
    console.log('todolist item render');
    return (
        <li className="flex items-center gap-4 p-2">
            <input
                type="checkbox"
                checked={item.isDone}
                onChange={() => updateTodo(item.id)}
            />
            <p
                className="flex-1"
                style={{
                    textDecoration: item.isDone ? 'line-through' : 'none',
                }}
            >
                {item.todoText}
            </p>
            <Button onClick={() => deleteTodoModal(item.id)}>Delete</Button>
        </li>
    );
};

export default TodoListItem;
