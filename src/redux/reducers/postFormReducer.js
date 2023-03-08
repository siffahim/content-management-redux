import { INPUT, INPUT_TAG } from "../actionTypes/actionTypes";

const date = new Date()

const initialFormState = {
    image: "",
    tags: [],
    title: "",
    date: date.toLocaleDateString(),
    description: ""
}

const postFormReducer = (state = initialFormState, action) => {
    switch (action.type) {
        case INPUT:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case INPUT_TAG:
            return {
                ...state,
                tags: [...state.tags, action.payload]
            }
        default:
            return state
    }
}

export default postFormReducer;