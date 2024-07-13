import reducer from "./navbarReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
	navbar: reducer,
});

export default reducers;

export type NavbarState = ReturnType<typeof reducers>;
