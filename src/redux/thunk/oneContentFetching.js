import { loadOneContent } from "../action/contentAction"

const oneContentFetching = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/contents/${id}`)
        const data = await res.json()

        if (data) {
            dispatch(loadOneContent(data))
        }
    }
}

export default oneContentFetching;