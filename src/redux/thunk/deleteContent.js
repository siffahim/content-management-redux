import { removeContent } from "../action/contentAction"

const deleteContent = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/contents/${id}`, {
            method: 'DELETE'
        })
        const data = await res.json()

        if (data.acknowledged) {
            dispatch(removeContent(id))
        }
    }
}

export default deleteContent;