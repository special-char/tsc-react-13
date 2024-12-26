import React, { memo } from 'react';
import Button from './components/button';

const TodoFooter = ({ loadTodoList }) => {
    console.log('TodoFooter render');
    return (
        <div className="flex w-full">
            <Button
                className="flex-1 rounded-none"
                onClick={() => loadTodoList('all')}
            >
                All
            </Button>
            <Button
                className="flex-1 rounded-none"
                onClick={() => loadTodoList('pending')}
            >
                Pending
            </Button>
            <Button
                className="flex-1 rounded-none"
                onClick={() => loadTodoList('completed')}
            >
                Completed
            </Button>
        </div>
    );
};

export default TodoFooter;
