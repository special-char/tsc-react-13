import React from 'react';
import { Outlet } from 'react-router-dom';

const DashboardTemplate = () => {
    return (
        <>
            <header>
                <p>This is header</p>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>This is foooter</p>
            </footer>
        </>
    );
};

export default DashboardTemplate;
