import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { addToHistory } from '../redux/action/contentAction';

const ContentCard = ({ content }) => {
    const { _id, image, title, description } = content;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { pathname } = useLocation()



    const handleCard = id => {

        if (!pathname.includes('read-history')) {
            dispatch(addToHistory(content))
        }


        //navigate(`/contents/${id}`)
    }
    return (
        <>
            <button onClick={() => handleCard(_id)}>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body text-left">
                        <h2 className="card-title">
                            {title.slice(0, 25)}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>{description.slice(0, 100)}...</p>
                        <div className="card-actions justify-end">
                            {
                                content.tags.map(tag => <div key={tag} className="badge badge-outline">{tag}</div>)
                            }
                        </div>
                    </div>
                </div>
            </button>
        </>
    );
};

export default ContentCard;