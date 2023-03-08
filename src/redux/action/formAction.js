import { INPUT, INPUT_TAG } from "../actionTypes/actionTypes"

export const postFormInput = (data) => {
    return {
        type: INPUT,
        payload: { name: data.target.name, value: data.target.value, }
    }
}

export const postFormInputTag = (data) => {
    return {
        type: INPUT_TAG,
        payload: data.target.value
    }
}