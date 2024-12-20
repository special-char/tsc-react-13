import React, { Component, createRef } from 'react';
import Input from './components/input';
import Button from './components/button';

export default class Todo extends Component {
    state = {
        todoList: [],
        id: null,
        filterType: 'all',
    };

    todoInputRef = createRef();
    dialogRef = createRef();

    loadTodoList = async () => {
        try {
            const res = await fetch('http://localhost:3000/todo-list');
            const json = await res.json();
            this.setState({ todoList: json });
        } catch (error) {}
    };

    createTodo = async (event) => {
        try {
            event.preventDefault();

            const todoTextInput = this.todoInputRef.current;

            const res = await fetch('http://localhost:3000/todo-list', {
                method: 'POST',
                body: JSON.stringify({
                    todoText: todoTextInput.value,
                    isDone: false,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const json = await res.json();

            this.setState(
                ({ todoList }) => {
                    const todoText = todoTextInput.value;
                    return {
                        todoList: [...todoList, json],
                    };
                },
                () => {
                    todoTextInput.value = '';
                },
            );
        } catch (error) {}
    };

    deleteTodo = async () => {
        try {
            await fetch(`http://localhost:3000/todo-list/${this.state.id}`, {
                method: 'DELETE',
            });

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
        } catch (error) {}
    };

    updateTodo = async (id) => {
        try {
            const index = this.state.todoList.findIndex((x) => x.id === id);
            const res = await fetch(`http://localhost:3000/todo-list/${id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    ...this.state.todoList[index],
                    isDone: !this.state.todoList[index].isDone,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const json = await res.json();

            this.setState({
                todoList: [
                    ...this.state.todoList.slice(0, index),
                    json,
                    ...this.state.todoList.slice(index + 1),
                ],
            });
        } catch (error) {}
    };

    changeFilterType = (filterType) => {
        this.setState({ filterType });
    };

    componentDidMount() {
        this.loadTodoList();
    }

    render() {
        console.log('log render');

        const { todoList, filterType } = this.state;
        return (
            <main className="flex flex-col items-center h-screen">
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
                <ul className="w-full flex-1 scroll-auto">
                    {todoList
                        .filter((item) => {
                            switch (filterType) {
                                case 'completed':
                                    return item.isDone === true;
                                case 'pending':
                                    return item.isDone === false;
                                default:
                                    return true;
                            }
                        })
                        .map((item) => {
                            return (
                                <li
                                    key={item.id}
                                    className="flex items-center gap-4 p-2"
                                >
                                    <input
                                        type="checkbox"
                                        checked={item.isDone}
                                        onChange={() =>
                                            this.updateTodo(item.id)
                                        }
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
                <div className="flex w-full">
                    <Button
                        className="flex-1 rounded-none"
                        onClick={() => this.changeFilterType('all')}
                    >
                        All
                    </Button>
                    <Button
                        className="flex-1 rounded-none"
                        onClick={() => this.changeFilterType('pending')}
                    >
                        Pending
                    </Button>
                    <Button
                        className="flex-1 rounded-none"
                        onClick={() => this.changeFilterType('completed')}
                    >
                        Completed
                    </Button>
                </div>
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
