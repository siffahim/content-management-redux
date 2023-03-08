import { ADD_CONTENT, ADD_TO_HISTORY, LOADING, LOAD_CONTENTS, LOAD_MORE_CONTENT, LOAD_ONE_CONTENT, REMOVE_CONTENT } from "../actionTypes/actionTypes";

const initialState = {
    loading: false,
    contents: [],
    oneContent: {},
    history: [],
    moreContentCount: 6
}


const contentReducer = (state = initialState, action) => {
    const selectedContent = state.history.find(content => content._id === action.payload._id);

    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case LOAD_CONTENTS:
            return {
                ...state,
                contents: action.payload,
                loading: false
            }
        case LOAD_ONE_CONTENT:
            return {
                ...state,
                oneContent: action.payload
            }
        case ADD_CONTENT:
            return {
                ...state,
                contents: [...state.contents, action.payload],
            }
        case REMOVE_CONTENT:
            return {
                ...state,
                contents: state.contents.filter(content => content._id !== action.payload)
            }
        case LOAD_MORE_CONTENT:
            if (state.moreContentCount < state.contents.length) {
                return {
                    ...state,
                    moreContentCount: state.moreContentCount + 6
                }
            }
            return state
        case ADD_TO_HISTORY:
            if (selectedContent) {
                return
            }
            return {
                ...state,
                history: [...state.history, action.payload]
            }
        default:
            return state
    }
}

export default contentReducer;