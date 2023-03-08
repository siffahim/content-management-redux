import { loadContents, loading } from "../action/contentAction"

const contentFetching = () => {
    return async (dispatch, getState) => {
        dispatch(loading())
        const res = await fetch("http://localhost:5000/contents")
        const data = await res.json()

        if (data.length) {
            dispatch(loadContents(data))
        }
    }
}

export default contentFetching;