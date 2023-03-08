import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='col-span-2 bg-indigo-200 h-[calc(100vh-25px)] p-5 rounded-lg font-normal'>
            <ul className='flex flex-col gap-3 h-full'>
                <Link to='/dashboard'>Contents list</Link>
                <Link to='create-post'>Create Post</Link>
                <li className='mt-auto'>
                    <Link to='/'>Back to Home</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;