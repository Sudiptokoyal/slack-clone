import { setUser, resetUser } from "../actions";

const initialState = {
	user: null,
};

export const userReducer = (state, action) => {
	console.log(action.type);
	switch (action.type) {
		case setUser():
			return {
				...state,
				user: action.payload,
			};
		case resetUser():
			return {
				...state,
				user: initialState,
			};
		default:
			return state;
	}
};
