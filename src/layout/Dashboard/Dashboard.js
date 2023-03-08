import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Dashboard = () => {
    return (
        <div className='grid grid-cols-12 p-3'>
            <Sidebar />
            <div className='col-span-10 rounded-lg w-full'>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;