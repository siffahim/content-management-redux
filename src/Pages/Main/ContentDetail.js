import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import oneContentFetching from '../../redux/thunk/oneContentFetching';

const ContentDetail = () => {
    const { contentId } = useParams()
    const dispatch = useDispatch()
    const { _id, image, description, title } = useSelector(state => state.content.oneContent)

    useEffect(() => {
        dispatch(oneContentFetching(contentId))
    }, [dispatch, contentId])

    return (
        <div className='max-w-7xl mx-auto my-10'>
            <div className='grid grid-cols-12 gap-10'>
                <div className='col-span-3'>
                    <h1 className='font-bold'>Writing a Great Post Title</h1>
                    <ul>
                        <li>1.Think of your post title as a super short (but compelling!) description — like an overview of the actual post in one short sentence.</li>
                        <li>2.Use keywords where appropriate to help ensure people can find your post by search.</li>
                    </ul>
                </div>
                <div className='col-span-6'>
                    <div className="card glass">
                        <figure><img src={image} alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-3'>
                    <h1 className='font-bold'>Writing a Great Post Title</h1>
                    <ul>
                        <li>1.Think of your post title as a super short (but compelling!) description — like an overview of the actual post in one short sentence.</li>
                        <li>2.Use keywords where appropriate to help ensure people can find your post by search.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ContentDetail;