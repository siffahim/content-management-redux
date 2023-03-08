import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsBell } from 'react-icons/bs';
import { FiBookOpen } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const hoverLinkStyle = 'hover:bg-indigo-400 hover:text-white p-2 rounded-md';
    return (
        <nav className='flex justify-between items-center h-18 bg-indigo-100 text-indigo-900 mx-auto p-1 px-10 font-normal'>
            <div className='flex items-center gap-5'>
                <Link to='/'>
                    <h1 className='text-2xl tracking-tighter font-normal rounded-sm px-1 py-1 bg-indigo-900 text-white'>𝓓𝓞𝓒</h1>
                </Link>
                <div className='overflow-hidden border border-indigo-200 mx-auto h-9  rounded-md py-5 flex items-center focus:border-indigo-900'>
                    <input type="search" className='h-12 w-96 bg-inherit px-2 text-sm rounded-lg outline-none' placeholder='Search...' name="s" id="" />
                    <button className='btn btn-ghost p-2'>
                        <BiSearch size={21} />
                    </button>
                </div>
            </div>
            <div>
                <ul className='flex items-center gap-1'>
                    <Link to='/dashboard/create-post'>
                        <li className={hoverLinkStyle}>Create Post</li>
                    </Link>
                    <Link to='dashboard'>
                        <li className={hoverLinkStyle}>Dashboard</li>
                    </Link>
                    <Link to='read-history'>
                        <li className='btn btn-ghost btn-circle text-indigo-900' title='Reading History'>
                            <FiBookOpen size={22} />
                        </li>
                    </Link>

                    <Link to='notifications'>
                        <li className="btn btn-ghost btn-circle" >
                            <div className='indicator'>
                                <BsBell size={22} />
                                <span className="badge badge-sm indicator-item w-4 text-[11px] bg-indigo-600 h-4 left-[2px]">8</span>
                            </div>
                        </li>
                    </Link>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-9 rounded-full">
                                <img src="https://placeimg.com/80/80/people" alt='' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-1 mr-2 p-2 shadow bg-base-100 font-medium text-lg rounded-sm w-48 space-y-1 ">
                            <li className='border-b hover:underline'>
                                <a href='#p'>
                                    SAIFUL ISLAM <br /> @siffahim
                                </a>
                            </li>
                            <Link to='dashboard'>
                                <li><a href='#d'>Dashboard</a></li>
                            </Link>
                            <li><a href='#p'>Reading History</a></li>
                            <li><a href='#p'>Settings</a></li>
                            <li className='border-t'><a href='#p'>Sign Out</a></li>
                        </ul>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;