import React, { memo } from 'react';
import Button from './components/button';
import TodoListItem from './todoListItem';

const TodoList = ({ todoList, updateTodo, deleteTodoModal }) => {
    console.log('TodoList render');

    return (
        <ul className="w-full flex-1 scroll-auto">
            {todoList.map((item) => {
                return (
                    <TodoListItem
                        key={item.id}
                        item={item}
                        updateTodo={updateTodo}
                        deleteTodoModal={deleteTodoModal}
                    />
                );
            })}
        </ul>
    );
};

export default TodoList;
