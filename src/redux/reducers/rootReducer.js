import { combineReducers } from "redux";
import ColorReducer from "./colorReducer";
import ContactReducer from "./contactReducer";
const rootReducer = combineReducers({
    color:ColorReducer,   
    contact:ContactReducer
})
export default rootReducer;