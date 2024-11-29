import React, { Component, createRef } from 'react';
import Input from './components/input';
import Button from './components/button';

export default class Todo extends Component {
    state = {
        todoList: [],
    };

    todoInputRef = createRef();

    createTodo = (event) => {
        event.preventDefault();

        const todoTextInput = this.todoInputRef.current;

        this.setState(
            ({ todoList }) => {
                const todoText = todoTextInput.value;
                return {
                    todoList: [...todoList, todoText],
                };
            },
            () => {
                todoTextInput.value = '';
            },
        );
    };

    render() {
        console.log('log render');

        const { todoList } = this.state;
        return (
            <main className="flex flex-col items-center">
                <h1 className="text-4xl font-semibold my-4">
                    Todo Application
                </h1>
                <form
                    onSubmit={this.createTodo}
                    className="flex w-full max-w-screen-sm px-4"
                >
                    <Input
                        id="todo-text"
                        label="Todo Text"
                        placeholder="Enter your todo here..."
                        variant="withoutLabel"
                        className="rounded-r-none"
                        ref={this.todoInputRef}
                        required
                    />
                    <Button className="rounded-l-none">Create Todo</Button>
                </form>
                <ul className="w-full">
                    {todoList.map((item, i) => {
                        return (
                            <li key={i} className="flex items-center gap-4 p-2">
                                <input type="checkbox" name="" id="" />
                                <p className="flex-1">{item}</p>
                                <Button>Delete</Button>
                            </li>
                        );
                    })}
                </ul>
            </main>
        );
    }
}
