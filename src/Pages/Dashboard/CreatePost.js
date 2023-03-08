import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { useDispatch, useSelector } from 'react-redux';
import { postFormInput, postFormInputTag } from '../../redux/action/formAction';
import postContent from '../../redux/thunk/postContent';

const CreatePost = () => {
    const [value, setValue] = useState('');

    const dispatch = useDispatch()
    const state = useSelector(state => state.postForm)



    const handleSubmit = e => {
        e.preventDefault()

        dispatch(postContent(state))
    }


    return (
        <div className='grid grid-cols-12 p-3 my-10 gap-4 '>
            <div className='col-span-9'>
                <form onSubmit={handleSubmit}>
                    <div className='px-12 py-5 shadow space-y-7'>
                        <div>
                            <label htmlFor="img" className='border p-2 rounded-md'>Add a cover image</label>
                            <input
                                type="file"
                                multiple
                                accept='image/*'
                                name=""
                                id="img"
                                className='invisible' />
                        </div>
                        <div>
                            <input
                                type="text"
                                name='image'
                                className=' text-xl font-normal text-gray-600 outline-none' placeholder='Image link here...'
                                onBlur={e => dispatch(postFormInput(e))}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name='title'
                                className=' text-4xl font-bold text-gray-600 outline-none' placeholder='New post title here...'
                                onBlur={e => dispatch(postFormInput(e))}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name='tags'
                                className=' outline-none'
                                placeholder='Add up to 4 tags'
                                onBlur={e => dispatch(postFormInputTag(e))}
                            />
                        </div>
                        <div>
                            <textarea
                                name="description"
                                className='border w-full outline-none font-normal text-sm'
                                resize='none'
                                rows="5"
                                onBlur={e => dispatch(postFormInput(e))}
                            ></textarea>
                        </div>
                        <div>
                            {/* <ReactQuill value={value} onChange={setValue}>

                            </ReactQuill> */}
                        </div>
                    </div>
                    <input
                        type="submit"
                        value="Publish"
                        className='bg-indigo-500 mt-5 text-white p-2 px-4 rounded-sm cursor-pointer hover:bg-indigo-600'
                    />
                </form>
            </div>
            <div className='col-span-3 font-light'>
                <div>
                    <h1 className='font-bold'>Writing a Great Post Title</h1>
                    <ul className='text-gray-500'>
                        <li>1.Think of your post title as a super short (but compelling!) description — like an overview of the actual post in one short sentence.</li>
                        <li>2.Use keywords where appropriate to help ensure people can find your post by search.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;