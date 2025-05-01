import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';

const Layout = () => {
    return (
        <div className="h-screen flex flex-col overflow-hidden">
            <TopBar />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <div className="flex-1 p-4 normal-color overflow-y-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;



// 💿 Hey developer 👋

// You can provide a way better UX than this when your app throws errors by providing your own ErrorBoundary or errorElement prop on your route.