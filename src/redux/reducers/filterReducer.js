import { TOGGLE_UPLOAD } from "../actionTypes/actionTypes";

const initialFilterState = {
    filters: {
        uploadNames: []
    },
    keyword: ""
}

const filterReducer = (state = initialFilterState, action) => {
    switch (action.type) {
        case TOGGLE_UPLOAD:
            if (!state.filters.uploadNames.includes(action.payload)) {
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        uploadNames: [...state.filters.uploadNames, action.payload]
                    }
                }
            }
            else {
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        uploadNames: state.filters.uploadNames.filter(uploadName => uploadName !== action.payload)
                    }
                }
            }
        default:
            return state
    }
}

export default filterReducer;