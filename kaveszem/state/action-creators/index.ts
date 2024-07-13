import { createAction } from "@reduxjs/toolkit";
import { navbarStateType } from "../action-types";

export const setFull = createAction(navbarStateType.Full);
export const setNarrow = createAction(navbarStateType.Narrow);
export const setMobile = createAction(navbarStateType.Mobile);
