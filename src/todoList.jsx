import React, { memo } from 'react';
import Button from './components/button';
import TodoListItem from './todoListItem';
import { TodoConsumer } from './context/todoContext';

const TodoList = () => {
    console.log('TodoList render');

    return (
        <TodoConsumer>
            {({ todoList }) => (
                <ul className="w-full flex-1 scroll-auto">
                    {todoList.map((item) => {
                        return <TodoListItem key={item.id} item={item} />;
                    })}
                </ul>
            )}
        </TodoConsumer>
    );
};

export default TodoList;
