import { combineReducers } from "redux";
import contentReducer from "./contentReducer";
import filterReducer from "./filterReducer";
import postFormReducer from "./postFormReducer";

const rootReducer = combineReducers({
    content: contentReducer,
    postForm: postFormReducer,
    filter: filterReducer
})

export default rootReducer;