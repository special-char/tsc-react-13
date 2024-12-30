import React, { createContext, createRef, PureComponent } from 'react';
import DeleteDialog from '../deleteDialog';

export const { Provider, Consumer: TodoConsumer } = createContext();

export class TodoProvider extends PureComponent {
    todoInputRef = createRef();

    state = {
        todoList: [],
        filterType: 'all',
        showDialog: false,
        deleteId: null,
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
            this.setState(({ todoList }) => {
                const index = todoList.findIndex((x) => x.id === id);
                console.log('index', index);
                console.log('todoList', todoList);
                return {
                    todoList: [
                        ...todoList.slice(0, index),
                        ...todoList.slice(index + 1),
                    ],
                    deleteId: null,
                    showDialog: false,
                };
            });
        } catch (error) {}
    };

    confirmDeleteTodo = (id) => {
        this.setState((state, props) => {
            return {
                deleteId: id,
                showDialog: true,
            };
        });
    };

    toggleDialog = () => {
        this.setState(({ showDialog }) => {
            return { showDialog: !showDialog };
        });
    };

    componentDidMount() {
        this.loadTodo();
    }

    render() {
        const { children } = this.props;
        const { todoList, showDialog, deleteId } = this.state;
        return (
            <Provider
                value={{
                    todoList,
                    todoInputRef: this.todoInputRef,
                    loadTodo: this.loadTodo,
                    addTodo: this.addTodo,
                    updateTodo: this.updateTodo,
                    deleteTodo: this.confirmDeleteTodo,
                }}
            >
                {children}
                <DeleteDialog
                    open={showDialog}
                    onConfirm={() => this.deleteTodo(deleteId)}
                    onClose={() => this.toggleDialog()}
                />
            </Provider>
        );
    }
}
