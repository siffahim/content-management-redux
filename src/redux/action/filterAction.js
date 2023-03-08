import { TOGGLE_UPLOAD } from "../actionTypes/actionTypes"

export const toggleUpload = (uploadName) => {
    return {
        type: TOGGLE_UPLOAD,
        payload: uploadName
    }
}