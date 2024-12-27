import React, { createContext, createRef, PureComponent } from 'react';

export const { Provider, Consumer: TodoConsumer } = createContext();

export class TodoProvider extends PureComponent {
    todoInputRef = createRef();

    state = {
        todoList: [],
        filterType: 'all',
    };

    loadTodo = async (filterType) => {
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

    addTodo = async (event) => {
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

    deleteTodo = async (id) => {
        try {
            await fetch(`http://localhost:3000/todo-list/${id}`, {
                method: 'DELETE',
            });

            this.setState(({ todoList, id }) => {
                const index = todoList.findIndex((x) => x.id === id);
                return {
                    todoList: [
                        ...todoList.slice(0, index),
                        ...todoList.slice(index + 1),
                    ],
                    id: null,
                    showDialog: false,
                };
            });
        } catch (error) {}
    };

    componentDidMount() {
        this.loadTodo();
    }

    render() {
        const { children } = this.props;
        const { todoList } = this.state;
        return (
            <Provider
                value={{
                    todoList,
                    todoInputRef: this.todoInputRef,
                    loadTodo: this.loadTodo,
                    addTodo: this.addTodo,
                    updateTodo: this.updateTodo,
                    deleteTodo: this.deleteTodo,
                }}
            >
                {children}
            </Provider>
        );
    }
}
