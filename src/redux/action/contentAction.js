import { ADD_CONTENT, ADD_TO_HISTORY, LOADING, LOAD_CONTENTS, LOAD_MORE_CONTENT, LOAD_ONE_CONTENT, REMOVE_CONTENT } from "../actionTypes/actionTypes"

export const loading = () => {
    return {
        type: LOADING,
    }
}

// START CONTENT CRUD
export const loadContents = (data) => {
    return {
        type: LOAD_CONTENTS,
        payload: data
    }
}

export const loadOneContent = (content) => {
    return {
        type: LOAD_ONE_CONTENT,
        payload: content
    }
}

export const addContent = (content) => {
    return {
        type: ADD_CONTENT,
        payload: content
    }
}
export const removeContent = (id) => {
    return {
        type: REMOVE_CONTENT,
        payload: id
    }
}

//LOAD more button action dispatch function
export const loadMoreContent = () => {
    return {
        type: LOAD_MORE_CONTENT
    }
}


//START WORK FOR READING HISTORY ADD
export const addToHistory = (content) => {
    return {
        type: ADD_TO_HISTORY,
        payload: content
    }
}