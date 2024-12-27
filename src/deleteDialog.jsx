import React, { createRef, PureComponent } from 'react';
import Button from './components/button';

class DeleteDialog extends PureComponent {
    dialogRef = createRef();

    componentDidUpdate() {
        if (this.props.open) {
            this.dialogRef.current.showModal();
        } else {
            this.dialogRef.current.close();
        }
    }

    render() {
        const { onConfirm } = this.props;

        return (
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
                        <Button onClick={() => this.dialogRef.current.close()}>
                            Cancel
                        </Button>
                        <Button onClick={() => onConfirm()}>Submit</Button>
                    </footer>
                </div>
            </dialog>
        );
    }
}

export default DeleteDialog;
