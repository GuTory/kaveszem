import { navbarStateType } from "../action-types";

interface FullAction {
	type: navbarStateType.Full;
}

interface NarrowAction {
	type: navbarStateType.Narrow;
}

interface MobileAction {
	type: navbarStateType.Mobile;
}

export type Action = FullAction | NarrowAction | MobileAction;
