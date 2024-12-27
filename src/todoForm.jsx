import React from 'react';
import Input from './components/input';
import Button from './components/button';
import { TodoConsumer } from './context/todoContext';

const TodoForm = () => {
    console.log('TodoFooter render');

    return (
        <TodoConsumer>
            {({ addTodo, todoInputRef }) => (
                <form
                    onSubmit={addTodo}
                    className="flex w-full max-w-screen-sm px-4"
                >
                    <Input
                        id="todo-text"
                        label="Todo Text"
                        placeholder="Enter your todo here..."
                        variant="withoutLabel"
                        className="rounded-r-none"
                        ref={todoInputRef}
                        required
                    />
                    <Button className="rounded-l-none">Create Todo</Button>
                </form>
            )}
        </TodoConsumer>
    );
};

export default TodoForm;
