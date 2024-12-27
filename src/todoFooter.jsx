import React, { memo } from 'react';
import Button from './components/button';
import { TodoConsumer } from './context/todoContext';

const TodoFooter = () => {
    return (
        <TodoConsumer>
            {({ loadTodo }) => (
                <div className="flex w-full">
                    <Button
                        className="flex-1 rounded-none"
                        onClick={() => loadTodo('all')}
                    >
                        All
                    </Button>
                    <Button
                        className="flex-1 rounded-none"
                        onClick={() => loadTodo('pending')}
                    >
                        Pending
                    </Button>
                    <Button
                        className="flex-1 rounded-none"
                        onClick={() => loadTodo('completed')}
                    >
                        Completed
                    </Button>
                </div>
            )}
        </TodoConsumer>
    );
};

export default TodoFooter;
