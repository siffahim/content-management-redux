import { addContent } from "../action/contentAction"

const postContent = (content) => {
    return async (dispatch, getState) => {
        const res = await fetch("http://localhost:5000/contents", {
            method: 'POST',
            body: JSON.stringify(content),
            headers: {
                "Content-type": "application/json"
            }
        })
        const data = await res.json()

        if (data.acknowledged) {
            dispatch(addContent({
                _id: data.insertedId,
                ...content
            }))
        }


    }
}

export default postContent;