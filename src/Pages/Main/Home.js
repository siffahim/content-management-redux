import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContentCard from '../../components/ContentCard';
import { loadMoreContent } from '../../redux/action/contentAction';
import { toggleUpload } from '../../redux/action/filterAction';
import contentFetching from '../../redux/thunk/contentFetching';

const Home = () => {

    const { contents, moreContentCount, loading } = useSelector(state => state.content)
    const { uploadNames } = useSelector(state => state.filter.filters)

    const dispatch = useDispatch()


    const activeClass = "bg-indigo-400 text-white"

    useEffect(() => {
        dispatch(contentFetching())
    }, [dispatch])



    let content;

    if (loading) {
        content = <p>Loading...</p>
    }

    if (!loading && contents.length === 0) {
        content = <p>Nothing to show, This list empty</p>
    }

    if (!loading && contents.length) {
        content = contents.slice(0, moreContentCount).map(content => <ContentCard key={content._id} content={content} />)
    }

    return (
        <div className='max-w-7xl mx-auto gap-14 my-10'>
            <div className='mb-7 flex justify-end gap-5 items-center'>
                <div className='flex gap-2'>
                    <button
                        className={`border px-3 py-1 rounded-full ${uploadNames.includes("first_upload") ? activeClass : null}`}
                        onClick={() => dispatch(toggleUpload('first_upload'))}
                    >
                        First upload</button>
                    <button
                        className={`border px-3 py-1 rounded-full ${uploadNames.includes("last_upload") ? activeClass : null}`}
                        onClick={() => dispatch(toggleUpload('last_upload'))}
                    >
                        Last upload</button>

                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
                {content}
            </div>
            <div className='text-center mt-5'>
                <button
                    className='border mx-auto p-2 rounded-md text-gray-400 hover:text-gray-600'
                    onClick={() => dispatch(loadMoreContent())}
                >Load More...</button>
            </div>
        </div>
    );
};

export default Home;