import React, { useEffect } from 'react';
import { CiEdit } from 'react-icons/ci';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import contentFetching from '../../redux/thunk/contentFetching';
import deleteContent from '../../redux/thunk/deleteContent';

const ContentList = () => {
    const contents = useSelector(state => state.content.contents)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(contentFetching())
    }, [dispatch])

    return (
        <div className='flex flex-col justify-center items-center h-full w-full'>
            <div className='w-full shadow-lg rounded-lg'>
                <header className='px-4 py-1'>
                    <div className='text-md font-normal'>
                        Content List
                    </div>
                </header>
                <div className="overflow-x-auto p-3">
                    <table className="table table-compact w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Last Login</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contents.map(({ _id, title, date }) => (
                                    <tr key={_id}>
                                        <label>
                                            <input type="checkbox" className="checkbox w-5 h-5" />
                                        </label>
                                        <td>{_id}</td>
                                        <td>{title}</td>
                                        <td className='text-indigo-800'>{date}</td>
                                        <td className='flex gap-3'>
                                            <div className='text-green-500'>
                                                <button>
                                                    <CiEdit size={20} />
                                                </button>
                                            </div>
                                            <div className='text-red-500'>
                                                <button
                                                    onClick={() => dispatch(deleteContent(_id))}
                                                >
                                                    <RiDeleteBinLine size={20} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ContentList;