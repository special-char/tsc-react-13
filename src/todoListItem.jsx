import React from 'react';
import Button from './components/button';
import { TodoConsumer } from './context/todoContext';

const TodoListItem = ({ item }) => {
    return (
        <TodoConsumer>
            {({ updateTodo, deleteTodo }) => (
                <li className="flex items-center gap-4 p-2">
                    <input
                        type="checkbox"
                        checked={item.isDone}
                        onChange={() => updateTodo(item.id)}
                    />
                    <p
                        className="flex-1"
                        style={{
                            textDecoration: item.isDone
                                ? 'line-through'
                                : 'none',
                        }}
                    >
                        {item.todoText}
                    </p>
                    <Button onClick={() => deleteTodo(item.id)}>Delete</Button>
                </li>
            )}
        </TodoConsumer>
    );
};

export default TodoListItem;
