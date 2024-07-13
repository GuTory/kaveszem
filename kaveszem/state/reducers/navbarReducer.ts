import { navbarStateType } from "../action-types";
import { createReducer } from "@reduxjs/toolkit";
import { setFull, setMobile, setNarrow } from "../action-creators";

const initialState = navbarStateType.Full;

const reducer = createReducer(initialState, (builder) => {
	builder
		.addCase(setFull, (state, action) => {
			return navbarStateType.Full;
		})
		.addCase(setNarrow, (state, action) => {
			return navbarStateType.Narrow;
		})
		.addCase(setMobile, (state, action) => {
			return navbarStateType.Mobile;
		})
		.addDefaultCase((state, action) => {
			return state;
		});
});

export default reducer;
