import { createStore } from "redux";
import userReducer from "../store/reducer/userReducer";

const store = createStore(userReducer);

export default store;
