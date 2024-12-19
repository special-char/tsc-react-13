import React, { Component, createRef } from 'react';
import Input from './components/input';
import Button from './components/button';

export default class Todo extends Component {
    state = {
        todoList: [],
        id: null,
    };

    todoInputRef = createRef();
    dialogRef = createRef();

    createTodo = (event) => {
        event.preventDefault();

        const todoTextInput = this.todoInputRef.current;

        this.setState(
            ({ todoList }) => {
                const todoText = todoTextInput.value;
                return {
                    todoList: [
                        ...todoList,
                        { id: new Date().valueOf(), todoText, isDone: false },
                    ],
                };
            },
            () => {
                todoTextInput.value = '';
            },
        );
    };

    deleteTodo = () => {
        this.setState(
            ({ todoList, id }) => {
                const index = todoList.findIndex((x) => x.id === id);

                return {
                    todoList: [
                        ...todoList.slice(0, index),
                        ...todoList.slice(index + 1),
                    ],
                    id: null,
                };
            },
            () => {
                this.dialogRef.current.close();
            },
        );
    };

    updateTodo = (id) => {
        this.setState(({ todoList }) => {
            const index = todoList.findIndex((x) => x.id === id);

            return {
                todoList: [
                    ...todoList.slice(0, index),
                    { ...todoList[index], isDone: !todoList[index].isDone },
                    ...todoList.slice(index + 1),
                ],
            };
        });
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
                    {todoList.map((item) => {
                        return (
                            <li
                                key={item.id}
                                className="flex items-center gap-4 p-2"
                            >
                                <input
                                    type="checkbox"
                                    checked={item.isDone}
                                    onChange={() => this.updateTodo(item.id)}
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
                                <Button
                                    onClick={() => {
                                        this.setState({ id: item.id });
                                        this.dialogRef.current.showModal();
                                    }}
                                >
                                    Delete
                                </Button>
                            </li>
                        );
                    })}
                </ul>
                <dialog
                    ref={this.dialogRef}
                    className="p-4 rounded-md shadow-md backdrop:bg-black/30"
                >
                    <div className="flex flex-col gap-4">
                        <header>are you sure you want to delete</header>
                        <main>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Vitae, omnis?
                        </main>
                        <footer className="self-end gap-4 flex">
                            <Button
                                onClick={() => {
                                    this.setState({ id: null }, () => {
                                        this.dialogRef.current.close();
                                    });
                                }}
                            >
                                Cancel
                            </Button>
                            <Button
                                onClick={() => {
                                    this.deleteTodo();
                                }}
                            >
                                Submit
                            </Button>
                        </footer>
                    </div>
                </dialog>
            </main>
        );
    }
}
