import { combineReducers } from "redux";
import productReducer from "./ProductReducer";

const allreducer = combineReducers({
    productReducer
});
export default allreducer;
