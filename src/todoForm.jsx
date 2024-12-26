import React, { forwardRef, memo } from 'react';
import Input from './components/input';
import Button from './components/button';

const TodoForm = forwardRef(({ createTodo }, ref) => {
    console.log('TodoFooter render');

    return (
        <form
            onSubmit={createTodo}
            className="flex w-full max-w-screen-sm px-4"
        >
            <Input
                id="todo-text"
                label="Todo Text"
                placeholder="Enter your todo here..."
                variant="withoutLabel"
                className="rounded-r-none"
                ref={ref}
                required
            />
            <Button className="rounded-l-none">Create Todo</Button>
        </form>
    );
});

TodoForm.displayName = 'TodoForm';

export default TodoForm;
