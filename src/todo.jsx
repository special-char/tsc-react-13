import React, { Component, createRef } from 'react';
import Input from './components/input';
import Button from './components/button';
import TodoForm from './todoForm';
import TodoList from './todoList';
import TodoFooter from './todoFooter';
import DeleteDialog from './deleteDialog';

export default class Todo extends Component {
    todoInputRef = createRef();
    dialogRef = createRef();

    state = {
        todoList: [],
        id: null,
        filterType: 'all',
    };

    loadTodoList = async (filterType) => {
        try {
            let url = 'http://localhost:3000/todo-list';
            if (filterType !== 'all') {
                url += `?isDone=${filterType === 'completed'}`;
            }
            const res = await fetch(url);
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

    deleteTodoModal = (id) => {
        this.setState({ id });
        this.dialogRef.current.showModal();
    };

    closeDialog = () => {
        this.setState({ id: null }, () => {
            this.dialogRef.current.close();
        });
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
        this.loadTodoList('all');
    }

    render() {
        const { todoList } = this.state;
        console.log('Todo render');

        return (
            <main className="flex flex-col items-center h-screen">
                <h1 className="text-4xl font-semibold my-4">
                    Todo Application
                </h1>
                <TodoForm
                    createTodo={this.createTodo}
                    ref={this.todoInputRef}
                />
                <TodoList
                    todoList={todoList}
                    updateTodo={this.updateTodo}
                    deleteTodoModal={this.deleteTodoModal}
                />
                <TodoFooter loadTodoList={this.loadTodoList} />
                <DeleteDialog
                    closeDialog={this.closeDialog}
                    deleteTodo={this.deleteTodo}
                    ref={this.dialogRef}
                />
            </main>
        );
    }
}
