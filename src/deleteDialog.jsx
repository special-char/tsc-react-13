import React, { forwardRef, memo } from 'react';
import Button from './components/button';

const DeleteDialog = forwardRef(({ closeDialog, deleteTodo }, ref) => {
    console.log('DeleteDialog ref');

    return (
        <dialog
            ref={ref}
            className="p-4 rounded-md shadow-md backdrop:bg-black/30"
        >
            <div className="flex flex-col gap-4">
                <header>are you sure you want to delete</header>
                <main>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vitae, omnis?
                </main>
                <footer className="self-end gap-4 flex">
                    <Button onClick={() => closeDialog()}>Cancel</Button>
                    <Button onClick={() => deleteTodo()}>Submit</Button>
                </footer>
            </div>
        </dialog>
    );
});

DeleteDialog.displayName = 'DeleteDialog';

export default DeleteDialog;
