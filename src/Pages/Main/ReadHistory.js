import React from 'react';
import { useSelector } from 'react-redux';
import ContentCard from '../../components/ContentCard';

const ReadHistory = () => {
    const contents = useSelector(state => state.content.history)
    const loading = useSelector(state => state.content.loading)

    let content;

    if (loading) {
        content = <p>Loading...</p>
    }

    if (!loading && contents.length === 0) {
        content = <p>Nothing to show, This list empty</p>
    }

    if (!loading && contents.length) {
        content = contents.map(content => <ContentCard key={content._id} content={content} />)
    }

    return (
        <div className='max-w-7xl mx-auto gap-14 my-14'>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
                {content}
            </div>
        </div>
    );
};

export default ReadHistory;