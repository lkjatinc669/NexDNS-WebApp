import React from 'react'
import { NavLink } from 'react-router-dom';
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar';

const Layout = () => {
    return (
        <div className="h-screen flex flex-col">
            <TopBar />
            <div className="flex flex-1">
                <Sidebar />
                <div className="flex-1 p-4 bg-gray-900">
                    {/* Content goes here */}
                </div>
            </div>
        </div>
    );
};

export default Layout;





// 💿 Hey developer 👋

// You can provide a way better UX than this when your app throws errors by providing your own ErrorBoundary or errorElement prop on your route.