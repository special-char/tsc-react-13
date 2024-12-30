import React, { Component, createRef } from 'react';
import TodoForm from './todoForm';
import TodoList from './todoList';
import TodoFooter from './todoFooter';
import DeleteDialog from './deleteDialog';

export default class Todo extends Component {
    render() {
        return (
            <main className="flex flex-col items-center h-screen">
                <h1 className="text-4xl font-semibold my-4">
                    Todo Application
                </h1>
                <TodoForm />
                <TodoList />
                <TodoFooter />
            </main>
        );
    }
}
